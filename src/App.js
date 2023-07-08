import React, { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Students from "./pages/Students/Students";
import AddStudents from "./pages/Students/AddStudents";
import EditStudents from "./pages/Students/EditStudents";
import ViewStudent from "./pages/Students/ViewStudent";
import  { Toaster } from "react-hot-toast";
import Departments from "./pages/Departments/Departments";
import AddDepartment from "./pages/Departments/AddDepartment";
import ViewDepartment from "./pages/Departments/ViewDepartment"
import EditDepartment from "./pages/Departments/EditDepartment";
import Courses from "./pages/Courses/Courses";
import AddCourse from "./pages/Courses/AddCourse";
import EditCourse from "./pages/Courses/EditCourse";
import ViewCourse from "./pages/Courses/ViewCourse";
import Faculties from "./pages/Faculties/Faculties";
import ViewFaculties from "./pages/Faculties/ViewFaculties";
import AddFacultie from "./pages/Faculties/AddFacultie";
import EditFacultie from "./pages/Faculties/EditFacultie";
import Terms from "./pages/Terms/Terms";
import AddTerm from "./pages/Terms/AddTerm";
import ViewTerm from "./pages/Terms/ViewTerm";
import EditTerm from "./pages/Terms/EditTerm";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/create" element={<AddStudents />} />
            <Route path="/students/edit/:id" element={<EditStudents />} />
            <Route path="/students/view/:id" element={<ViewStudent />} />


            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/create" element={<AddDepartment />} />
            <Route path="/departments/edit/:id" element={<EditDepartment />} />
            <Route path="/departments/view/:id" element={<ViewDepartment />} />

            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/create" element={<AddCourse />} />
            <Route path="/courses/edit/:id" element={<EditCourse />} />
            <Route path="/courses/view/:id" element={<ViewCourse />} />

            <Route path="/faculties" element={<Faculties />} />
            <Route path="/view-facultie/:id" element={<ViewFaculties />} />
            <Route path="/edit-facultie/:id" element={<EditFacultie />} />
            <Route path="/add-facultie" element={<AddFacultie />} />

            <Route path="/terms" element={<Terms />} />
            <Route path="/add-term" element={<AddTerm />} />
            <Route path="/view-term/:id" element={<ViewTerm />} />
            <Route path="/edit-term/:id" element={<EditTerm />} />

          </Routes>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
