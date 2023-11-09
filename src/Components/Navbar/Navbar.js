import React from "react";
import "./Navbar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaSistrix } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import logo from "../Assets/logo.avif";

import { Link } from "react-router-dom";

const Navbar = () => {
 

  return (
    <div className="my-navbar">
      <div className="d-flex justify-content-between nav-logo">
        <FaSistrix className="serch-icon" />
        <div>
          
            <Link to="/">
              <img src={logo} className="logo-img" alt="logo"/>
            </Link>
          
        </div>
        <div>
          <IoBagHandleOutline className="cart-icon" />
          <div className="nav-cart-count">2</div>
        </div>
      </div>

      <div className="d-flex justify-content-center nav-menu">
        <nav className="navbar navbar-expand-lg ">
          <div className="">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link to="hair" className="nav-link menu-text " >
                    Hair
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="body" className="nav-link menu-text ">
                    Body
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="face" className="nav-link menu-text ">
                    Face
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="kits" className="nav-link menu-text ">
                    Kits
                  </Link>
                </li>
                <li className="nav-item dropdown ">
                  <span
                    style={{ color: "rgb(255, 255, 255,.7)" }}
                    className="nav-link dropdown-toggle menu-text "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </span>
                  <ul className="dropdown-menu my-nav">
                    <li>
                      <Link
                        to="ourstory"
                        className="dropdown-item menu-text drp-dwn"
                      >
                        Our story
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="blog"
                        className="dropdown-item menu-text drp-dwn"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contact"
                        className="dropdown-item menu-text drp-dwn"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
