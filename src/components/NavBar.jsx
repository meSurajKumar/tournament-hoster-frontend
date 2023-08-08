import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/NavBar.css'

const Navbar = () => {
  return (
    <div className="containerClass">
    <nav >
      <div>
        <ul className="ul">
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );

};

export default Navbar;