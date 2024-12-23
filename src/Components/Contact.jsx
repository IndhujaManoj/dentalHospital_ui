import React, { useState } from "react";
import "./Contact.css";
import Appointment from "./Appointment";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import axios from "axios"; // Import axios for making the API request

import contactbanner from "../assets/contactbanner.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
      });

      // Check if the request was successful
      if (response.data.success) {
        // Show success message
        setSuccessMessage("Your message has been sent successfully.");

        // Clear form inputs
        setName("");
        setEmail("");
        setMessage("");

        // Show alert box after submission
        alert("Your message has been sent successfully!");

        setErrorMessage("");
      }
    } catch (error) {
      // Handle error during submission
      setErrorMessage("There was an error submitting your message. Please try again.");
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <div className="contactbanner">
        <img className="img-fluid" src={contactbanner} alt="Contact Banner" />
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="contacthead">Contact Details</h2>
            <p>If you are interested in working with us then please drop us a line, we would love to hear from you.</p>
            <ul className="list-unstyled contactContainer">
              <li><i><FaLocationDot style={{ color: "#045c7c" }} /></i><span style={{ paddingLeft: "10px" }}>121 Wallstreet Street, New York, USA</span></li>
              <li><i><IoMdMail style={{ color: "#045c7c" }} /></i> <span style={{ paddingLeft: "10px" }}>info@demolink.com</span></li>
              <li><i ><FaPhoneVolume style={{ color: "#045c7c" }} /></i><span style={{ paddingLeft: "10px" }}> +800 1234 56 78</span></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2 className="contacthead">Drop Us A Line</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: "#045c7c", color: "white", marginTop: "10px" }}>
                Send Message
              </button>
            </form>

            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          </div>
        </div>
      </div>
      <Appointment />

      <div className="row mt-4">
        <div className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.377610978428!2d77.6894832146183!3d8.719720893737234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041210cb7e98b3%3A0x9e4d2b3d8e07313e!2sCharli%20Dental!5e0!3m2!1sen!2sin!4v1614185228461!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border rounded"
            allowFullScreen=""
            loading="lazy"
            title="Charli Dental Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
