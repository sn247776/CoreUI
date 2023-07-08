import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { addDepartment } from "../../redux/action/departments";
import { useEffect } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { getAllFaculties } from "../../redux/action/faculties";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SecondaryHead from "../../components/Layout/SecondaryHead";
import Loading from "../../components/Layout/Loading";

const AddDepartment = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [headId, setHeadId] = useState(null);
  const [facultiesId, setFacultiesId] = useState([]);

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.departments);
  const { faculties } = useSelector((state) => state.faculties);

  useEffect(() => {
    dispatch(getAllFaculties());
  }, [dispatch]);

  console.log(faculties);

  const handleHeadId = (event, value) => {
    if (value) {
      setHeadId(value.id);
    } else {
      setHeadId(null);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const departmentData = {
      name: name,
      code: code,
      head_id: headId,
      faculties_id: facultiesId,
    };

    dispatch(addDepartment(departmentData));
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      console.log(message);
      toast.success(message);
    }
  }, [dispatch, error, message]);

  return (
    <Box>
      {loading? <Loading/>:null}
      <SecondaryHead heading="Create Departments" icon={<BusinessCenterIcon/>}/>
      <Box>
        <form onSubmit={submitHandler}>
          <Box className="add-department">
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
            />

            {faculties && ( // Add a conditional rendering check
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
                    label="Faculties ID"
                    variant="filled"
                    margin="normal"
                  />
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

export default DashboardLayout(AddDepartment);
