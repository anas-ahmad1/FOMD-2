import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpeg";
import logo2 from "../../assets/logo-white.svg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`main-container-nav ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-container">
          <div className="nav-container-left">
            <Link to="/" onClick={closeMenu}>
              <img
                src={logo}
                className="nav-logo"
                alt="Flip on my dime Logo"
              />
            </Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>

          <div className={`nav-container-right ${isOpen ? "open" : ""}`}>
            <div className="close-btn" onClick={toggleMenu}>
              &times;
            </div>

            <div
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </div>

            <div
              className={`nav-item ${
                location.pathname === "/home-evaluation" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link"
                to="/home-evaluation"
                onClick={closeMenu}
              >
                Free Home Evaluation
              </Link>
            </div>

            <div
              className={`nav-item ${
                location.pathname === "/cash-offer" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/cash-offer" onClick={closeMenu}>
                Fair Cash Offer
              </Link>
            </div>

            <div
              className={`nav-item ${
                location.pathname === "/about-us" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
