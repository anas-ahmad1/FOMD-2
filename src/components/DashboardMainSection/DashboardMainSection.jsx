import React from "react";
import "./DashboardMainSection.css";
import { useNavigate } from "react-router-dom";

const DashboardMainSection = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const videoSrc = isMobile ? "https://thelegalguidepost.com/assets/bg-video-mobile.mp4" : "https://thelegalguidepost.com/assets/bg-video2.mp4";

  const handleGetInTouch = () => {
    navigate("/home-evaluation");
  };

  return (
    <div className="hero-video-container">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Boost the value of your home before you sell</h1>
        <button className="hero-btn" onClick={handleGetInTouch}>Get in touch</button>
      </div>
    </div>
  );
};

export default DashboardMainSection;
