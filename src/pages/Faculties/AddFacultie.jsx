import {
  Box,
  Button,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { addFaculty } from "../../redux/action/faculties";
import { useEffect } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const AddFaculty = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [block, setBlock] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [religion, setReligion] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.faculties);

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify({
      name: fullName,
      dob: dob,
      email_id: email,
      contact_no: contactNo,
      pin_code: pinCode,
      state: state,
      district: district,
      block: block,
      gender: gender,
      category: category,
      religion: religion,
      marital_status: maritalStatus,
      emergency_contact: emergencyContact,
    });

    dispatch(addFaculty(jsonData));
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
    <Box p={2}>
      <Paper>
        <form onSubmit={submitHandler}>
          <Box className="add-faculty">
            <TextField
              margin="normal"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              fullWidth
              label="Full Name"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              label="Date of Birth"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              label="Contact Number"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              label="Pin Code"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={state}
              onChange={(e) => setState(e.target.value)}
              label="State"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              label="District"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={block}
              onChange={(e) => setBlock(e.target.value)}
              label="Block"
              color="primary"
              variant="filled"
            />
            <FormControl fullWidth color="primary" variant="filled">
              <InputLabel>Select Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Gender</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth color="primary" variant="filled">
              <InputLabel>Select Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="OBC">OBC</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="ST">ST</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth color="primary" variant="filled">
              <InputLabel>Select Religion</InputLabel>
              <Select
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Religion</em>
                </MenuItem>
                <MenuItem value="Hinduism">Hinduism</MenuItem>
                <MenuItem value="Sikhism">Sikhism</MenuItem>
                <MenuItem value="Buddhism">Buddhism</MenuItem>
                <MenuItem value="Christian">Christian</MenuItem>
                <MenuItem value="Jainism">Jainism</MenuItem>
                <MenuItem value="Islam">Islam</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth color="primary" variant="filled">
              <InputLabel>Select Marital Status</InputLabel>
              <Select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Marital Status</em>
                </MenuItem>
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
                <MenuItem value="Separated">Separated</MenuItem>
                <MenuItem value="Engaged">Engaged</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              label="Emergency Contact"
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

export default DashboardLayout(AddFaculty);
