import React, { useState } from "react";
import "./HomeMainView.css";
import ImageSlider from "../ImageSlider/ImageSlider";

const HomeMainView = () => {
  return (
    <>
      <div className="view-one-main-container">
        <div className="view-one-container">
          <div className="view-one-container-left">
            <div className="title-text-primary">
              Boost the value of your <br /> home before you sell
            </div>
            <div className="title-text-secondary">
              Know someone selling? Earn $500+ for a referral !
            </div>
            <button className="refer-btn">Refer</button>
          </div>
          <div className="view-one-container-right">
            <div className="bg-box"></div>
            <ImageSlider/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainView;
