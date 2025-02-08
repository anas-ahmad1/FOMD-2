import React, { useState, useEffect } from "react";
import "./MeetTheTeam.css";
import experience from "../../assets/experience.png";
import personalized from "../../assets/personalized.png";
import network from "../../assets/network.png";
import teamMember1 from "../../assets/teamMember1.jpeg";
import teamMember2 from "../../assets/teamMember2.jpeg";

const MeetTheTeam = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="view-five-main-container">
        <div className="team-members-container">
          <div className="team-member">
            <img src={teamMember1}></img>
            <div className="team-member-name">Neal</div>
            <div className="team-member-designation">Founder</div>
            <div className="team-member-detail">
              Being a  seasoned real estate developer helping others in an
              honest and ethical manner is ingrained in Neal.
            </div>
          </div>
          <div className="team-member">
            <img src={teamMember2}></img>
            <div className="team-member-name">Puja Birak</div>
            <div className="team-member-designation">Realtor</div>
            <div className="team-member-detail">
              Puja handles all our real estate needs as a licensed agent with
              knack in resolving any conflicts  and negotiations with a
              background in counseling. 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
