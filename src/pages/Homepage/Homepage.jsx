import React, { useState } from "react";
import "./Homepage.css";
import HomeMainView from "../../components/HomeMainView/HomeMainView";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import HowDoesItWork from "../../components/HowDoesItWork/HowDoesItWork";

const Homepage = () => {
  return (
    <>
      <div className="home-container">
        <HomeMainView/>
        <WhatWeDo/>
        <HowDoesItWork/>
      </div>
    </>
  );
};

export default Homepage;
