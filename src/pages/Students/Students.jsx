import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Tooltip,
  InputAdornment,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../redux/action/students";
import { Link, NavLink } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import SearchIcon from "@mui/icons-material/Search";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Loading from "../../components/Layout/Loading";

const Students = () => {
  const dispatch = useDispatch();
  const { loading, students, total } = useSelector((state) => state.students);

  const [page, setPage] = useState(() => {
    const savedPage = sessionStorage.getItem("page");
    return savedPage ? parseInt(savedPage, 10) : 0;
  });

  const [rowsPerPage, setRowsPerPage] = useState(() => {
    const savedRowsPerPage = sessionStorage.getItem("rowsPerPage");
    return savedRowsPerPage ? parseInt(savedRowsPerPage, 10) : 10;
  });

  const [keyword, setKeyword] = useState("");

  const handleSearch = (event) => {
    setKeyword(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    dispatch(getAllStudents(keyword, start, end));
    sessionStorage.setItem("page", page.toString());
    sessionStorage.setItem("rowsPerPage", rowsPerPage.toString());
  }, [page, rowsPerPage, keyword, dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      {loading ? <Loading /> : null}
      <Box
        p={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5" style={{ fontWeight: "700" }}>
          Students List
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={"0 20px"}>
          <TextField
            value={keyword}
            onChange={handleSearch}
            size="medium"
            variant="standard"
            placeholder="Search Student.."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <NavLink to={"/students/create"}>
            <Button
              color="primary"
              variant="contained"
              startIcon={<ControlPointIcon />}
              sx={{
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Create
            </Button>
          </NavLink>
        </Box>
      </Box>
      <TableContainer>
        <Table>
          <TableHead >
            <TableRow >
              <TableCell className="table-header">Name</TableCell>
              <TableCell className="table-header">Serial</TableCell>
              <TableCell className="table-header">Email</TableCell>
              <TableCell className="table-header">PIN Code</TableCell>
              <TableCell className="table-header">DOB</TableCell>
              <TableCell className="table-header">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students &&
              students.map((item) => <Row key={item.id} item={item} />)}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">
          {!keyword ? "Total Students:" : "Students Found"} {total}
        </Typography>
        <TablePagination
          component="div"
          count={total}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default DashboardLayout(Students);

const Row = React.memo(({ item }) => {
  return (
    <TableRow>
      <TableCell size="small">{item.name}</TableCell>
      <TableCell size="small">{item.serial}</TableCell>
      <TableCell size="small">{item.email_id}</TableCell>
      <TableCell size="small">{item.pin_code}</TableCell>
      <TableCell size="small">{item.dob}</TableCell>

      <TableCell size="small">
        <Link to={`/students/edit/${item.id}`}>
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to={`/students/view/${item.id}`}>
          <Tooltip title="View">
            <IconButton>
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        </Link>
      </TableCell>
    </TableRow>
  );
});
