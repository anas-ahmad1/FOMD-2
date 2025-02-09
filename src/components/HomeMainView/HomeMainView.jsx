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
              Boost the value of your home before you sell
            </div>
            <div className="title-text-secondary">
              Know someone selling? Earn $500+ for a referral !
            </div>
            <button
              className="refer-btn"
              onClick={() => {
                const email = "nsbirak227@gmail.com";
                const subject = encodeURIComponent("Referral");
                const body = encodeURIComponent(
                  "Howdy!\n\nI know someone who wants to sell their house that would love to use Fliponmydime.com’s expertise and financial resources to take the rehab of their home off their hands before they sell!"
                );

                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}
            >
              Refer
            </button>
          </div>
          <div className="view-one-container-right">
            <div className="bg-box"></div>
            <ImageSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainView;
