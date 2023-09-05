import { useState } from "react";
import "./App.css";
import { NavbarScreen as Navbar } from "./components/UI/Navbar";
import { Home as HomePage } from "./components/Pages/Home";
import { About as AboutPage } from "./components/Pages/About";
import { Courses as CoursesPage } from "./components/Pages/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageNotFound } from "./components/Pages/PageNotFound";
import { Form } from "./components/UI/Form";

import TABLE_DATA from "./components/Table/Table";

function App() {
  const [courses, setCourses] = useState(TABLE_DATA);
  const [selectedCourse, setSelectedCourse] = useState(null);

  console.log(courses);

  const addCourse = (course) => {
    setCourses([...courses, { ...course, id: courses.length + 1 }]);
  };

  const editCourse = (course) => {
    setCourses(courses.map((c) => (c.id === course.id ? course : c)));
  };

  const deleteCourse = (id) => {
    console.log(id);
    setCourses(courses.filter((course) => course.id !== id));
  };

  const selectCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/courses"
            element={
              <CoursesPage
                courses={courses}
                onEditCourse={selectCourse}
                onDeleteCourse={deleteCourse}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/form"
            element={
              <Form
                onAddCourse={addCourse}
                onEditCourse={editCourse}
                course={selectedCourse}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
