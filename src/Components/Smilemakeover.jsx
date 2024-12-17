import React from 'react';
import "./Oralandmaxillofacial.css";
import smilemakeoverimg from "../assets/smilepics.jpg";

const Smilemakeover = () => {
  return (
    <div>
      <div className="container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4" style={{ color: "#00a3ff" }}>
              Smile Makeover
            </h1>
            <h3 className="fw-bold">What is a smile makeover?</h3>
            <p>
              Smile makeover is a part of cosmetic dentistry and varies from person to person. 
              Smile makeover consists of many individual procedures such as teeth whitening, 
              straightening of teeth, repairing as well as replacement of teeth, dental bonding, 
              and porcelain veneers etc. This makeover is quite often called extreme makeover 
              as the results are so dramatic.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={smilemakeoverimg}
              alt="Smile Makeover"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Main Content Section */}
        <section className="mt-5">
          <h3 className="fw-bold">Who are the candidates?</h3>
          <p>
            People who are extremely conscious of their appearance go for such makeovers.
          </p>

          <h3 className="fw-bold">How important is smile makeover for people?</h3>
          <p>
            It is generally seen that more than 75% of the people avoid smiling when a photo 
            is being clicked. A smile makeover helps in increasing the confidence of an individual. 
            A good smile influences people psychologically, and also helps to judge people. 
            An attractive smile also has a positive impact on one's romantic life.
          </p>

          <h3 className="fw-bold">What factors should be kept in mind to get natural results?</h3>
          <p>
            Factors such as gender, age, lifestyle, and structure of the face should be taken care 
            of by the dentist before going for a smile makeover.
          </p>

          <h3 className="fw-bold">What are the procedures used for a smile makeover?</h3>
          <p>
            Procedures such as porcelain crowns, tooth whitening, bonding, porcelain veneers etc. are 
            the most common procedures used. Though the final decision depends upon the time the 
            patient can spare as well as the features they would like to change. A smile makeover can:
          </p>
          <ul className="custom-list">
            <li>Repair broken, chipped teeth by porcelain crowns, veneers and cosmetic bonding.</li>
            <li>Straighten crooked teeth.</li>
            <li>Replace missing teeth and fill gaps with dental implants, dentures, or braces.</li>
            <li>Correct a gummy smile with surgery or laser treatment.</li>
            <li>Whiten stained teeth using teeth whitening techniques.</li>
            <li>Use lumineers to fill gaps between teeth.</li>
          </ul>

          <h3 className="fw-bold">For how long does the smile last?</h3>
          <p>
            Proper maintenance of the teeth and regular checkups will help the smile makeover 
            to last for several years. The materials used for the makeover are very strong 
            and resistant to breakage and wearing. Hence, they are more durable than one’s natural teeth.
          </p>

          <h3 className="fw-bold">How many visits are required?</h3>
          <p>
            The number of visits is not fixed and varies from person to person. Everyone has 
            individual goals and expectations of the final result. Proper consultation with the 
            dentist is a must. The dentist should have a clear picture in their mind, as to what 
            your personal liking and desires are. After proper discussion, the dentist will figure 
            out the whole process and make the patient clear about the cost of the makeover 
            as well as the number of visits required.
          </p>

          <h3 className="fw-bold">What is the cost of a smile makeover?</h3>
          <p>
            The cost depends on the quality of material used by the dentist, personal skill of 
            the cosmetic dentist, and the type of clinic where the treatment is done.
          </p>

          <h3 className="fw-bold">Is the smile makeover covered under insurance?</h3>
          <p>
            Smile makeover is normally not covered under insurance as it is a cosmetic treatment 
            and is done to improve one’s appearance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Smilemakeover;
