import { useState, useEffect } from "react";
import logo from "../../assets/logo.webp";
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

  // Lock page scroll while the drawer is open and close it with Escape
  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

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
                alt="Post Oak Realty Advisors Logo"
              />
            </Link>
          </div>

          <button
            type="button"
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="site-menu"
          >
            &#9776;
          </button>

          <div
            className={`nav-backdrop ${isOpen ? "open" : ""}`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <div
            id="site-menu"
            className={`nav-container-right ${isOpen ? "open" : ""}`}
          >
            <button
              type="button"
              className="close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              &times;
            </button>

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

            <div
              className={`nav-item ${
                location.pathname.startsWith("/blogs") ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/blogs" onClick={closeMenu}>
                Blogs
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
