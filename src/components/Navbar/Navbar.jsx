import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="main-container-nav">
      <nav className="nav-container">
        <div className="nav-container-left">
          <a href="/">
            <img src={logo} className="nav-logo" alt="" />
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>

          <div className={`nav-container-right ${isOpen ? "open" : ""}`}>
            <div className="close-btn" onClick={toggleMenu}>&times;</div>
            <div className={`nav-item ${location.pathname === "/" ? "active" : ""}`}><a className="nav-link" href="/">Home</a></div>
            <div className={`nav-item ${location.pathname === "/gallery" ? "active" : ""}`}><a className="nav-link" href="/gallery">Gallery</a></div>
            <div className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}><a className="nav-link" href="/services">Services</a></div>
            <div className={`nav-item ${location.pathname === "/blogs" ? "active" : ""}`}><a className="nav-link" href="/blogs">Blogs</a></div>
            <div className={`nav-item nav-contact ${location.pathname === "/contactus" ? "contact-active" : ""}`}><a className="nav-link" href="/contactus">Contact Us</a></div>
          </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
