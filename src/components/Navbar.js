import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/animals">Animals</Link>
        </li>
        {/* <li>User Photo Upload</li> */}
        <li>
          {" "}
          <Link to="/resources">Resources</Link>
        </li>
        {/* <li>Register</li>
        <li>Login</li>
        <li>Logout</li> */}
      </ul>
    </nav>
  );
};
//hello emma is here

export default Navbar;
