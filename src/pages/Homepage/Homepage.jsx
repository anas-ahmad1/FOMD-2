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
      <title>Flip on My Dime | Stress-Free Home Flipping & Selling Services</title>
      <meta name="description" content="Let Flip on My Dime upgrade and sell your home for top dollar with no upfront cost. Stress-free renovations, valuable upgrades, and shared profits." />

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
