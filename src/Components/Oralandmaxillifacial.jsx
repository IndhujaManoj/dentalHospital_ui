import React from 'react'
import "./Oralandmaxillofacial.css"
import oralmax from "../assets/oral-maxio.png"

const Oralandmaxillifacial = () => {
  return (
    <div>
        <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{color:"#00a3ff"}}>
            Oral and Maxillofacial
          </h1>
          <h3 className="fw-bold">What is the meaning of maxillofacial?</h3>
          <p>
            Maxillofacial means jaws and face, which combines with mouth becomes
            the domain/area of specialization of oral and maxillofacial surgeon.
          </p>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src={oralmax} 
            alt="Maxillofacial Surgery"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Section 2: Oral Treatment */}
      <section className="mt-5">
        <h3 className="fw-bold">What is oral treatment/surgery?</h3>
        <p>
          This is a branch of dentistry which deals in diagnosing and surgically
          treating injuries, diseases, defects of jaws, mouth, face etc. This
          also includes dental implants, removing decayed teeth, biopsy and
          taking of cysts as well as tumors of jaw and mouth, treating facial
          trauma and jaw reconstruction.
        </p>
      </section>

      {/* Section 3: Treatments */}
      <section className="mt-5">
        <h3 className="fw-bold">
          What treatment/procedures are followed by oral and maxillofacial
          surgeon?
        </h3>
        <ul className="custom-list">
          <li>
            Placement of dental implants which replaces single/several teeth as
            well as entire teeth in the mouth. Dental implants are very
            comfortable and last for a long time than the conventional dentures.
          </li>
          <li>
            Reconstructive surgery which addresses injuries in lower, upper jaws
            of the soft and hard tissues which are the result of trauma,
            accident, long time of wearing dentures, tumor surgery.
          </li>
          <li>
            Treatment of maxillofacial infections. Such infections are
            diagnosed and then treated as they are very dangerous and can cause
            severe emergencies if not treated properly, timely, and effectively.
          </li>
          <li>
            Treating injuries to face, teeth, mouth, jaws caused because of
            trauma. Surgeons are expert to treat trauma which also includes
            upper and lower fractures of the jaws and orbit.
          </li>
          <li>
            Surgeries to correct facial and oral deformities due to difference
            in the skeletal growth between lower and upper jaws, congenital
            disorders (such as palate, cleft lip).
          </li>
          <li>
            Surgeons are capable of reconstructing facial structure, hence can
            perform facial cosmetic procedures in their office.
          </li>
        </ul>
      </section>

      {/* Section 4: X-rays */}
      <section className="mt-5">
        <h3 className="fw-bold">Does the treatment require x-rays?</h3>
        <p>
          X-rays are always taken before the treatment begins as it gives a
          clear picture of the disorder in the teeth or the bones.
        </p>
      </section>
    </div>
      
    </div>
  )
}

export default Oralandmaxillifacial
