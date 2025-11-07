import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./LuxurySection.css";
import bgImageDesktop from "../../assets/luxury-section-bg.webp";

const LuxurySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="luxury-section"
      ref={ref}
      aria-labelledby="luxury-heading"
    >
      <img
        src={bgImageDesktop}
        sizes="(max-width: 768px) 768px, 1200px"
        alt="Luxury real estate background - elegant home interior representing Flip on My Dime renovation success"
        className="luxury-bg-image"
        loading="lazy"
        decoding="async"
      />

      <div className="overlay">
        <div className="content">
          <h2 id="luxury-heading" className="heading">
            LUXURY REAL ESTATE, BACKED BY RESULTS
          </h2>
          <p className="subheading">
            At Flip on My Dime, Neal & Puja bring vision, expertise, and proven
            results to every project.
          </p>

          <div className="stats-row">
            <div className="stat-box">
              <span className="value">
                {inView && (
                  <CountUp
                    start={0}
                    end={7}
                    duration={2}
                    separator=","
                    prefix="$"
                    suffix="M+"
                  />
                )}
              </span>
              <span className="label">in New Construction Sales</span>
            </div>

            <div className="stat-box">
              <span className="value">
                {inView && (
                  <CountUp
                    start={0}
                    end={220}
                    duration={2}
                    separator=","
                    prefix="$"
                    suffix="k+"
                  />
                )}
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
    </section>
  );
};

export default LuxurySection;
