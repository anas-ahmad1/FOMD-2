import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";

const Navbar = () => {

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
            <div className="nav-item"><a className="nav-link" href="/">Home</a></div>
            <div className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></div>
            <div className="nav-item"><a className="nav-link" href="/services">Services</a></div>
            <div className="nav-item"><a className="nav-link" href="#">Blogs</a></div>
            <div className="nav-item nav-contact"><a className="nav-link" href="/contactus">Contact Us</a></div>
          </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
