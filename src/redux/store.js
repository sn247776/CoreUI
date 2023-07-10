import { configureStore } from "@reduxjs/toolkit";
import { studentsReducer } from "./reducers/studentReducer";
import { departmentsReducer } from "./reducers/departmentsReducer";
import { coursesReducer } from "./reducers/coursesReducer";
import { facultiesReducer } from "./reducers/facultiesReducer";
import { termsReducer } from "./reducers/termsReducer";


const store = configureStore({
  reducer: {
    students: studentsReducer,
    departments: departmentsReducer,
    courses: coursesReducer,
    faculties: facultiesReducer,
    terms:termsReducer,
  },
});

export default store;
export const server = "https://api.skular.in/v1";
export const server2 = "https://odd-plum-coyote-tutu.cyclic.app/api/v1";
