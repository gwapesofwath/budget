import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";


const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Bank Shot
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link " to="/Budget">Budget</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Savings">Savings Simulator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
          </li>
        </ul>
        <li>
                <p className="navbar-btn">
                    <a href="/Register" className="btn btn-default">Get Started</a>
                </p>
            </li>
      </div>
    </nav>
  );

  export default Nav;
  