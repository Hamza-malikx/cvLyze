import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div>
      <nav
        className={`${styles.header} navbar navbar-expand-lg navbar-dark pt-3 pb-3`}
      >
        <div className="container">
          <Link
            className={`${styles.logo} navbar-brand font-weight-bold`}
            to="/"
          >
            CVLyZe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav justify-content-center m-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <Link className="nav-link" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link " aria-current="page" to="">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/login" className={`${styles.signInBtn} me-2`}>
                Sign In
              </Link>
              <Link to="" className={`${styles.signUpBtn} `}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
