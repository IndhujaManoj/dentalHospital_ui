import React from 'react'
import about from "../assets/servicepicture.jpg"
import "./About.css"
import doctor1 from "../assets/virtualtour-4.jpg";
// import doctor2 from "../assets/doctor2.jpeg";
import Service from "../Components/Service"


const About = () => {
  return (
    <div>
        <div className="container my-5" style={{margintop: "50px"}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={about} alt="Doctor" className="img-fluid rounded"  style={{width:"100%",height:"500px"}}/>
        </div>
        <div className="col-md-6">
          <h2 className="display-4">We Provide</h2>
          <h3 className="mb-4">Complete Dental Care</h3>
          <div className='aboutcontent'>
          <p>We offer a wide range of dental services, ensuring that everyone has access to high-quality dental care and treatments.</p>
          <p>Clinical excellence, patient-centered care, and the latest in dental technology are key aspects of the care experience at Selvan Dental Hospital. Our experienced dentists and dedicated staff work together to deliver exceptional dental services.</p>
          <p><strong>We strive to provide the best care possible and ensure a comfortable experience with top-quality dental treatments..</strong></p></div>
          <a href="/contact-us" className=" serbtn btn btn-lg" style={{backgroundColor:"#045c7c", color:"white"}}>Get in Touch</a>
        </div>
      </div>
    </div>
    <section className="features">
      <div className="feature">
        <h2>Quality </h2>
        <p>
          We provide you with professional dental services by our experienced staff. Our clinic is equipped with state-of-the-art monitoring, diagnostic, and life support equipment to ensure the highest standards of care.
        </p>
      </div>
      <div className="feature">
        <h2>Dignity </h2>
        <p>
          Your comfort and dignity are very important to us. We use an individualized approach to treat each patient with the utmost respect, taking into account your specific wishes and suggestions.
        </p>
      </div>
      <div className="feature">
        <h2>Responsibility</h2>
        <p>
          Our team is highly professional and responsive. We are passionate about our work and strive to provide you with top-quality dental services and treatment.
        </p>
      </div>
    </section>

    <section className="about-us">
  <h1 className="abus">About Us</h1>
  <h2>Management Team</h2>
  <div className="team-member">
    <div className="member-photo-container">
      <img 
        src={doctor1} 
        alt="Portrait of Dr. M. Charles Prem Kumar, Founder and Managing Director of Charli Dental" 
        className="member-photo" 
      />
    </div>
    <div className="member-details">
      <h3 style={{color:"black"}}>Dr.Shabin jhon BDS,FRCD</h3>
      <p style={{color:"black"}}><strong>Founder & Owner, Managing Director</strong></p>
      <p style={{textAlign:"justify"}}>
        Dr. Charles, a Dental Surgeon who graduated from Annamalai University in 1999, is passionate about providing quality dental services to society. He founded Charli Dental in 2009, which is committed to excellence in dentistry.
      </p>
      <h4 className='member-subtitle'>Areas of Expertise</h4>
      <ul className="expertise-list">
        <li>Providing quality dental services</li>
        <li>Commitment to excellence in dentistry</li>
        <li>Dental health education and outreach</li>
        <li>Leadership in the dental industry</li>
      </ul>
      <h4 className='member-subtitle'>Education</h4>
      <ul className="education-list">
        <li>Bachelor of Dental Surgery, Annamalai University (1999)</li>
        <li>Specialized training in dental health practices</li>
      </ul>
    </div>
  </div>
</section>


    <Service/>
    
      
    </div>
  )
}

export default About
