import React, { useState, useEffect } from "react";
import "./HowDoesItWork.css";
import step1 from "../../assets/step1.svg";
import step2 from "../../assets/step2.svg";
import step3 from "../../assets/step3.svg";

const HowDoesItWork = () => {

  return (
    <>
      <div className="view-three-main-container">
        <div className="steps-container">
          <div className="step-one">
            <div className="number-container">
              <div className="step-number-one">1</div>
              <div className="inner-img-container">
                <img src={step1}></img>
              </div>
            </div>
            <div className="text-container">
              <div className="step-text">
                Neal/Puja will tour your home and walk you through what to
                expect. We review the value of your home as-is and what it would
                sell for after renovations.
              </div>
            </div>
            <div className="img-container">
              <img src={step1}></img>
            </div>
          </div>

          <div className="step-two">
            <div className="img-container">
              <img src={step2}></img>
            </div>
            <div className="text-container">
              <div className="step-text">
                We enter into an agreement to either list or List/Flip combo
                with the opportunity to capture top market value!
              </div>
            </div>
            <div className="number-container-right">
              <div className="step-number-two">2</div>
              <div className="inner-img-container">
                <img src={step2}></img>
              </div>
            </div>
          </div>

          <div className="step-three">
            <div className="number-container">
              <div className="step-number-three">3</div>
              <div className="inner-img-container">
                <img src={step3}></img>
              </div>
            </div>
            <div className="text-container">
              <div className="step-text">
                We invest our money and expertise to rehab the home and complete
                renovations. (YOU DONT SPEND A DIME). When the house sells, You
                enjoy the benefits of higher sales proceeds!
              </div>
            </div>
            <div className="img-container">
              <img src={step3}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowDoesItWork;
