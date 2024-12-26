import React from 'react'
import treatmentpost from "../assets/treatmentspost.png"
import Appointment from './Appointment'

const Treatments = () => {
  return (
    <div>
        <div className="container" >
    <div className="row align-items-center">
      <div className="col-md-6" style={{alignItems:"center",justifyContent:"center",}}>
        <img src={treatmentpost} alt="Doctor" className="img-fluid rounded"  style={{Width:"650px",height:"450px"}}/>
      </div>
      <div className="col-md-6" style={{padding:"10px"}}>
        <h2 className="display-4">We Provide</h2>
        <h3 className="mb-4">Comprehensive Dental Care</h3>
        <div className='aboutcontent'>
        <p>At Selvam Dental Hospital, we offer a wide range of dental services to ensure everyone has access to exceptional oral healthcare.</p>
        <p>With a focus on clinical expertise, patient diversity, and the latest dental technologies, our team of skilled dentists and specialists delivers personalized treatment plans for every patient.</p>
        <p><strong>Our commitment is to provide you with high-quality, compassionate dental care, helping you achieve a healthy and confident smile.</strong></p></div>
        <a href="/contact-us" className=" serbtn btn btn-lg" style={{backgroundColor:"#045c7c", color:"white"}}>Get in Touch</a>
      </div>
    </div>
  </div>
  <Appointment/>
      
    </div>
  )
}

export default Treatments
