import "./Homepage.css";
import DashboardMainSection from "../../components/DashboardMainSection/DashboardMainSection";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ExtraDetailSection from "../../components/ExtraDetailSection/ExtraDetailSection";
import LuxurySection from "../../components/LuxurySection/LuxurySection";
import { Helmet } from "react-helmet";
import OurTeam from "../../components/OurTeam/OurTeam";
import Portfolio from "../../components/Portfolio/Portfolio";
import Testimonial from "../../components/Testimonial/Testimonial";
const socialImage = "https://postoakrealtytx.com/og-image.png";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>
          Post Oak Realty Advisors | Low Commission Realtors & Cash Home Buyers in
          Houston
        </title>

        <meta
          name="description"
          content="Post Oak Realty Advisors helps homeowners in Houston sell fast and profit more — offering low commission realtor services, cash home offers, and no-upfront-cost renovations."
        />

        <meta
          name="keywords"
          content="low commission realtor Houston, cash home buyers Houston, renovate before selling, real estate investors Houston, sell your house fast, home renovations before sale, full service realtor low fees"
        />

        <link rel="canonical" href="https://postoakrealtytx.com/" />

        <meta
          property="og:title"
          content="Post Oak Realty Advisors: Sell Your Houston Home for More Profit"
        />
        <meta
          property="og:description"
          content="Houston's full-service real estate partner: offering low commission realtor fees, immediate cash offers, and no-cost-to-you renovation programs."
        />
        <meta property="og:url" content="https://postoakrealtytx.com/" />
        <meta property="og:site_name" content="Post Oak Realty Advisors" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Post Oak Realty Advisors: Low Commission Realtors in Houston"
        />
        <meta
          name="twitter:description"
          content="Stop paying high fees. We help Houston homeowners profit more with low commissions, fast cash offers, and pre-sale renovations."
        />
        <meta name="twitter:image" content={socialImage} />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Post Oak Realty Advisors",
        "description": "Post Oak Realty Advisors is a Houston-based real estate company helping clients renovate, sell, or get a fast cash offer with no upfront cost.",
        "url": "https://postoakrealtytx.com/",
        "telephone": "+1-713-497-6931",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Clear Lake City",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "areaServed": ["Houston", "Pearland", "Friendswood", "Sugar Land", "League City"],
        "sameAs": [
          "https://postoakrealtytx.com/"
        ]
      }
    `}
        </script>
      </Helmet>

      <div className="home-container">
        <DashboardMainSection />
        <LuxurySection />
        <SectionHeader title="What we do" />
        <WhatWeDo />
        <SectionHeader title="THE ONLY TEAM WHO INVEST ALONGSIDE THEIR CLIENTS" />
        <ExtraDetailSection />
        <Portfolio />
        <SectionHeader title="YOUR PARTNERS IN REAL ESTATE" />
        <OurTeam />
        <SectionHeader title="TESTIMONIALS" />
        <Testimonial />
      </div>
    </>
  );
};

export default Homepage;
