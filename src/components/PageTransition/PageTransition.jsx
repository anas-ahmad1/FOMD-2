import React, { useState, useEffect } from "react";
import "./PageTransition.css";

const PageTransition = ({transitionDirection}) => {
  const [count, setCount] = useState(window.innerWidth > 768 ? 21 : 11);

  useEffect(() => {
    const updateCount = () => {
      setCount(window.innerWidth > 768 ? 21 : 11);
    };

    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);
  return (
    <>
      <div className="gradient-container">
        
        <div className={transitionDirection === 'l2d' ? 'line-l2d' : 'line-d2l'}>
        {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? "brick-dark" : "brick-light"}
        ></div>
      ))}
          {/* <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div>
          <div className="brick-light"></div>
          <div className="brick-dark"></div> */}
        </div>
      </div>
    </>
  );
};

export default PageTransition;
