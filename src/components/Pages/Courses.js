import React from "react";
import { Table } from "../Table/Table";
import { NavLink } from "react-router-dom";

export const Courses = (props) => {
  return (
    <>
      <div className="container-fluid" style={{ textAlign: "left" }}>
        <h1>Courses</h1>
        <div className="btn-group" role="group">
          <NavLink to="/form">
            <button type="button" className="btn btn-primary mx-2">
              <i className="fa fa-plus" aria-hidden="true"></i>
              Add
            </button>
          </NavLink>
        </div>
      </div>
      <Table
        courses={props.courses}
        onEditCourse={props.onEditCourse}
        onDeleteCourse={props.onDeleteCourse}
      />
    </>
  );
};
