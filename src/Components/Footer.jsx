// src/Footer.js
import React from 'react';
import './Footer.css';
import footlogo from "../assets/SelvamDental_logo.png";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosCall, IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="row">
          {/* Logo and Description Section */}
          <div className="col-lg-3 col-md-6 footer-section">
            <img
              src={footlogo}
              alt="footerlogo"
              className="footer-title"
              style={{ width: "190px" }}
            />
            <div className="footenlists">
              <p>
                Selvan Dental Hospital offers a comprehensive range of dental
                services for both adults and children.
              </p>
            </div>
          </div>

          {/* Head Office Section */}
          <div className="col-lg-3 col-md-6 footer-section">
            <h2 className="footer-title">Head Office</h2>
            <div className="footenlists">
              <p>NGL to TVM main road</p>
              <p>Swamiyarmadam</p>
              <p className="mail">
                <a
                  style={{ color: "#04abe3" }}
                  href="mailto:info@demolink.com"
                >
                  <i style={{ color: "white", paddingRight: "5px" }}>
                    <IoIosMail />
                  </i>
                  selvamdental25@gmail.com
                </a>
              </p>
              <p>
                <a
                  style={{ color: "yellow", fontWeight: "bold" }}
                  href="tel:80012345678"
                >
                  <i style={{ color: "white", paddingRight: "10px" }}>
                    <IoIosCall />
                  </i>
                  9585119192
                </a>
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-3 col-md-6 footer-section">
            <h2 className="footer-title">Latest Posts</h2>
            <div className="footenlists">
              <a href="#" className="text-white mx-2">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white mx-2">
                <FaTwitter />
              </a>
              <a href="#" className="text-white mx-2">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/selvam_dental/" className="text-white mx-2">
                <FaSquareInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-3 col-md-6 footer-section">
            <h2 className="footer-title">Quick Links</h2>
            <div className="footenlists">
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/about-us">About</a>
              </p>
              <p>
                <a href="/treatments">Treatments</a>
              </p>
              <p>
                <a href="/smile-gallery">Smile Gallery</a>
              </p>
              <p>
                <a href="/contact-us">Contact</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center ">
        <p>&copy; {new Date().getFullYear()} <a href="/">@expesquare.</a> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
