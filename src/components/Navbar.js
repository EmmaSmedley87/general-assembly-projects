import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="hero is-info">
      <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-brand">
            <p>THE ELEPHANT LIST</p>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">
                <Link className="button" to="/">
                  Home
                </Link>
              </div>
              <div className="navbar-item">
                <Link className="button" to="/elephants">
                  Elephants
                </Link>
              </div>
              <div className="navbar-item">
                <Link className="button" to="/SearchPage">
                  Search
                </Link>
              </div>
              <div className="navbar-item">
                <Link className="button" to="/random-elephant">
                  Random
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
                {/* <div className="button">Register</div>
                <div className="button">Login</div>
                <div className="button">Logout</div> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
