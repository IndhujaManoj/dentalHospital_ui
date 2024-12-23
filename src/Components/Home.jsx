import React from "react";
import "./Home.css";
import cosmetic from "../assets/Cosmetic_dentistry.png"
import rootcanal from "../assets/2.png"
import  dentures from "../assets/3.png"
import dentalhygiene from "../assets/4.png"
import orthodontics from "../assets/5.png"
import Service from "../Components/Service"
import Appointment from "../Components/Appointment"



const Home = () => {
  return (
    <>
    <section className="home-section">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-md-6 text-section">
        <h5 className="text-highlight" style={{color:"#04abe3"}}>Your Smile Is Our Priority</h5>
        <h1 className="display-4 fw-bold" style={{color:"#04abe3"}}>Exceptional Dental Care</h1>
        <p className="lead" style={{color:"gray",fontSize:"18px"}}>
          We are committed to providing you with healthy, beautiful smiles and ensuring your dental well-being every day.
        </p>
        <a href="/about-us" className="btn btn-lg" style={{backgroundColor:"#045c7c", color:"white"}}>
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    <section className="services-timetable">
  <div className="container">
    <div className="row">
    <div className="col-lg-8">
  <div className="row gy-4">
    {/* Service Cards */}
    {[
      { id: "cosmetic", title: "Cosmetic Dentistry", img: cosmetic, desc: "Cosmetic dentistry focuses on enhancing the aesthetic appearance of your teeth." },
      { id: "rootcanal", title: "Root Canal Treatment", img: rootcanal, desc: "Root canal treatment helps save a damaged or infected tooth by removing the infected pulp." },
      { id: "dentures", title: "Dentures", img: dentures, desc: "Dentures are removable appliances that can replace missing teeth and restore your smile." },
      { id: "dentalhygiene", title: "Dental Hygiene", img: dentalhygiene, desc: "Proper dental hygiene is essential for preventing oral diseases and maintaining a healthy smile." },
      { id: "dental", title: "General Dental Care", img: dentalhygiene, desc: "General dentistry includes routine care like cleanings, checkups, and fillings." },
      { id: "orthodontics", title: "Orthodontics", img: orthodontics, desc: "Orthodontics focuses on diagnosing and treating misaligned teeth and jaws to improve functionality and appearance." },
    ].map((service, idx) => (
      <div className="col-md-4" key={service.id}>
        <div className="service-card-wrapper">
          <div className="service-card text-center">
            {/* Front of the Card */}
            <div className="service-card-front">
              {service.img && (
                <div className="icon">
                  <img
                    src={service.img}
                    alt={service.id}
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
              )}
              {service.title && <h5 className="servhead">{service.title}</h5>}
             
            </div>
            
            {/* Back of the Card */}
            <div className="service-card-back">
              <h5>More About {service.title}</h5>
              <p>{service.desc}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

     {/* Timetable Section */}
     <div className="col-lg-4">
        <div className="timetable-card">
          <h4 className="timetabe_title">
           <span style={{fontSize:"25px"}}> Check Our</span><br />
            <span >Weekly Timetable</span>
          </h4>

          <p>
            You can make an appointment, select a convenient time, and choose the appropriate doctor here.
          </p>
          <ul className="timetable-list" style={{paddingTop:"20px"}}>
            {[
              { day: "Monday - Friday", time: "9:30 - 01:30" },
              { day: "Monday - Friday", time: "4:00 - 10:00" },
              { day: "Sunday", time: "5:00 - 10:00" },
            ].map((slot, idx) => (
              <li key={idx}>
                <span>{slot.day}</span>
                <span style={{ color: "yellow", fontWeight: "bold" }}>{slot.time}</span>
              </li>
            ))}
          </ul>
          <a href="/contact-us" className="btn btn-dark btn-lg">
            Visit Us
          </a>
        </div>
        </div>
    </div>
  </div>
</section>
    <Service/>
    <Appointment/>
    </>

    
  );
};

export default Home;
