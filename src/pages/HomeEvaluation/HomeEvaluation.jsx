import React from "react";
import "./HomeEvaluation.css";
import FormMobile from "../../assets/mobile-form.png";
import FormEmail from "../../assets/email-form.png";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const HomeEvaluation = () => {
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    visitTime: ""
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
      address: formValues.address,
      message: formValues.message,
      visitTime: formValues.visitTime
    };

    emailjs
      .send(
        "service_4yqxnak",
        "template_2pttyok",
        formData,
        "EvhYKixT-IsRt0PbT"
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
            address: "",
            message: "",
            visitTime: ""
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
      <div className="contact-us-container">
        <div className="contact-us-left-container">
          <div className="contact-us-heading">Free Home Evaluation</div>
          <div className="contact-us-text-secondary">
            Curious about your home's value ? We provide a no-obligation home evaluation to help understand your property's market potential and work with you on the best strategies allowing you to make and informed decision and sell quickly for top dollar!
          </div>
          <div className="contact-us-detail-row">
            <FaEnvelope style={{color: 'white'}}/>
            <div className="contact-us-detail">Neal@fliponmydime.com</div>
          </div>
          <div className="contact-us-detail-row">
            <FaMapMarkerAlt style={{color: 'white'}}/>
            <div className="contact-us-detail">Clear Lake City Houston</div>
          </div>
          <div className="contact-us-detail-row">
            <FaPhoneAlt style={{color: 'white'}}/>
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
                  <img src={FormEmail} alt="Envelope icon representing email field" />
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
                  <img src={FormMobile} alt="Phone icon representing mobile field" />
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
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    required
                    value={formValues.address}
                    onChange={(e) =>
                      setFormValues({ ...formValues, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-container">
                  <select
                    name="visitTime"
                    value={formValues.visitTime}
                    onChange={(e) =>
                      setFormValues({ ...formValues, visitTime: e.target.value })
                    }
                  >
                    <option value="">When should we visit?</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This weekend">This weekend</option>
                    <option value="Next few days">In the next few days</option>
                    <option value="Next week">Next week</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
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

export default HomeEvaluation;
