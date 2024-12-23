// src/Footer.js
import React from 'react';
import './Footer.css';
import footlogo from "../assets/SelvamDental_logo.png"
import {  FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={footlogo} alt="footerlogo" className="footer-title" style={{width:"190px"}}/>
          <div className='footenlists'>
          <p>
          Selvan Dental Hospital offers a comprehensive range of dental services for both adults and children.
          </p>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Head Office</h2>
          <div className='footenlists'>
          <p>NGL to TVM main road</p>
          <p>Swamiyarmadam</p>
          <p><a style ={{color:"#04abe3"}} href="mailto:info@demolink.com">selvamdental25@gmail.com</a></p>
          <p><a style={{color:"yellow", fontWeight:"bold"}} href="tel:80012345678">9585119192</a></p>
          <p>Mon-Sat : 9:30 am – 1:30 pm</p>
          <p>Mon-Sat : 4:00 pm – 10:00 pm</p>
          <p>Sun : 5:00pm – 10:00pm</p>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Latest Posts</h2>
          <div className='footenlists'>
          <a href="#" className="text-white mx-2">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white mx-2">
                <FaTwitter />
              </a>
              <a href="#" className="text-white mx-2">
                <FaFacebook />
              </a>
              <a href="#" className="text-white mx-2">
                <FaSquareInstagram />
              </a>
          </div>
        </div>
      
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <div className='footenlists'>
          <p><a href="/">Home</a></p>
          <p><a href="/about-us">About</a></p>
          <p><a href="/treatments">Treatments</a></p>
          <p><a href="/smile-gallery">Smilegallery</a></p>
          <p><a href="/contact-us">Contact</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        
      </div>
    </footer>
  );
};

export default Footer;
