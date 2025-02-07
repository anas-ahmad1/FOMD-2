import React, { useState, useEffect } from "react";
import "./WhyChooseUs.css";
import experience from "../../assets/experience.png";
import personalized from "../../assets/personalized.png";
import network from "../../assets/network.png";

const WhyChooseUs = () => {
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
      <div className="view-four-main-container">
        <div className="reasons-container">
          <div className="reason-box">
            <div className="box-header">Experience</div>
            <div className="reason-img-container">
              <img src={experience}></img>
            </div>
            <div className="reason-text">
              With over 15 years of experience in the real estate industry, our
              team at fliponmydime has the knowledge and expertise to help you
              navigate the complex world of real estate.
            </div>
          </div>
          <div className="reason-box">
            <div className="box-header">Personalized Service</div>
            <div className="reason-img-container">
              <img src={personalized}></img>
            </div>
            <div className="reason-text">
            At fliponmydime, we believe in providing our clients with personalized attention and exceptional service. We take the time to understand your unique needs and work tirelessly to help you achieve your goals. 
            </div>
          </div>
          <div className="reason-box">
            <div className="box-header">Extensive Network</div>
            <div className="reason-img-container">
              <img src={network}></img>
            </div>
            <div className="reason-text">
            We have an extensive network of industry professionals, including lenders, inspectors, and contractors, to help you every step of the way. We work with the best in the business to ensure that you get the best possible service.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
