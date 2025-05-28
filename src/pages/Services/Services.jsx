import React from "react";
import "./Services.css";
import Deal from "../../assets/deal.png";
import Payment from "../../assets/payment.png";
import HomeRepair from "../../assets/home-repair.png"; 
import RealEstate from "../../assets/real-estate.png";

const Services = () => {

  return (
    <>
      <title>Our Services | Flip on My Dime - Renovate & Sell for More</title>
      <meta name="description" content="Discover our all-inclusive home flipping services. From upgrades to final sale, Flip on My Dime handles everything to help you sell for more." />
      <div className="services-main-container">
        <div className="services-heading">Our Services</div>
        <div className="services-text-secondary">Maximize your home's value with expert renovations, fast cash offers, and seamless flipping—all at no upfront cost. Whether you're selling, investing, or new to real estate, we handle everything to boost your profits.</div>
        <div className="services-container">
            <div className="service-box">
              <img src={Deal}></img>
              <div className="service-heading">Expert Realty Services</div>
              <div className="service-text-secondary">Buy or sell with confidence using our flat-rate realtor service. We handle negotiations and paperwork, ensuring a smooth, cost-effective transaction without hidden fees.</div>
            </div>
            <div className="service-box">
              <img src={HomeRepair}></img>
              <div className="service-heading">Renovate & Sell</div>
              <div className="service-text-secondary">Increase your home’s value with strategic upgrades. We manage renovations and budgeting, helping you sell faster and at a higher price—stress-free.</div>
            </div>
            <div className="service-box">
              <img src={Payment}></img>
              <div className="service-heading">Quick Cash Offers</div>
              <div className="service-text-secondary">Sell your home fast with a no-contingency cash offer. Avoid delays, paperwork, and uncertainty while getting a fair and hassle-free deal.</div>
            </div>
            <div className="service-box">
              <img src={RealEstate}></img>
              <div className="service-heading">Investor & Flipper Support</div>
              <div className="service-text-secondary">New to real estate? Get expert guidance on home flipping and investing to maximize profits and avoid costly mistakes.</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Services;
