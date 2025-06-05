import React, { useState, useEffect } from "react";
import "./WhatWeDo.css";
import whatWeDo1 from "../../assets/what-we-do-1.jpg";
import whatWeDo2 from "../../assets/what-we-do-2.jpg";

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
                <img src={whatWeDo1} alt="Image before renovation" />
              </div>
              <div className="view-two-img">
                <img src={whatWeDo2} alt="Image after renovation" />
              </div>
            </> ) : (
                <>
                <div className="view-two-img">
                  <img src={whatWeDo1} alt="Image before renovation" />

                </div>
                <div className="view-two-img">
                  <img src={whatWeDo2} alt="Image after renovation" />

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
