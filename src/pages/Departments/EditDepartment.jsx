import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { updateDepartment, getDepartmentInfo } from "../../redux/action/departments";
import { getAllFaculties } from "../../redux/action/faculties";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Loading from "../../components/Layout/Loading";
import SaveIcon from "@mui/icons-material/Save";
import SecondaryHead from "../../components/Layout/SecondaryHead";

const EditDepartment = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [headId, setHeadId] = useState(null);
  const [facultiesId, setFacultiesId] = useState([]);

  const params = useParams();
  const dispatch = useDispatch();

  const { departmentInfo, loading, error, message } = useSelector(
    (state) => state.departments
  );
  const { faculties } = useSelector((state) => state.faculties);

  useEffect(() => {
    dispatch(getDepartmentInfo(params.id));
    dispatch(getAllFaculties());
  }, [dispatch, params.id]);

  useEffect(() => {
    if (departmentInfo) {
      setName(departmentInfo.name);
      setCode(departmentInfo.code);
      setHeadId(departmentInfo.head_id);
      setFacultiesId(departmentInfo.faculties_id);
    }
  }, [departmentInfo]);

  const handleHeadId = (event, value) => {
    if (value) {
      setHeadId(value.id);
    } else {
      setHeadId(null);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const departmentData = JSON.stringify({
      id: params.id,
      name: name,
      code: code,
      head_id: headId,
      faculties_id: facultiesId,
    });
    dispatch(updateDepartment(params.id, departmentData));
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, message]);

  if (loading) {
    return <Loading/>;
  }

  return (
    <Box>
      <SecondaryHead heading="Edit Departments" icon={<BusinessCenterIcon/>}/>
      <Box>
        <form onSubmit={submitHandler}>
          <Box>
            <TextField
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              label="Department Name"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={code}
              onChange={(e) => setCode(e.target.value)}
              label="Department Code"
              color="primary"
              variant="filled"
            />

            <Autocomplete
              options={faculties}
              getOptionLabel={(option) => option.name}
              onChange={handleHeadId}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Department Head"
                  variant="filled"
                  margin="normal"
                />
              )}
              value={faculties?.find((faculty) => faculty.id === headId) || null}
            />

            {faculties && (
              <Autocomplete
                multiple
                options={faculties}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) =>
                  setFacultiesId(value.map((item) => item.id))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Faculties"
                    variant="filled"
                    margin="normal"
                  />
                )}
                value={faculties?.filter((faculty) =>
                  facultiesId.includes(faculty.id)
                )}
              />
            )}


          </Box>
          <Box textAlign={"right"}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              startIcon={<SaveIcon />}
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                textTransform: "none",
                margin: "0 5px",
                width: "90px",
              }}
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default DashboardLayout(EditDepartment);
