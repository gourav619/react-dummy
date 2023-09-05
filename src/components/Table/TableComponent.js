import { useState } from "react";
import { NavLink } from "react-router-dom";

export function TableComponent(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = props.courses.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container-fluid p-3 my-5 bg-light border border-primary">
      <table className="table">
        <thead>
          <tr>
            <th>
              Title
              <div>
                <input
                  type="text"
                  className="filter text-filter form-control"
                  placeholder="Enter Title..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </th>
            <th>Length</th>
            <th>
              Category
              <input
                type="text"
                className="filter text-filter form-control"
                placeholder="Enter category..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </th>
            <th>
              Author
              <input
                type="text"
                className="filter text-filter form-control"
                placeholder="Enter Author..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => (
            <tr key={data.id}>
              <td>
                <a href={data.link} target="_blank" rel="noreferrer">
                  {data.title}
                </a>
              </td>
              <td>{data.duration}</td>
              <td>{data.category}</td>
              <td>{data.author}</td>
              <td>
                <NavLink to="/form">
                  <button
                    type="button"
                    className="btn btn-warning ml-2 mx-2"
                    onClick={()=>props.onEditCourse(data)}
                  >
                    <i className="fa-solid fa-pencil" aria-hidden="true"></i>
                    Edit
                  </button>
                </NavLink>
                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  onClick={()=>props.onDeleteCourse(data.id)}
                >
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
