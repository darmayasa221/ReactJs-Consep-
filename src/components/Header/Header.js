import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.contain}>
        <select>
          Select Lenguage
          <option value="engglis" id="en">
            Engglis
          </option>
          <option value="indonesia" id="in">
            Indonesia
          </option>
        </select>
        <nav>
          <a href=" ">Calender</a>
          <a href=" ">Food</a>
          <a href=" ">User</a>
          <a href=" ">Summary</a>
        </nav>
        <div>
          <p>React JS is Fun !</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
