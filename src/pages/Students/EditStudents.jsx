import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UpdateStudent, getStudentInfo } from "../../redux/action/students";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import SecondaryHead from "../../components/Layout/SecondaryHead";
import { toast } from "react-hot-toast";
import Loading from "../../components/Layout/Loading";

const EditStudents = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { studentinfo, loading, error, message } = useSelector(
    (state) => state.students
  );

  useEffect(() => {
    dispatch(getStudentInfo(params.id));
  }, [dispatch, params.id]);

  const studentid = studentinfo?.id;

  const [fullname, setFullName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [pincode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [block, setBlock] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [religion, setReligion] = useState("");
  const [marital, setMarital] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [parent, setParent] = useState("");
  const [emergency, setEmergency] = useState("");

  useEffect(() => {
    if (studentinfo) {
      setFullName(studentinfo.name || "");
      setDOB(studentinfo.dob || "");
      setEmail(studentinfo.email_id || "");
      setContact(studentinfo.contact_no || "");
      setPinCode(studentinfo.pin_code || "");
      setState(studentinfo.state || "");
      setDistrict(studentinfo.district || "");
      setBlock(studentinfo.block || "");
      setGender(studentinfo.gender || "");
      setCategory(studentinfo.category || "");
      setReligion(studentinfo.religion || "");
      setMarital(studentinfo.marital_status || "");
      setAadhar(studentinfo.aadhar_no || "");
      setFather(studentinfo.father_name || "");
      setMother(studentinfo.mother_name || "");
      setParent(studentinfo.parent_contact || "");
      setEmergency(studentinfo.emergency_contact || "");
    }
  }, [studentinfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify({
      name: fullname,
      dob: dob,
      email_id: email,
      contact_no: contact,
      pin_code: pincode,
      state: state,
      district: district,
      block: block,
      gender: gender,
      category: category,
      religion: religion,
      marital_status: marital,
      aadhar_no: aadhar,
      father_name: father,
      mother_name: mother,
      parent_contact: parent,
      emergency_contact: emergency,
    });

    dispatch(UpdateStudent(studentid, jsonData));
    console.log(jsonData);
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <Box>
      {loading? <Loading/>:null}
      <SecondaryHead heading="Edit Student" icon={<PersonIcon />} />
      <Box>
        <form onSubmit={submitHandler}>
          <Box className="grid-layout">
            <TextField
              margin="normal"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
              fullWidth
              label="Student Name"
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
              label="Date Of Birth"
              color="primary"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email ID"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              fullWidth
              label="Contact No"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              value={pincode}
              onChange={(e) => setPinCode(e.target.value)}
              fullWidth
              label="Pin Code"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              fullWidth
              label="State"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              fullWidth
              label="District"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              value={block}
              onChange={(e) => setBlock(e.target.value)}
              fullWidth
              label="Block"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              fullWidth
              label="Gender"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              fullWidth
              label="Category"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              fullWidth
              label="Religion"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              value={marital}
              onChange={(e) => setMarital(e.target.value)}
              required
              fullWidth
              label="Marital Status"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              fullWidth
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              label="Aadhar Number"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              fullWidth
              value={father}
              onChange={(e) => setFather(e.target.value)}
              label="Father Name"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              fullWidth
              value={mother}
              onChange={(e) => setMother(e.target.value)}
              label="Mother Name"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              fullWidth
              value={parent}
              onChange={(e) => setParent(e.target.value)}
              label="Parent Contact"
              color="primary"
              variant="filled"
            />
            <TextField
              margin="normal"
              fullWidth
              required
              value={emergency}
              onChange={(e) => setEmergency(e.target.value)}
              label="Emergency Contact"
              color="primary"
              variant="filled"
            />
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

export default DashboardLayout(EditStudents);
