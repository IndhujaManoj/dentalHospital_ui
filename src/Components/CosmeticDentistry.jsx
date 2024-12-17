import React from "react";
import "./Oralandmaxillofacial.css";
import cosmeticImage from "../assets/cosmeticdentistry.png";

const CosmeticDentistry = () => {
  return (
    <div>
         <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{color:"#00a3ff"}}>
          Cosmetic Dentistry
          </h1>
          <h3 className="fw-bold">What is the meaning of the term cosmetic dentistry?</h3>
          <p>
          Cosmetic dentistry is the branch of science which works on enhancing the appearance of the teeth. It improves aesthetics of one’s teeth by using various techniques such as teeth whitening, dental veneers, invisalign, tmj treatment. Moreover cosmetic dentistry helps to keep good oral hygiene and healthy teeth.
          </p>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src={cosmeticImage} 
            alt="Maxillofacial Surgery"
            className="img-fluid rounded shadow"
            
          />
        </div>
      </div>

      {/* Section 2: Oral Treatment */}
      <section className="mt-1">
        <h3 className="fw-bold">What is invisalign?</h3>
        <p>
        Invisalign is one of the techniques of cosmetic dentistry in which braces are used to align the teeth, but they are not visible. Conventional braces were visible and affected the smile. The invisible braces solves both the purpose, firstly they align the teeth and are not visible which improves ones appearance and makes the smile attractive.
        </p>
      </section>

      {/* Section 3: Treatments */}
      <section className="mt-1">
        <h3 className="fw-bold">
        What are teeth whitening?
        </h3>
        <p>Sometimes due to bad eating habits , consumption of alcohol, smoking, intake of fluoride, red wine, colorful beverages etc causes discoloration of teeth. Stained teeth hamper ones appearance and smile. With the help of teeth whitening technique the impurities are oxidized. Hard stains are difficult to remove with brush, but they need proper treatment in which the oxidizing agents come in contact with the teeth. Special care should be taken as oxidizing agents are harmful for the gums. A qualified and a skilled doctor can only perform this technique.</p>
        <h3 className="fw-bold">
        What are veneers?
        </h3>
        <p>Veneers are a thin layer made of porcelain which is bonded to the front of the teeth by reducing the enamel. Veneer is wafer like and it matches the color of the surrounding teeth. It helps to conceal deformed/chipped teeth or yellow teeth. It is a technique to improve one’s appearance and get an attractive smile.</p>
        <h3 className="fw-bold">
        What is TMJ treatment?
        </h3>
        <p>It is a technique of cosmetic dentistry used to improve/correct facial shape.</p>
        <h3 className="fw-bold">
        Do cosmetic dentistry procedures require sedation?
        </h3>
        <p>Yes, cosmetic dentistry requires sedation but the level required is governed by various factors such as, the procedure used, personnel health& pre medical history and how familiar the dentist is with sedation.</p>
        <h3 className="fw-bold">
        Can cosmetic dentistry procedures be performed on people who smoke?
        </h3>
        <p>Smoking is not good for teeth; people who smoke have the problem of gum diseases, oral, throat, lung cancer, loss of dental bone structure etc. Smokers have problem in dental implant as gums are unhealthy and there is failure in integration with gum tissues. One should quit smoking before going for dental implant .Teeth whitening also loses its impact if a person continues to smoke.</p>
        <h3 className="fw-bold">
        Are cosmetic dentistry procedures suitable for children/teenagers?
        </h3>
        <p>Children and teenagers want to look good and attractive; this improves their confidence and self esteem. If there is some specific problem cosmetic dentistry procedures can be performed, but some factors should be kept in mind such as age of the child and time of teeth formation and development of arch. Children should consult a dentist who can guide them properly.</p>
        <h3 className="fw-bold">
        What are the advantages of cosmetic dentistry?
        </h3>
        <p>Cosmetic dentistry has improved the way the people live; their quality of life has become better. By enhancing ones appearance a person feels confidence and this boosts his self esteem. People feel social humiliation if they have a bad set of teeth, but cosmetic dentistry solves the problem of ugly teeth by using various techniques.</p>
      </section>

      
    </div>
      
    </div>
  );
};

export default CosmeticDentistry;
