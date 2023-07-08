import { Box, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { getAllTerms } from '../../redux/action/terms';

const Terms = () => {
  const dispatch = useDispatch();

  const { terms, loading } = useSelector((state) => state.terms);

  useEffect(() => {
    dispatch(getAllTerms());
  }, [dispatch]);

 
  const columns = ['Name', 'Duration','Code', 'Actions'];

  const data = terms?.map((term) => [
    term.name,
    term.duration,
    term.code,
    <Box>
      <Link to={`/edit-term/${term.id}`}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Link>
      <Link to={`/view-term/${term.id}`}>
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
        title={'Term List'}
        color={'secondary'}
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default DashboardLayout(Terms);
