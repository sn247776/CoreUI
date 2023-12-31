import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { AddStudent } from '../../redux/action/students';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import SecondaryHead from '../../components/Layout/SecondaryHead';
import PersonIcon from '@mui/icons-material/Person';
import SaveIcon from '@mui/icons-material/Save';
import Loading from '../../components/Layout/Loading';

const AddStudents = () => {
  const [fullname, setFullName] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [pincode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [block, setBlock] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [religion, setReligion] = useState('');
  const [marital, setMarital] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [parent, setParent] = useState('');
  const [emergency, setEmergency] = useState('');

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.students);

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

    dispatch(AddStudent(jsonData));
    console.log(jsonData);
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      console.log(message);
      toast.success(message);
    }
  }, [dispatch, error, message]);

  return (
    <Box>
      {loading ? <Loading /> : null}
      <SecondaryHead heading="Create Student" icon={<PersonIcon />} />
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
          <FormControl fullWidth color="primary" variant="filled" required>
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
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth color="primary" variant="filled" required>
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
          <FormControl fullWidth color="primary" variant="filled" required>
            <InputLabel>Select Religion</InputLabel>
            <Select
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
            >
              <MenuItem value="">
                <em>Select Religion</em>
              </MenuItem>
              <MenuItem value="Christian">Christian</MenuItem>
              <MenuItem value="Hinduism">Hinduism</MenuItem>
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Sikhism">Sikhism</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth color="primary" variant="filled" required>
            <InputLabel>Select Marital Status</InputLabel>
            <Select
              value={marital}
              onChange={(e) => setMarital(e.target.value)}
            >
              <MenuItem value="">
                <em>Select Marital Status</em>
              </MenuItem>
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Divorced">Divorced</MenuItem>
              <MenuItem value="Widowed">Widowed</MenuItem>
            </Select>
          </FormControl>
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
            required
            fullWidth
            value={emergency}
            onChange={(e) => setEmergency(e.target.value)}
            label="Emergency Contact"
            color="primary"
            variant="filled"
          />
        </Box>
        <Box textAlign={'right'}>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            startIcon={<SaveIcon />}
            sx={{
              fontWeight: 500,
              fontSize: '16px',
              textTransform: 'none',
              margin: '0 5px',
              width: '90px',
            }}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default DashboardLayout(AddStudents);
