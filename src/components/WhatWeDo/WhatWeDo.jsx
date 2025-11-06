import React, { useState, useEffect } from "react";
import "./WhatWeDo.css";
import img from "../../assets/dashboard-bg-img.webp";
import imgMobile from "../../assets/dashboard-bg-img-mobile.webp";

const WhatWeDo = () => {
  const [isMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const bg = isMobile ? imgMobile : img;

  const boxes = [
    {
      title: "Sell with Confidence",
      text: "When you call Flip On My Dime, you’ll speak directly with Neal or Puja—no middlemen. We believe real estate should be personal, not transactional, so we provide one-on-one guidance every step of the way. Whether you’re selling, upgrading, or downsizing, we combine market expertise with genuine care to help you make the best decisions. Our fair, transparent compensation of 1.5–2% ensures you keep more of what’s yours.",
      linkText: "Get a Free Home Evaluation",
      to: "/home-evaluation",
    },
    {
      title: "Flip Your Home",
      text: "We make upgrading and flipping simple—no upfront costs, no stress. Using our trusted network of skilled, low-cost contractors, we manage the entire process from start to finish. Our approach helps you unlock your home’s full potential and achieve the highest possible return while protecting your hard-earned equity.",
      linkText: "Meet Our Team & Partners",
      to: "/about-us",
    },
    {
      title: "Fair & Honest Cash Offer",
      text: "By working with us, you deal directly with the buyer—no agents, no showings, no delays. This eliminates complications and allows us to move much faster. If you want a fair, straightforward offer and a smooth process, we’re here to make it happen.",
      linkText: "Get Your Fair Cash Offer",
      to: "/cash-offer",
    },
  ];

  return (
    <div className="info-container" style={{ backgroundImage: `url(${bg})` }}>
      {boxes.map((box, index) => (
        <div key={index} className="info-box">
          <h2 className="info-title">{box.title}</h2>
          <p className="info-text">{box.text}</p>
          <a
              href={box.to}
              className="info-link"
            >
              {box.linkText} &rarr;
            </a>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;
