import React, { useState } from "react";
import img from "../../assets/Gallery19.jpg";
import "./ExtraDetailSection.css";

const ExtraDetailSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const email = "neal@fliponmydime.com";
    const subject = encodeURIComponent("Referral");

    const body = encodeURIComponent(
      `Howdy!\n\nI know someone who wants to sell their home and use the trusted expertise services of Neal and Puja at Flip On My Dime! They would love to have local professionals, financial resources, and take all the stress away from the selling process.\n\nHere are their details:\n\nName: ${formData.name}\nContact: ${formData.contact}\n\nThanks!`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setIsModalOpen(false);
    setFormData({ name: "", contact: "" });
  };

  return (
    <div className="three-column-section">
      <div className="column left-column">
        <div className="words">
          <p>REIMAGINED</p>
          <p>EXPERTLY CRAFTED</p>
          <p>TAILORED TO YOU</p>
        </div>
      </div>

      <div className="column middle-column">
        <img src={img} alt="Image showing Interior Design" />
      </div>

      <div className="column right-column">
        <p className="description">
          We are a boutique all-inclusive realtor that not only helps you sell
          your home, but takes away every stressor while adding value through
          upgrades that are currently hot in today’s market!
          <br />
          <br />
          Selling? Flip your home with no money! Let us do all the work and you
          keep your hard-earned equity!
          <br />
          <br />
          <br />
          Know someone selling? Earn $500+ for a referral!
        </p>
        <button className="contact-btn" onClick={() => setIsModalOpen(true)}>
          Refer
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-icon" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>

            <h2 className="refer-text-heading">Refer a Seller</h2>
            <p>
              Please provide the seller’s details below and we’ll reach out
              right away!
            </p>

            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter seller's name"
              />

            <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Phone or Email"
              />

            <div className="modal-buttons">
              <button className="submit-btn" onClick={handleSubmit}>
                Send Referral
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExtraDetailSection;
