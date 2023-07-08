import { createReducer } from "@reduxjs/toolkit";

export const departmentsReducer = createReducer(
  {},
  {
    // Action types for getting all departments
    getAllDepartmentsRequest: (state) => {
      state.loading = true;
    },
    getAllDepartmentsSuccess: (state, action) => {
      state.loading = false;
      state.departments = action.payload;
    },
    getAllDepartmentsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for getting department info
    getDepartmentInfoRequest: (state) => {
      state.loading = true;
    },
    getDepartmentInfoSuccess: (state, action) => {
      state.loading = false;
      state.departmentInfo = action.payload;
      state.error = null;
    },
    getDepartmentInfoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for adding a department
    addDepartmentRequest: (state) => {
      state.loading = true;
    },
    addDepartmentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addDepartmentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for updating a department
    updateDepartmentRequest: (state) => {
      state.loading = true;
    },
    updateDepartmentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateDepartmentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for deleting a department
    deleteDepartmentRequest: (state) => {
      state.loading = true;
    },
    deleteDepartmentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteDepartmentFail: (state, action) => {
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
