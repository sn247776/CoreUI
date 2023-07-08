import axios from "axios";
import { server } from "../store";

export const getAllStudents = (keyword,start, end,) => async (dispatch) => {
  try {
    dispatch({ type: "getAllStudentsRequest" });
    const response = await axios.get(`${server}/students?name_like=${keyword}&_start=${start}&_end=${end}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, 
    });
    const { data } = response;
    const total = response.headers["x-total-count"]

    dispatch({ type: "getAllStudentsSuccess", payload: { data, total } });

  } catch (error) {
    dispatch({
      type: "getAllStudentsFail",
      payload: error.response.data.message,
    });
  }
};






export const AddStudent = (jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "AddStudentRequest" });
    const { data } = await axios.post(`${server}/students`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "AddStudentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "AddStudentFail",
      payload: error.response.data.message,
    });
  }
};


export const getStudentInfo = (student_id) => async (dispatch) => {
  try {
    dispatch({ type: "getStudentInfoRequest" });

    const { data } = await axios.get(`${server}/students/${student_id}`)

    dispatch({ type: "getStudentInfoSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getStudentInfoFail",
      payload: error.response.data.message,
    });
  }
};

export const UpdateStudent = (student_id, jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateStudentRequest" });
    const { data } = await axios.patch(`${server}/students/${student_id}`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "UpdateStudentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "UpdateStudentFail",
      payload: error.response.data.message,
    });
  }
};



export const deleteStudent = student_id => async dispatch => {
  try {

    dispatch({ type: 'deleteStudentRequest' });

    const { data } = await axios.delete(`${server}/students/${student_id}`);

    dispatch({ type: 'deleteStudentSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteStudentFail',
      payload: error.response.data.message,
    });
  }
};

