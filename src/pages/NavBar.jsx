import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { id } = props;
  return (
    <nav className="NavBar" id={id}>
      <h2>MiraSoft</h2>
      <ul>
        <li>
          <Link to={"/"}>Home </Link>
        </li>
        <li>
          <Link to={"/login"}>Login </Link>
        </li>
        <li>
          <Link to={"/about"}>About </Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
