import { createReducer } from "@reduxjs/toolkit";

export const termsReducer = createReducer(
  {},
  {
    // Action types for getting all terms
    getAllTermsRequest: (state) => {
      state.loading = true;
    },
    getAllTermsSuccess: (state, action) => {
      state.loading = false;
      state.terms = action.payload;
    },
    getAllTermsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for getting term info
    getTermInfoRequest: (state) => {
      state.loading = true;
    },
    getTermInfoSuccess: (state, action) => {
      state.loading = false;
      state.termInfo = action.payload;
      state.error = null;
    },
    getTermInfoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for adding a term
    addTermRequest: (state) => {
      state.loading = true;
    },
    addTermSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addTermFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for updating a term
    updateTermRequest: (state) => {
      state.loading = true;
    },
    updateTermSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateTermFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for deleting a term
    deleteTermRequest: (state) => {
      state.loading = true;
    },
    deleteTermSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteTermFail: (state, action) => {
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
