import React from "react";
import TableComponent from "./TableComponent";

const TABLE_DATA = [
  {
    id: 1,
    title: "Web Component Fundamentals",
    duration: "5:08",
    link: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    category: "HTML5",
    author: "cory-house",
  },
  {
    id: 2,
    title: "Building Applications in React and Flu",
    duration: "3:08",
    link: "http://www.pluralsight.com/courses/react-flux-building-applications",
    category: "Javascript",
    author: "cory-house",
  },
  {
    id: 3,
    title: "Clean Code: Writing Code for Humans",
    duration: "3:10",
    link: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    category: "Software Practices",
    author: "cory-house",
  },
  {
    id: 4,
    title: "Architecting Applications for the Real World",
    duration: "2:52",
    link: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    category: "Software Practices",
    author: "cory-house",
  },
  {
    id: 5,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    duration: "2:30",
    link: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    category: "Career",
    author: "cory-house",
  },
];
export const Table = (props) => {
  return (
    <div>
      <TableComponent
        courses={props.courses}
        onEditCourse={props.onEditCourse}
        onDeleteCourse={props.onDeleteCourse}
      />
    </div>
  );
};

export default TABLE_DATA;
