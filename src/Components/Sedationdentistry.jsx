import React from 'react'
import "./Oralandmaxillofacial.css"
import sedationtimg from "../assets/sedationdentistry.png"

const Sedationdentistry = () => {
  return (
    <div>
        <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{color:"#00a3ff"}}>
          Sedation Dentistry
          </h1>
          <h3 className="fw-bold">What do you mean by sedation?</h3>
          <p>
          Sedation dentistry helps one to snooze virtually during the visits to the dental clinic. It helps to go through the entire dental procedure comfortably and safely.
          </p>
          
        </div>
        <div className="col-lg-4 text-center">
          <img
            src={sedationtimg} 
            alt="Maxillofacial Surgery"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Section 2: Oral Treatment */}
      <section className="mt-5">
        <h3 className="fw-bold">Who are the best candidates of sedation dentistry?</h3>
          <ul className="custom-list">
          <li>
          People who gag
          </li>
          <li>
          Have problem in getting numb
          </li>
          <li>
          Have fear of the dental treatment
            
          </li>
          <li>
          Who have sensitive teeth
          </li>
          <li>
          Who have experienced traumatic dental procedure
          </li>
          <li>
          Who hate shots and needle
          </li>
          <li>
          Who do not like the smell, noise and taste of the dental treatment
          </li>
        </ul>
        <h3 className="fw-bold">Does one experience any pain?</h3>
        <p>People feel very comfortable and no pain while the dental treatment is going on and feel even better after the treatment is over.
          </p>
          <h3 className="fw-bold">What type of sedation is used?</h3>
        <p>General anesthesia is one type of sedation which everyone thinks off, but this requires a machine for breathing. For oral surgeries IV sedation is used. The most convenient, safe and comfortable is oral sedation. In this a pill is given to the patient a few hours prior to the visit to the dental clinic.
          </p>
          <h3 className="fw-bold">What are different levels of sedation?</h3>
        <p style={{marginBottom:"1px"}}><span style={{color:"#04abe3",fontWeight:"bold"}}>Mild Sedation </span>in which one is conscious and responds to verbal command. Heart functioning and breathing is normal and unaffected .Coordination and cognitive functions can be impaired.
          </p>
          <p style={{marginBottom:"1px"}}><span style={{color:"#04abe3",fontWeight:"bold"}}>Moderate Sedation</span> in which there is depression of consciousness and the patient is forced to respond to command. Breathing and functioning of heart is not affected.
          </p>
          <p style={{marginBottom:"1px"}}><span style={{color:"#04abe3",fontWeight:"bold"}}>Deep Sedation</span> in which patient cannot be easily aroused and there is depression of consciousness. Patient responds purposefully. Breathing may be impaired, and heart functions normally.
          </p>
          <p ><span style={{color:"#04abe3",fontWeight:"bold"}}>General Anesthesia</span> in which there is complete loss of consciousness and the patient cannot be aroused. Breathing is impaired and there is the need of ventilator. Heart functioning can be impaired.
          </p>
          <h3 className="fw-bold">Who administers the sedation?</h3>
        <p>We have our anaesthetist specifically trained for dental sedation and general anaesthesia to provide sedation for our clients.
          </p>
          <h3 className="fw-bold">Does a person remember anything of the treatment?</h3>
        <p>After the treatment the patient forgets the memories of the dental clinic.
          </p>
          <h3 className="fw-bold">How safe is sedation dentistry?</h3>
        <p>Oral sedation has been used for more than 30 years. It is very safe and comfortable. Firstly the dentist checks individuals’ medical past and then he makes the patient understand how sedation will work, so that the patient feels comfortable. During the treatment the patient’s oxygen saturation, blood pressure and heart rate are monitored continuously. Dentists also have reversal agent that ends the effect of sedation within 30 seconds.
          </p>
          <h3 className="fw-bold">What are the side effects?</h3>
        <p>Side effects such as hiccups and dryness of the mouth can be felt after the treatment is over. But if one does not experience such side effects, he will be completely unaware of sedation. Sedation is very beneficial for people who face problem in getting numb.
          </p>
      </section>

      
    </div>
      
      
    </div>
  )
}

export default Sedationdentistry
