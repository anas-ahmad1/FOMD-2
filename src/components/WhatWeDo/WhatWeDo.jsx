import React, { useState, useEffect } from "react";
import "./WhatWeDo.css";
import image1 from "../../assets/carousalImg1.jpeg";
import image2 from "../../assets/carousalImg2.jpeg";
import before from "../../assets/before.png";
import after from "../../assets/after.png";

const WhatWeDo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="view-two-main-container">
        <div className="what-we-do-container">
          <div className="what-we-do-text-primary">What We Do</div>
          <div className="what-we-do-text-secondary">
            We are a boutique all inclusive realtor that not only helps you sell
            your home, but take away every stressor from you in updating your
            home, while adding value through valuable upgrades that are
            currently hot in today market! Selling? Flip your home with no
            money! Let me do all the work and we share the increased profits!!
          </div>
          <div className="view-two-img-container">
          {isMobile ? (
            <>
              <div className="view-two-img">
                <img src={before} alt="Image before renovation" />
                <span className="image-label">BEFORE</span>
              </div>
              <div className="view-two-img">
                <img src={after} alt="Image after renovation" />
                <span className="image-label">AFTER</span>
              </div>
            </> ) : (
                <>
                <div className="view-two-img">
                  <img src={image1} alt="Image before renovation" />
                  <span className="image-label">BEFORE</span>
                </div>
                <div className="view-two-img">
                  <img src={image2} alt="Image after renovation" />
                  <span className="image-label">AFTER</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
