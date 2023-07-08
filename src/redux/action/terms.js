import axios from "axios";
import { server } from "../store";

export const getAllTerms = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllTermsRequest" });
    const response = await axios.get(`${server}/terms`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = response;

    dispatch({ type: "getAllTermsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllTermsFail",
      payload: error.response.data.message,
    });
  }
};

export const addTerm = (jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "addTermRequest" });
    const { data } = await axios.post(`${server}/terms`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "addTermSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addTermFail",
      payload: error.response.data.message,
    });
  }
};

export const getTermInfo = (term_id) => async (dispatch) => {
  try {
    dispatch({ type: "getTermInfoRequest" });

    const { data } = await axios.get(`${server}/terms/${term_id}`);

    dispatch({ type: "getTermInfoSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getTermInfoFail",
      payload: error.response.data.message,
    });
  }
};

export const updateTerm = (term_id, jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "updateTermRequest" });
    const { data } = await axios.patch(`${server}/terms/${term_id}`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "updateTermSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateTermFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteTerm = (term_id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteTermRequest" });

    const { data } = await axios.delete(`${server}/terms/${term_id}`);

    dispatch({ type: "deleteTermSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteTermFail",
      payload: error.response.data.message,
    });
  }
};
