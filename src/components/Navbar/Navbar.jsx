import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="main-container-nav">
        <nav className="nav-container">
          <div className="nav-container-left">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} className="nav-logo" alt="Logo" />
            </Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>

          <div className={`nav-container-right ${isOpen ? "open" : ""}`}>
            <div className="close-btn" onClick={toggleMenu}>&times;</div>

            <div className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </div>

            <div className={`nav-item ${location.pathname === "/gallery" ? "active" : ""}`}>
              <Link className="nav-link" to="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </div>

            <div className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>
              <Link className="nav-link" to="/services" onClick={closeMenu}>
                Services
              </Link>
            </div>

            <div className={`nav-item ${location.pathname === "/blogs" ? "active" : ""}`}>
              <Link className="nav-link" to="/blogs" onClick={closeMenu}>
                Blogs
              </Link>
            </div>

            <div className={`nav-item nav-contact ${location.pathname === "/contactus" ? "contact-active" : ""}`}>
              <Link className="nav-link" to="/contactus" onClick={closeMenu}>
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
