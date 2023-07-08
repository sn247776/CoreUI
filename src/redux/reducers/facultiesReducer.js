import { createReducer } from "@reduxjs/toolkit";

export const facultiesReducer = createReducer(
  {},
  {
    // Action types for getting all faculties
    getAllFacultiesRequest: (state) => {
      state.loading = true;
    },
    getAllFacultiesSuccess: (state, action) => {
      state.loading = false;
      state.faculties = action.payload;
    },
    getAllFacultiesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for getting faculty info
    getFacultyInfoRequest: (state) => {
      state.loading = true;
    },
    getFacultyInfoSuccess: (state, action) => {
      state.loading = false;
      state.facultyInfo = action.payload;
      state.error = null;
    },
    getFacultyInfoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for adding a faculty
    addFacultyRequest: (state) => {
      state.loading = true;
    },
    addFacultySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addFacultyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for updating a faculty
    updateFacultyRequest: (state) => {
      state.loading = true;
    },
    updateFacultySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateFacultyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for deleting a faculty
    deleteFacultyRequest: (state) => {
      state.loading = true;
    },
    deleteFacultySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteFacultyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for clearing errors and messages
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
