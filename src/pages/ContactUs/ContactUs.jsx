import React from "react";
import "./ContactUs.css";
import FormMobile from "../../assets/mobile-form.png";
import FormEmail from "../../assets/email-form.png";
import Email from "../../assets/email.png";
import Mobile from "../../assets/mobile.png";
import Location from "../../assets/location.png";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      message: formValues.message,
    };

    emailjs
      .send(
        "service_f6hifl4",
        "template_tz6ppw9",
        formData,
        "pHLOvq98OT9IEH6t3"
      )
      .then(
        (response) => {
          toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });

          setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });

          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send email. Please try again!", {
            position: "top-right",
            autoClose: 3000,
          });
          
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
    <Helmet>
      <title>Contact Us | Flip on My Dime - Start Your Home Renovation Journey</title>
      <meta name="description" content="Get in touch with Flip on My Dime to discuss how we can flip your home for maximum profit. Stress-free renovations and expert guidance await!" />
      <script type="application/ld+json">
        {`
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Flip on my dime",
            "url": "https://fliponmydime.com/",
            "logo": "https://fliponmydime.com/logo.jpeg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-713-497-6931",
              "contactType": "Customer Support",
              "areaServed": "US",
              "availableLanguage": ["English"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Clear Lake City",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          }
        `}
      </script>

    </Helmet>
      
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
                    value={formValues.firstName}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formValues.lastName}
                    onChange={(e) =>
                      setFormValues({ ...formValues, lastName: e.target.value })
                    }
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
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
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
                    value={formValues.phone}
                    onChange={(e) =>
                      setFormValues({ ...formValues, phone: e.target.value })
                    }
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
                    value={formValues.message}
                    onChange={(e) =>
                      setFormValues({ ...formValues, message: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <button className="form-button" disabled={isSubmitting}>{isSubmitting ? <span className="spinner"></span> : "Submit"}</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactUs;
