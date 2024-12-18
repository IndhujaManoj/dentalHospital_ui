import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/SelvamDental_logo.png";
import { FaPhoneAlt, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaAddressCard, FaSquareInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  return (
    <>
      <header>
        {/* Top Bar */}
        <div className="topbar text-white py-2">
          <div className="container d-flex justify-content-between align-items-center flex-wrap">
            <div className="top_left d-flex align-items-center flex-wrap">
              <span className="me-3 d-flex align-items-center">
                <FaPhoneAlt className="me-2" />
                +800 123 45 67
              </span>
              <span className="me-3 d-flex align-items-center">
                <IoMail className="me-2" />
                info@demolink.com
              </span>
              <span className="d-flex align-items-center">
                <FaAddressCard className="me-2" />
                121 Wallstreet Street, NY, USA
              </span>
            </div>
            <div className="social-icons d-flex align-items-center">
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
        </div>

        {/* Navbar Section */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img
                src={logo}
                alt="Careex Logo"
                className="me-2"
                style={{ height: "70px", width: "300px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    ABOUT US
                  </a>
                </li>
                <li
  className={`nav-item dropdown ${activeDropdown ? "show" : ""}`}
  onMouseEnter={() => setActiveDropdown(true)}
  onMouseLeave={() => setActiveDropdown(false)}
>
  <a className="nav-link" href="/treatments">
    TREATMENTS
  </a>
  <ul className="dropdown-menu">
    {[
      {
        name: "Orthodontics",
        submenu: [
          { name: "Oral and Maxillofacial", link: "/treatments/oral-maxillofacial" },
          { name: "Orthodontics", link: "/treatments/orthodontics" },
        ],
      },
      {
        name: "Conservative Dentistry",
        submenu: [
          { name: "Cosmetic Dentistry", link: "/treatments/cosmetic-dentistry" },
          { name: "Dental Veneers", link: "/treatments/dental-veneers" },
          { name: "Teeth Whitening", link: "/treatments/teeth-whitening" },
          { name: "Smile Makeover", link: "/treatments/smile-makeover" },
        ],
      },
      {
        name: "Prostodontics",
        submenu: [
          { name: "Dental Bridges", link: "/treatments/dental-bridges" },
          { name: "Dental Implants", link: "/treatments/dental-implants" },
          { name: "Dental Crowns", link: "/treatments/dental-crowns" },
          { name: "Dentures", link: "/treatments/dentures" },
        ],
      },
      {
        name: "Periodontics",
        submenu: [
          { name: "Teeth Scaling", link: "/treatments/teeth-scaling" },
        ],
      },
      { name: "Laser Dentistry", link: "/treatments/laser-dentistry" },
      { name: "Pediatric Dentistry", link: "/treatments/pediatric-dentistry" },
      { name: "Sedation Dentistry", link: "/treatments/sedation-dentistry" },
      { name: "Root Canal Treatment", link: "/treatments/root-canal-treatment" },
      { name: "Brushing Techniques", link: "/treatments/brushing-techniques" },
    ].map((item, index) => (
      <li
        key={index}
        className={`dropdown-item ${item.submenu ? "has-submenu" : ""}`}
        onMouseEnter={() => setActiveSubDropdown(index)}
        onMouseLeave={() => setActiveSubDropdown(null)}
      >
        <a href={item.link || "#"}>{item.name}</a>
        {item.submenu && <span className="submenu-icon">▶</span>}
        {item.submenu && activeSubDropdown === index && (
          <ul className="submenu">
            {item.submenu.map((subItem, subIndex) => (
              <li key={subIndex} className="submenu-item">
                <a href={subItem.link}>{subItem.name}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
</li>


                {/* <li className="nav-item">
                  <a className="nav-link" href="/virtual-tour">
                    VIRTUAL TOUR
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/smile-gallery">
                    SMILE GALLERY
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/events">
                    EVENTS
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/contact-us">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;  