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
        <h3 className="mb-4">Total Health Care</h3>
        <div className='aboutcontent'>
        <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
        <p>Clinical excellence, diversity, and access to innovative technology are all hallmarks of the graduate medical education experience at Careex. Our residents, fellows, and renowned staff share their experience working at Careex.</p>
        <p><strong>We try to do our best to help you and provide with a high-quality services.</strong></p></div>
        <a href="/contact-us" className=" serbtn btn btn-lg" style={{backgroundColor:"#045c7c", color:"white"}}>Get in Touch</a>
      </div>
    </div>
  </div>
  <Appointment/>
      
    </div>
  )
}

export default Treatments
