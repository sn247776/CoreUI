import { createReducer } from "@reduxjs/toolkit";

export const studentsReducer = createReducer(
  {},
  {
    getAllStudentsRequest: (state) => {
      state.loading = true;
    },
    getAllStudentsSuccess: (state, action) => {
      state.loading = false;
      state.students = action.payload.data;
      state.total = action.payload.total;
      state.pageNo = action.payload.page_no;
      state.pageSize = action.payload.page_size;
    },
    getAllStudentsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },


    
    getStudentInfoRequest: (state) => {
      state.loading = true;
    },
    getStudentInfoSuccess: (state, action) => {
      state.loading = false;
      state.studentinfo = action.payload;
      state.error = null;
    },
    getStudentInfoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AddStudentRequest: (state) => {
      state.loading = true;
    },
    AddStudentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    AddStudentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    UpdateStudentRequest: (state) => {
      state.loading = true;
    },
    UpdateStudentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    UpdateStudentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    



    deleteStudentRequest: state => {
      state.loading = true;
    },
    deleteStudentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteStudentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
