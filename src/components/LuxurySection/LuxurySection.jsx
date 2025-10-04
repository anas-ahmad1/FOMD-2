import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./LuxurySection.css";
import bgImage from "../../assets/luxury-section-bg.jpg";

const LuxurySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      className="luxury-section"
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={ref}
    >
      <div className="overlay">
        <div className="content">
          <h1 className="heading">
            LUXURY REAL ESTATE, BACKED BY RESULTS
          </h1>
          <p className="subheading">
            At Flip on My Dime, Neal & Puja bring vision, expertise, and proven results to every project
          </p>

          <div className="stats-row">
            <div className="stat-box">
              <span className="value">
                {inView && <CountUp start={0} end={7} duration={2} separator="," prefix="$" suffix="M+" />}
              </span>
              <span className="label">in New Construction Sales</span>
            </div>
            <div className="stat-box">
              <span className="value">
                {inView && <CountUp start={0} end={180} duration={2} separator="," prefix="$" suffix="k+" />}
              </span>
              <span className="label">Invested in Client Homes</span>
            </div>
            <div className="stat-box">
              <span className="value">
                {inView && <CountUp start={0} end={20} duration={2} suffix="+" />}
              </span>
              <span className="label">Successful Renovations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxurySection;
