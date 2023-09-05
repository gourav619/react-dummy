import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Form = (props) => {
  const initialFormValues = props.course || {
    title: "",
    author: "",
    category: "",
    duration: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.course) {
      props.onEditCourse(formValues);
    } else {
      clearFormValue();
      props.onAddCourse(formValues);
    }
  };

  const clearFormValue = () => {
    setFormValues(initialFormValues);
  };

  return (
    <div className="container" style={{ textAlign: "left" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Title of the course"
            required
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <div className="field">
            <label htmlFor="author" className="form-label ">
              Author
            </label>
            <select
              className="form-control"
              name="author"
              value={formValues.author}
              onChange={handleChange}
            >
              <option></option>
              <option value="cory-house">Cory House</option>
              <option value="scott-allen">Scott Allen</option>
              <option value="dan-wahlin">Dan Wahlin</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            name="category"
            className="form-control"
            id="category"
            aria-describedby="emailHelp"
            placeholder="Category of the course"
            required
            value={formValues.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="length" className="form-label">
            Length
          </label>
          <input
            type="text"
            name="length"
            className="form-control"
            id="length"
            aria-describedby="emailHelp"
            placeholder="Length of the course in minutes or hours"
            required
            value={formValues.duration}
            onChange={handleChange}
          />
        </div>

        <NavLink to="/courses">
          <button type="submit" className="btn btn-primary mx-2">
            Submit
          </button>
          
        </NavLink>
        <button
          type="button"
          onClick={clearFormValue}
          className={`btn mx-2 ${
            Object.values(formValues).every((val) => val === "")
              ? "disabled"
              : "btn-warning"
          }`}
        >
          Clear values
        </button>
        <NavLink to="/courses">
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </NavLink>
      </form>
    </div>
  );
};
