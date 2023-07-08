import { Box, Button, IconButton, TextField, useTheme } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from '@mui/icons-material/Save';
import { tokens } from "../../theme";
import { UpdateStudent, deleteStudent, getAllStudents } from "../../redux/action/students";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const ViewStudent = ({ items, handleClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {  error, message } = useSelector((state) => state.students);

  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const deleteButtonHandler = (studentID) => { 
    
    dispatch(deleteStudent(studentID));
  };

  const [fullname, setFullName] = useState(items.full_name);
  const [dob, setDOB] = useState(items.dob);
  const [email, setEmail] = useState(items.email_id);
  const [contact, setContact] = useState(items.contact_no);
  const [pincode, setPinCode] = useState(items.pin_code);
  const [state, setState] = useState(items.state);
  const [district, setDistrict] = useState(items.district);
  const [block, setBlock] = useState(items.block);
  const [gender, setGender] = useState(items.gender);
  const [category, setCategory] = useState(items.category);
  const [religion, setReligion] = useState(items.religion);
  const [marital, setMarital] = useState(items.marital_status);
  const [aadhar, setAadhar] = useState(items.aadhar_no);
  const [father, setFather] = useState(items.father_name);
  const [mother, setMother] = useState(items.mother_name);
  const [parent, setParent] = useState(items.parent_contact);
  const [emergency, setEmergency] = useState(items.emergency_contact);

  const submitHandler = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify({
      full_name: fullname,
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

    dispatch(UpdateStudent(items.id,jsonData));
    console.log(jsonData);
  };

 

  useEffect(() => {
    if (error) {
      console.log("Error:", error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      console.log("Success:", message);
      dispatch({ type: "clearMessage" });
      handleClick()
    }
    dispatch(getAllStudents());
  }, [dispatch, error, message, handleClick]);

  return (
    <Box className="view-student">
      <Box
        bgcolor={colors.primary[400]}
        width={"80vw"}
        minHeight={"80vh"}
        p={5}
        position={"relative"}
      >

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <h2>{items.full_name}</h2>
          <IconButton onClick={handleClick}>
            <CloseIcon />
          </IconButton>
        </Box>
        <form onSubmit={submitHandler}>
        <Box py={2}>
        <Box  className="quick-edit">
          <TextField margin="normal" value={fullname} onChange={(e) => setFullName(e.target.value)} required label="Student Name" color="secondary" variant="filled" disabled={!edit} />
          <TextField margin="normal" type="date" value={dob} onChange={(e) => setDOB(e.target.value)} label="Date Of Birth" color="secondary" variant="filled" InputLabelProps={{ shrink: true }} disabled={!edit} />
          <TextField margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} label="Email ID" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={contact} onChange={(e) => setContact(e.target.value)} label="Contact No" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={pincode} onChange={(e) => setPinCode(e.target.value)} label="Pin Code" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={state} onChange={(e) => setState(e.target.value)} label="State" color="secondary" variant="filled" disabled={!edit} />
          <TextField margin="normal" value={district} onChange={(e) => setDistrict(e.target.value)} label="District" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={block} onChange={(e) => setBlock(e.target.value)} label="Block" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={gender} onChange={(e) => setGender(e.target.value)} required label="Gender" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={category} onChange={(e) => setCategory(e.target.value)} required label="Category" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={religion} onChange={(e) => setReligion(e.target.value)} required label="Religion" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={marital} onChange={(e) => setMarital(e.target.value)} required label="Marital Status" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={aadhar} onChange={(e) => setAadhar(e.target.value)} label="Aadhar Number" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={father} onChange={(e) => setFather(e.target.value)} label="Father Name" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={mother} onChange={(e) => setMother(e.target.value)} label="Mother Name" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={parent} onChange={(e) => setParent(e.target.value)} label="Parent Contact" color="secondary" variant="filled" disabled={!edit}/>
          <TextField margin="normal" value={emergency} onChange={(e) => setEmergency(e.target.value)} label="Emergency Contact" color="secondary" variant="filled" disabled={!edit}/>
        </Box>
        
        </Box>
        <Box position={"absolute"} bottom={"0px"} right={"0px"} p={5}>
          {!edit ? (
          <Box>
            <Button
            color="secondary"
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => setEdit(true)}
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
          </Box>):(
          <Button
            type="submit"
            color="secondary"
            variant="contained"
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
          </Button>)}
        </Box>
        </form>

      </Box>
    </Box>
  );
};

export default ViewStudent;
