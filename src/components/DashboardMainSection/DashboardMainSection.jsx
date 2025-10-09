import React from "react";
import "./DashboardMainSection.css";
import bgVideo from "../../assets/bg-video2.mp4";

const DashboardMainSection = () => {
  return (
    <div className="hero-video-container">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Boost the value of your home before you sell</h1>
        <button className="hero-btn">Visit Now</button>
      </div>
    </div>
  );
};

export default DashboardMainSection;
