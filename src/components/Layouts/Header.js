import React from "react";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className="container">
          <h1 className="display-4">ReactJS CRUD Boilerplate</h1>
          <p className="lead">with mock backend</p>
        </div>
      </header>
    </div>
  );
};
