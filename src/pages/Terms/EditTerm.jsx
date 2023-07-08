import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { getTermInfo, updateTerm } from "../../redux/action/terms";

const EditTerm = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [duration, setDuration] = useState(0);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTermInfo(params.id));
  }, [dispatch, params.id]);

  const { termInfo, loading, error, message } = useSelector(
    (state) => state.terms
  );

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

  useEffect(() => {
    if (termInfo) {
      setName(termInfo.name);
      setCode(termInfo.code);
      setDuration(termInfo.duration);
    }
  }, [termInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify({
      name: name,
      code: code,
      duration: duration,
    });
    console.log(jsonData);
    dispatch(updateTerm(params.id, jsonData));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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

export default DashboardLayout(EditTerm);
