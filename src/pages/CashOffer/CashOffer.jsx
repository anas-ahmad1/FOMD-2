import React from "react";
import "./CashOffer.css";
import FormMobile from "../../assets/mobile-form.png";
import FormEmail from "../../assets/email-form.png";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CashOffer = () => {
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    expectedPrice: "",
    condition: "",
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
      expectedPrice: formValues.expectedPrice,
      condition: formValues.condition,
      visitTime: formValues.visitTime
    };

    emailjs
      .send(
        "service_4yqxnak",
        "template_wvylq2w",
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
            expectedPrice: "",
            condition: "",
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
          <div className="contact-us-heading">Fair Cash Offer</div>
          <div className="contact-us-text-secondary">
            Our fair and fast cash offer gives you peace of mind. We evaluate your home’s current market value and provide a straightforward, transparent offer — no hidden fees or commissions. Because we pay in cash, you can choose your closing date and move on your schedule, without repairs, showings, or delays.
          </div>
          <div className="contact-us-text-secondary cash-offer-points">
            <h3>Reasons to sell:</h3>
            <ul>
              <li>Sell as-is, no repairs</li>
              <li>No realtor fees</li>
              <li>Avoid foreclosure or debt</li>
              <li>Fast, guaranteed sale</li>
              <li>Inherited property</li>
              <li>Damaged home</li>
              <li>Done with tenants</li>
              <li>Second home</li>
              <li>No showings</li>
            </ul>
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
                  <input
                    type="text"
                    id="expectedPrice"
                    name="expectedPrice"
                    placeholder="Expected Sale Price"
                    required
                    value={formValues.expectedPrice}
                    onChange={(e) =>
                      setFormValues({ ...formValues, expectedPrice: e.target.value })
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
                  <select
                    name="condition"
                    value={formValues.condition}
                    onChange={(e) =>
                      setFormValues({ ...formValues, condition: e.target.value })
                    }
                  >
                    <option value="">Condition of the house</option>
                    <option value="Excellent – Recently renovated, move-in ready">Excellent – Recently renovated, move-in ready</option>
                    <option value="Good – Well-maintained, minor cosmetic updates needed">Good – Well-maintained, minor cosmetic updates needed</option>
                    <option value="Fair – Dated, some repairs needed">Fair – Dated, some repairs needed</option>
                    <option value="Poor – Major repairs needed (roof, foundation, electrical, plumbing systems)">Poor – Major repairs needed (roof, foundation, electrical, plumbing systems)</option>
                  </select>
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

export default CashOffer;
