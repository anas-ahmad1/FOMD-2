import React from "react";
import "./DashboardMainSection.css";
import bgImage from "../../assets/dashboard-bg-img.jpg";

const DashboardMainSection = () => {
  return (
    <div className="dashboard-main-section">
      <img src={bgImage} alt="Dashboard Background" className="bg-image" />
      <div className="overlay"></div>

      {/* <div className="content">
        <div className="content-left">
        <div className="text-left">
          <h1>
            <span className="flip">FLIP </span>{" "}
            <span className="onmy">on <br /> my</span>
            <span className="dime"> DIME</span>
          </h1>
        </div>
        </div>

<div className="content-right">
          <p className="boost-text">
            Boost the value of your home before you sell
          </p>
          <button className="visit-btn">Book a Visit</button>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardMainSection;
