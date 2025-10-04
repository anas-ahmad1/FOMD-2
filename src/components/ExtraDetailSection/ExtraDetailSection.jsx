import React from "react";
import img from "../../assets/Gallery19.jpg"; 
import "./ExtraDetailSection.css";

const ExtraDetailSection = () => {
  return (
    <div className="three-column-section">
      <div className="column left-column">
        <div className="words">
          <p>REIMAGINED</p>
          <p>EXPERTLY CRAFTED</p>
          <p>TAILORED TO YOU</p>
        </div>
      </div>

      <div className="column middle-column">
        <img src={img} alt="Interior" />
      </div>

      <div className="column right-column">
        <p className="description">
          We are a boutique all-inclusive realtor that not only helps you sell
          your home, but takes away every stressor while adding value through
          upgrades that are currently hot in today’s market!
          <br />
          <br />
          Selling? Flip your home with no money! Let us do all the work and you
          keep your hard-earned equity!
        </p>
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default ExtraDetailSection;
