import React, { useState } from "react";
import "./Homepage.css";
import HomeMainView from "../../components/HomeMainView/HomeMainView";

const Homepage = () => {
  return (
    <>
      <div className="home-container">
        <HomeMainView/>
      </div>
    </>
  );
};

export default Homepage;
