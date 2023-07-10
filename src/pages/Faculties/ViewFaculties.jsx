import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-hot-toast";
import { deleteFaculty, getFacultyInfo } from "../../redux/action/faculties";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const ViewFaculty = () => {
  const { facultyInfo, loading, error, message } = useSelector(
    (state) => state.faculties
  );
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteButtonHandler = (facultyID) => {
    dispatch(deleteFaculty(facultyID));
  };

  useEffect(() => {
    dispatch(getFacultyInfo(params.id));
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
      navigate("/faculties");
    }
  }, [dispatch, error, message]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!facultyInfo) {
    return null;
  }

  const faculty = facultyInfo;

  return (
    <Box p={2}>
      <Box>
        <p>Full Name: {faculty.name}</p>
        <p>Serial: {faculty.serial}</p>
        <p>Email ID: {faculty.email_id}</p>
        <p>Pin Code: {faculty.pin_code}</p>
        <p>DOB: {faculty.dob}</p>
        <p>Contact No: {faculty.contact_no}</p>
        <p>State: {faculty.state}</p>
        <p>District: {faculty.district}</p>
        <p>Block: {faculty.block}</p>
        <p>Gender: {faculty.gender}</p>
        <p>Category: {faculty.category}</p>
        <p>Religion: {faculty.religion}</p>
        <p>Marital Status: {faculty.marital_status}</p>
        <p>Emergency Contact: {faculty.emergency_contact}</p>
      </Box>
      <Box my={2}>
        <Link to={`/edit-faculty/${faculty.id}`}>
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
          onClick={() => deleteButtonHandler(faculty.id)}
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

export default DashboardLayout(ViewFaculty);
