import { Box, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFaculties } from '../../redux/action/faculties';
import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DashboardLayout from '../../components/Layout/DashboardLayout';

const Faculties = () => {
  const dispatch = useDispatch();

  const { faculties, loading } = useSelector((state) => state.faculties);

  useEffect(() => {
    dispatch(getAllFaculties());
  }, [dispatch]);

  const columns = ['Full Name', 'Serial', 'Email ID', 'Pin Code', 'DOB', 'Actions'];

  const data = faculties?.map((faculty) => [
    faculty.name,
    faculty.serial,
    faculty.email_id,
    faculty.pin_code,
    faculty.dob,
    <Box>
      <Link to={`/edit-facultie/${faculty.id}`}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Link>
      <Link to={`/view-facultie/${faculty.id}`}>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
      </Link>
    </Box>
  ]);

  const options = {
    filter: false,
    columns: false,
    selectableRows: 'none',
  };

  return (
    <Box p={2}>
      <MUIDataTable
        title={'Faculty List'}
        color={'secondary'}
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default DashboardLayout(Faculties);
