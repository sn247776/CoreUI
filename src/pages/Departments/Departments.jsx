import { Box, IconButton, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartments } from '../../redux/action/departments';
import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DashboardLayout from '../../components/Layout/DashboardLayout';
import MainHead from '../../components/Layout/MainHead'
import Loading from '../../components/Layout/Loading';

const Departments = () => {
  const dispatch = useDispatch();

  const { departments, loading } = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(getAllDepartments());
  }, [dispatch]);

  const columns = ['Name', 'Code', 'Head', 'Actions'];

  const data = departments?.map((department) => [
    department.name,
    department.code,

    department.head_name,
    <Box>
      <Link to={`/departments/edit/${department.id}`}>
      <Tooltip title="Edit">
          <IconButton>
            <EditIcon />
          </IconButton>
          </Tooltip>
        </Link>
        <Link to={`/departments/view/${department.id}`}>
        <Tooltip title="View">
          <IconButton>
            <VisibilityIcon />
          </IconButton>
          </Tooltip>
        </Link>
    </Box>
  ]);

  const options = {
    filter: false,
    columns: false,
    selectableRows: 'none',
  };

  return (
    <Box>
      {loading? <Loading/>:null}
      <MainHead heading="Department List"/>
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default DashboardLayout(Departments);
