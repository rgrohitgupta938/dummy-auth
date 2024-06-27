import React from "react";
import { Link } from "react-router-dom";
import "./style/nav.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="left">
          <Link className="nav-link" to="/">Login Page</Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link className="nav-link" to="/">Login</Link>
            </li>
            <li>
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
