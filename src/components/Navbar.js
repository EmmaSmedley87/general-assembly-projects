import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section clasName="hero is-success">
      <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-brand">
            <p>THE WILD LIST</p>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">
                <Link className="button" to="/">
                  Home
                </Link>
              </div>
              <div className="navbar-item">
                <Link className="button" to="/animals">
                  Animals
                </Link>
              </div>
              <div className="navbar-item">
                <Link className="button" to="/resources">
                  Resources
                </Link>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="button">Register</div>
                <div className="button">Login</div>
                <div className="button">Logout</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
