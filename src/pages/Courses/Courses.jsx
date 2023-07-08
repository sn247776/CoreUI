import { Box, IconButton, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/action/courses';
import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DashboardLayout from '../../components/Layout/DashboardLayout';
import Loading from '../../components/Layout/Loading';
import MainHead from '../../components/Layout/MainHead';

const Courses = () => {
  const dispatch = useDispatch();

  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const columns = ['Name', 'Code', 'Type', 'Actions'];

  const data = courses?.map((course) => [
    course.name,
    course.code,
    course.type,
    <Box>
      <Link to={`/courses/edit/${course.id}`}>
      <Tooltip title="Edit">
          <IconButton>
            <EditIcon />
          </IconButton>
          </Tooltip>
        </Link>
        <Link to={`/courses/view/${course.id}`}>
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
       <MainHead heading="Courses List"/>
      <MUIDataTable
        color={'secondary'}
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default DashboardLayout(Courses);
