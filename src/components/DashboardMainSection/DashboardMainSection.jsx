import React, { useEffect, useState } from "react";
import "./DashboardMainSection.css";
import { useNavigate } from "react-router-dom";

const DashboardMainSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videoSrc = isMobile
    ? "https://fliponmydime.com/assets/bg-video-mobile.mp4"
    : "https://fliponmydime.com/assets/bg-video2.mp4";

  const handleGetInTouch = () => {
    navigate("/home-evaluation");
  };

  return (
    <section
      className="hero-video-container"
      aria-label="Flip on My Dime — Home renovation and real estate services in Houston"
    >
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://fliponmydime.com/assets/video-poster.webp"
      >
        <source src={videoSrc} type="video/mp4" />
        Sorry, your browser does not support this video.
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Boost the value of your home before you sell</h1>
        <button className="hero-btn" onClick={handleGetInTouch}>
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default DashboardMainSection;
