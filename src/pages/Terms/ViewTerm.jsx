import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-hot-toast";

import DashboardLayout from "../../components/Layout/DashboardLayout";
import { deleteTerm, getTermInfo } from "../../redux/action/terms";

const ViewTerm = () => {
  const { termInfo, loading, error, message } = useSelector(
    (state) => state.terms
  );
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteButtonHandler = (termID) => {
    dispatch(deleteTerm(termID));
  };

  useEffect(() => {
    dispatch(getTermInfo(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (error) {
      console.log("Error:", error);
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      console.log("Success:", message);
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/terms");
    }
  }, [dispatch, error, message]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!termInfo) {
    return null;
  }

  const { name, code, duration } = termInfo;

  return (
    <Box p={2}>
      <Box>
        <p>Name: {name}</p>
        <p>Code: {code}</p>
        <p>Duration: {duration}</p>
      </Box>
      <Box my={2}>
        <Link to={`/edit-term/${params.id}`}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<EditIcon />}
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              textTransform: "none",
              margin: "0 5px",
              width: "90px",
            }}
          >
            Edit
          </Button>
        </Link>
        <Button
          color="error"
          variant="contained"
          onClick={() => deleteButtonHandler(params.id)}
          startIcon={<DeleteIcon />}
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            textTransform: "none",
            margin: "0 5px",
            width: "90px",
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardLayout(ViewTerm);
