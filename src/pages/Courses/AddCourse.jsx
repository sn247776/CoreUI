import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Autocomplete, Box, Button, Paper, TextField } from "@mui/material";
import { addCourse } from "../../redux/action/courses";
import { getAllDepartments } from "../../redux/action/departments";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDepartments());
  }, [dispatch]);

  const handleDepartmentChange = (event, value) => {
    if (value) {
      setSelectedDepartmentId(value.id);
    } else {
      setSelectedDepartmentId(null);
    }
  };

  const { courseInfo, loading, error, message } = useSelector(
    (state) => state.courses
  );
  const { departments } = useSelector((state) => state.departments);

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

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify({
      name: name,
      code: code,
      type: type,
      description: description,
      department_id: selectedDepartmentId,
    });
    console.log(jsonData);
    dispatch(addCourse(jsonData));
  };

  return (
    <Box p={2}>
      <Paper>
        <form onSubmit={submitHandler}>
          <Box>
            <TextField
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              label="Course Name"
              color="primary"
              variant="filled"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={code}
              onChange={(e) => setCode(e.target.value)}
              label="Course Code"
              color="primary"
              variant="filled"
            />

            <Autocomplete
              options={departments}
              disabled = {loading}
              getOptionLabel={(option) => option.name}
              variant="filled"
              renderInput={(params) => (
                <TextField {...params} label="Department" variant="filled"  margin="normal" />
              )}
              onChange={handleDepartmentChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Course Type"
              color="primary"
              variant="filled"
            />

            <TextField
              margin="normal"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label="Course Description"
              color="primary"
              variant="filled"
            />

            <Button variant="outlined" color="primary" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default DashboardLayout(AddCourse);
