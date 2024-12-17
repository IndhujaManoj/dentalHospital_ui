import React from 'react'
import dentalveneers from "../assets/dentalveneers.png"


const Dentalveneers = () => {
  return (
    <div>
        <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{color:"#00a3ff"}}>
          Dental Veneers
          </h1>
          <h3 className="fw-bold">What are dental veneers?</h3>
          <p>
          Veneers are laminates made up of ceramic, porcelain, composite bonding materials. They ate very thin like a wafer and are bonded over the visible portion of the teeth to enhance the appearance. Dentist use it to correct misaligned teeth, discolored teeth and worn out enamel. Veneers are suitable for people who like to improve aesthetics of teeth.
          </p>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src={dentalveneers} 
            alt="Maxillofacial Surgery"
            className="img-fluid rounded shadow"
            
          />
        </div>
      </div>

      {/* Section 2: Oral Treatment */}
      <section className="mt-5">
        <h3 className="fw-bold">What are the advantages of veneers?</h3>
        <p>
        Veneers last for a long time and moreover they require very little tooth preparation. They look very natural and healthy.
        </p>
      </section>

      {/* Section 3: Treatments */}
      <section className="mt-5">
        <h3 className="fw-bold">
        How long can veneers last?
        </h3>
        <p>Dental veneers can last for say 10 to 15 years (or even more), after that they need replacement. Veneers need proper care and maintenance, only then they will continue to give an attractive smile for years.</p>
        <h3 className="fw-bold">
        What kind of tooth preparation is involved?
        </h3>
        <p>For a strong bond between the teeth and the veneer the enamel has to be reduced. The dentist reduces the enamel and takes the impression of the teeth, and then it is sent to the lab where the veneer is made. The thickness of the veneer is same as the amount of veneer reduced. Hence the veneer looks very natural, as its color is made identical to the surrounding teet.</p>
        <h3 className="fw-bold">
        Is the process of attaching veneer painful?
        </h3>
        <p>Patient does not experience any pain, but there is some amount of discomfort when the enamel is reduced .The dentist gives an anesthesia before filing and reshaping the teeth, but there is no pain when the veneer is attached. Sensitivity to cold/ hot can be felt after the veneer is fitted.</p>
        <h3 className="fw-bold">
        What are the alternatives to veneers?
        </h3>
        <p>Dental veneers are used to enhance the appearance of an individual, it is the part of cosmetic dentistry .In case of repairing of teeth, straightening of teeth veneers are not suitable and dental crowns is the best choice .An alternative to dental veneers is LUNINEERS .They are removable and provides artificial coating to the teeth.</p>
        <h3 className="fw-bold">
        How many visits are required?
        </h3>
        <p>Dental veneers require a number of visits. In the first visit the patient consults the dentist, wherein the dentist examines the teeth, discusses the entire procedure to be performed as well as estimates the cost of the whole process. In the second visit tooth preparation is done .The dentist numbs the teeth which has to be reduced. After teeth is prepared an impression is taken with the help of dental wax/ putty. The impression/mould is sent to the laboratory where the veneer is created.After2/3 weeks the veneer is prepared and then it is bonded to the teeth (after proper cleaning of the teeth) with the help of a special light that activates the cement. Lastly the dentist will polish the teeth.</p>
        <h3 className="fw-bold">
        How to take care once a veneer is placed?
        </h3>
        <p>Proper dental hygiene should be maintained. Brushing twice a day is a must; regular visit to the dentist will keep veneers in good shape. Some dentist recommends regular polishing of the veneer within a year. Biting hard objects as well as grinding of teeth should be avoided.</p>
      </section>

      
    </div>
      
    </div>
  )
}

export default Dentalveneers
