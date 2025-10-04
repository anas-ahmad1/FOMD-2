import React, { useState } from "react";
import "./Homepage.css";
import HomeMainView from "../../components/HomeMainView/HomeMainView";
import DashboardMainSection from "../../components/DashboardMainSection/DashboardMainSection";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import HowDoesItWork from "../../components/HowDoesItWork/HowDoesItWork";
import PageTransition from "../../components/PageTransition/PageTransition";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import MeetTheTeam from "../../components/MeetTheTeam/MeetTheTeam";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ExtraDetailSection from "../../components/ExtraDetailSection/ExtraDetailSection";
import LuxurySection from "../../components/LuxurySection/LuxurySection";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
    <Helmet>
      <title>Flip on My Dime | Stress-Free Home Flipping & Selling Services</title>
      <meta name="description" content="Let Flip on My Dime upgrade and sell your home for top dollar with no upfront cost. Stress-free renovations, valuable upgrades, and shared profits." />
      <script type="application/ld+json">
      {`
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Flip on my dime",
        "description": "Flip on my dime is a boutique, all-inclusive real estate renovation service in Houston, USA. We specialize in helping homeowners increase the value of their homes before selling — with no upfront cost. From stress-free upgrades to expert market knowledge, we handle the transformation and help you flip your home for maximum profit.",
        "url": "https://fliponmydime.com/",
        "telephone": "+1-713-497-6931",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Clear Lake City",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "logo": "https://fliponmydime.com/logo.jpeg",
        "areaServed": {
          "@type": "Place",
          "name": "Houston"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "telephone": "+1-713-497-6931"
        },
        "sameAs": [
          "https://fliponmydime.com/"
        ]
      `}
      </script>

    </Helmet>
      
      <div className="home-container">
        <DashboardMainSection/>
        <SectionHeader title="What we do" />
        <WhatWeDo/>
        <SectionHeader title="THE ONLY TEAM WHO INVEST ALONGSIDE THEIR CLIENTS" />
        <ExtraDetailSection/>
        <LuxurySection/>
        {/* <HomeMainView/>
        <PageTransition transitionDirection="l2d"/>
        <PageTransition transitionDirection="d2l"/>
        <HowDoesItWork/>
        <PageTransition transitionDirection="l2d"/>
        <WhyChooseUs/>
        <PageTransition transitionDirection="d2l"/>
        <MeetTheTeam/> */}
      </div>
    </>
  );
};

export default Homepage;
