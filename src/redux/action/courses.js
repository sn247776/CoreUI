import axios from "axios";
import { server } from "../store";

export const getAllCourses = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllCoursesRequest" });
    const response = await axios.get(`${server}/courses`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = response;

    dispatch({ type: "getAllCoursesSuccess", payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: "getAllCoursesFail",
      payload: error.response.data.message,
    });
  }
};

export const addCourse = (jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "addCourseRequest" });
    const { data } = await axios.post(`${server}/courses`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "addCourseSuccess", payload: data.message });
    
  } catch (error) {
    
    dispatch({
      type: "addCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const getCourseInfo = (course_id) => async (dispatch) => {
  try {
    dispatch({ type: "getCourseInfoRequest" });

    const { data } = await axios.get(`${server}/courses/${course_id}`);

    dispatch({ type: "getCourseInfoSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getCourseInfoFail",
      payload: error.response.data.message,
    });
  }
};

export const updateCourse = (course_id, jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "updateCourseRequest" });
    const { data } = await axios.patch(`${server}/courses/${course_id}`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "updateCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCourse = (course_id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCourseRequest" });

    const { data } = await axios.delete(`${server}/courses/${course_id}`);

    dispatch({ type: "deleteCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteCourseFail",
      payload: error.response.data.message,
    });
  }
};
