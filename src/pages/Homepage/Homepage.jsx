import React, { useState } from "react";
import "./Homepage.css";
import HomeMainView from "../../components/HomeMainView/HomeMainView";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";

const Homepage = () => {
  return (
    <>
      <div className="home-container">
        <HomeMainView/>
        <WhatWeDo/>
      </div>
    </>
  );
};

export default Homepage;
