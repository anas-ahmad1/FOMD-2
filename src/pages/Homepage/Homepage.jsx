import React, { useState } from "react";
import "./Homepage.css";
import HomeMainView from "../../components/HomeMainView/HomeMainView";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import HowDoesItWork from "../../components/HowDoesItWork/HowDoesItWork";
import PageTransition from "../../components/PageTransition/PageTransition";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import MeetTheTeam from "../../components/MeetTheTeam/MeetTheTeam";

const Homepage = () => {
  return (
    <>
      <div className="home-container">
        <HomeMainView/>
        <PageTransition transitionDirection="l2d"/>
        <WhatWeDo/>
        <PageTransition transitionDirection="d2l"/>
        <HowDoesItWork/>
        <PageTransition transitionDirection="l2d"/>
        <WhyChooseUs/>
        <PageTransition transitionDirection="d2l"/>
        <MeetTheTeam/>
      </div>
    </>
  );
};

export default Homepage;
