import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-hot-toast";
import { deleteDepartment, getDepartmentInfo } from "../../redux/action/departments";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import SecondaryHead from "../../components/Layout/SecondaryHead";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Loading from "../../components/Layout/Loading";

const ViewDepartment = () => {
  const { departmentInfo, loading, error, message } = useSelector(
    (state) => state.departments
  );
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteButtonHandler = (departmentID) => {
    dispatch(deleteDepartment(departmentID));
  };

  useEffect(() => {
    dispatch(getDepartmentInfo(params.id));
  }, [dispatch, params.id]);

  console.log(departmentInfo)

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
      navigate("/departments");
    }
  }, [dispatch, error, message]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!departmentInfo) {
    return null;
  }

  const { name, code, head_id, faculties_id, id } = departmentInfo;

  return (
    <Box >
      <SecondaryHead heading="View Departments" icon={<BusinessCenterIcon />} />
      <Box>
        <p>Name: {name}</p>
        <p>Code: {code}</p>
        <p>Head ID: {head_id}</p>
        <p>Faculties ID: {faculties_id.join(", ")}</p>
      </Box>
      <Box my={2}>
        <Link to={`/edit-department/${id}`}>
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
          onClick={() => deleteButtonHandler(id)}
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

export default DashboardLayout(ViewDepartment);
