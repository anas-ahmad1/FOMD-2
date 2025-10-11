import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-inr-container">

          <div className="footer-row">
            <div className="footer-icon-container">
              <a
                href="https://www.facebook.com/share/1BEUtwYXgz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook icon" />
              </a>
            </div>

            <div className="footer-icon-container">
              <a
                href="https://www.instagram.com/nealbfliponmydime?igsh=d2xjbHpmYmdrbnV4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram icon" />
              </a>
            </div>

            <div className="footer-icon-container">
              <a
                href="https://www.linkedin.com/in/neal-birak-dpt-ocs-mcmt-cscs-cafs-727a4a5a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn icon" />
              </a>
            </div>
          </div>

          <div className="footer-row">
            <div className="footer-text">
              &copy; 2025 Flip on My Dime | All rights Reserved
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
