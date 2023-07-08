import axios from "axios";
import { server } from "../store";

export const getAllFaculties = (start, end) => async (dispatch) => {
  try {
    dispatch({ type: "getAllFacultiesRequest" });
    const response = await axios.get(`${server}/faculties?_start=0&_end=4000`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = response;

    dispatch({ type: "getAllFacultiesSuccess", payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: "getAllFacultiesFail",
      payload: error.response.data.message,
    });
  }
};

export const addFaculty = (jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "addFacultyRequest" });
    const { data } = await axios.post(`${server}/faculties`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "addFacultySuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addFacultyFail",
      payload: error.response.data.message,
    });
  }
};

export const getFacultyInfo = (faculty_id) => async (dispatch) => {
  try {
    dispatch({ type: "getFacultyInfoRequest" });

    const { data } = await axios.get(`${server}/faculties/${faculty_id}`);

    dispatch({ type: "getFacultyInfoSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getFacultyInfoFail",
      payload: error.response.data.message,
    });
  }
};

export const updateFaculty = (faculty_id, jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "updateFacultyRequest" });
    const { data } = await axios.patch(`${server}/faculties/${faculty_id}`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "updateFacultySuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateFacultyFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteFaculty = (faculty_id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteFacultyRequest" });

    const { data } = await axios.delete(`${server}/faculties/${faculty_id}`);

    dispatch({ type: "deleteFacultySuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteFacultyFail",
      payload: error.response.data.message,
    });
  }
};
