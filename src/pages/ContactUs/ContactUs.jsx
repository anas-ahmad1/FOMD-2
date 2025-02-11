import React from "react";
import "./ContactUs.css";
import FormMobile from "../../assets/mobile-form.png";
import FormEmail from "../../assets/email-form.png";
import Email from "../../assets/email.png"; 
import Mobile from "../../assets/mobile.png"; 
import Location from "../../assets/location.png"; 

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="contact-us-container">

        <div className="contact-us-left-container">
          <div className="contact-us-heading">Contact Us</div>
          <div className="contact-us-text-secondary">
            We’re here to help and answer any questions you might have. We look
            forward to hearing from you!
          </div>
          <div className="contact-us-detail-row">
            <img src={Email} />
            <div className="contact-us-detail">Neal@fliponmydime.com</div>
          </div>
          <div className="contact-us-detail-row">
            <img src={Location} />
            <div className="contact-us-detail">Clear Lake City Houston</div>
          </div>
          <div className="contact-us-detail-row">
            <img src={Mobile} />
            <div className="contact-us-detail">713 497 6931</div>
          </div>
          
        </div>



        <div className="contact-us-right-container">
          <div className="contact-us-form">
            <form onSubmit={handleSubmit}>
              <div className="contact-us-form-heading">Get in Touch</div>
              <div className="contact-us-form-text-secondary">
                You can reach us any time
              </div>
              <div className="form-row">
                <div className="input-container">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-container">
                  <img src={FormEmail} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-container">
                  <img src={FormMobile} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-container">
                  <textarea
                  style={{ resize: "none" }}
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    placeholder="How can we help? "
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <button className="form-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
