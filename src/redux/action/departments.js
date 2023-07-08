import axios from "axios";
import { server } from "../store";

export const getAllDepartments = (start, end) => async (dispatch) => {
  try {
    dispatch({ type: "getAllDepartmentsRequest" });
    const response = await axios.get(`${server}/departments?_start=0&_end=4000`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = response;

    dispatch({ type: "getAllDepartmentsSuccess", payload: data });
    console.log(data)
  } catch (error) {
    dispatch({
      type: "getAllDepartmentsFail",
      payload: error.response.data.message,
    });
  }
};

export const addDepartment = (jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "addDepartmentRequest" });
    const { data } = await axios.post(`${server}/departments`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "addDepartmentSuccess", payload: data.message })
  } catch (error) {
    dispatch({
      type: "addDepartmentFail",
      payload: error.response.data.message,
    });
  }
};

export const getDepartmentInfo = (department_id) => async (dispatch) => {
  try {
    dispatch({ type: "getDepartmentInfoRequest" });

    const { data } = await axios.get(`${server}/departments/${department_id}`);

    dispatch({ type: "getDepartmentInfoSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getDepartmentInfoFail",
      payload: error.response.data.message,
    });
  }
};

export const updateDepartment = (department_id, jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "updateDepartmentRequest" });
    const { data } = await axios.patch(`${server}/departments/${department_id}`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "updateDepartmentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateDepartmentFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteDepartment = (department_id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteDepartmentRequest" });

    const { data } = await axios.delete(`${server}/departments/${department_id}`);

    dispatch({ type: "deleteDepartmentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteDepartmentFail",
      payload: error.response.data.message,
    });
  }
};
