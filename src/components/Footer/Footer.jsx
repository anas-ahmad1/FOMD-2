import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-inr-container">
          <div className="footer-row">
            <div className="footer-text">
              &copy; 2025 Flip on My Dime | All rights Reserved
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-icon-container">
              <img src={facebook}></img>
            </div>
            <div className="footer-icon-container">
                <img src={instagram}/>
            </div>
            <div className="footer-icon-container">
              <img src={twitter}></img>
            </div>
            <div className="footer-icon-container">
              <img src={linkedin}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
