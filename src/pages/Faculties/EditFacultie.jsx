import { Box, Button, Paper, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getFacultyInfo, updateFaculty } from "../../redux/action/faculties";
import { useEffect } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useParams } from "react-router-dom";

const EditFaculty = ({ faculty }) => {

    const { facultyInfo, loading, error, message } = useSelector((state) => state.faculties);

    const dispatch = useDispatch();
    const params = useParams();
  
    useEffect(() => {
      dispatch(getFacultyInfo(params.id));
    }, [dispatch, params.id]);
  
  

  const [fullName, setFullName] = useState(facultyInfo?.name || "");
  const [dob, setDOB] = useState(facultyInfo?.dob || "");
  const [email, setEmail] = useState(facultyInfo?.email_id || "");
  const [contactNo, setContactNo] = useState(facultyInfo?.contact_no || "");
  const [pinCode, setPinCode] = useState(facultyInfo?.pin_code || "");
  const [state, setState] = useState(facultyInfo?.state || "");
  const [district, setDistrict] = useState(facultyInfo?.district || "");
  const [block, setBlock] = useState(facultyInfo?.block || "");
  const [gender, setGender] = useState(facultyInfo?.gender || "");
  const [category, setCategory] = useState(facultyInfo?.category || "");
  const [religion, setReligion] = useState(facultyInfo?.religion || "");
  const [maritalStatus, setMaritalStatus] = useState(facultyInfo?.marital_status || "");
  const [emergencyContact, setEmergencyContact] = useState(facultyInfo?.emergency_contact || "");


 
  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify({
      id: facultyInfo.id,
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

    console.log(jsonData)

    dispatch(updateFaculty(facultyInfo.id,jsonData));
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
          <Box className="edit-faculty">
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

export default DashboardLayout(EditFaculty);
