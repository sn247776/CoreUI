import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getStudentInfo } from "../../redux/action/students";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-hot-toast";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import Loading from "../../components/Layout/Loading";
import PersonIcon from "@mui/icons-material/Person";
import SecondaryHead from "../../components/Layout/SecondaryHead";

const ViewStudent = () => {
  const { studentinfo, loading, error, message } = useSelector(
    (state) => state.students
  );
  const params = useParams();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const deleteButtonHandler = (studentID) => { 
    dispatch(deleteStudent(studentID));
  };

  useEffect(() => {
    dispatch(getStudentInfo(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (error) {
      console.log("Error:", error);
      toast.error(error)
      dispatch({ type: "clearError" });
    }

    if (message) {
      console.log("Success:", message);
      toast.success(message)
      dispatch({ type: "clearMessage" });
      navigate("/students");
    }
  }, [dispatch, error, message]);

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!studentinfo) {
    return null;
  }

  const items = studentinfo;

  return (
    <Box>
      <SecondaryHead heading="Edit Student" icon={<PersonIcon />} />
      <Box>
        <p>Full Name: {items.name}</p>
        <p>Date of Birth: {items.dob}</p>
        <p>Email ID: {items.email_id}</p>
        <p>Contact No: {items.contact_no}</p>
        <p>Pin Code: {items.pin_code}</p>
        <p>State: {items.state}</p>
        <p>District: {items.district}</p>
        <p>Block: {items.block}</p>
        <p>Gender: {items.gender}</p>
        <p>Category: {items.category}</p>
        <p>Religion: {items.religion}</p>
        <p>Marital Status: {items.marital_status}</p>
        <p>Aadhar No: {items.aadhar_no}</p>
        <p>Father's Name: {items.father_name}</p>
        <p>Mother's Name: {items.mother_name}</p>
        <p>Parent Contact: {items.parent_contact}</p>
        <p>Emergency Contact: {items.emergency_contact}</p>
      </Box>
      <Box my={2}>
        <Link to={`/students/edit/${items.id}`}>
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
          onClick={() => deleteButtonHandler(items.id)}
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

export default DashboardLayout(ViewStudent);
