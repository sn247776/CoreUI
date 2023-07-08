import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Box, Button, Paper, TextField } from "@mui/material";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { addTerm } from "../../redux/action/terms";

const AddTerm = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [duration, setDuration] = useState(0);

  const dispatch = useDispatch();

  const { loading, error, message } = useSelector((state) => state.terms);

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

    const termData = {
      name: name,
      code: code,
      duration: duration,
    };

    dispatch(addTerm(termData));
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
              label="Term Name"
              color="primary"
              variant="filled"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={code}
              onChange={(e) => setCode(e.target.value)}
              label="Term Code"
              color="primary"
              variant="filled"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              label="Term Duration"
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

export default DashboardLayout(AddTerm);
