import React from "react";
import "./Orthodontics.css";
import bracesImage from "../assets/orthodonticimg.png";

const Orthodontics = () => {
  return (
    <div>
      <div className="ortho-container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="ortho-title mb-4">Dental Orthodontic Treatment</h1>
            <h3 className="ortho-subtitle">What is the meaning of orthodontics?</h3>
            <p className="ortho-text">
              It is a specialized branch of dentistry that focuses on prevention as
              well as treatment of misalignment of teeth and facial
              irregularities/abnormalities.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={bracesImage}
              alt="Braces Treatment"
              className="ortho-image rounded shadow"
            />
          </div>
        </div>

        {/* Section 2: Who Are Orthodontists */}
        <section className="mt-5">
          <h3 className="ortho-subtitle">Who are orthodontists?</h3>
          <p className="ortho-text">
            The dentist who specializes in the process of orthodontics is called
            an orthodontist. They are specially qualified and do extensive 3
            years of specialized study in orthodontic programs.
          </p>
        </section>

        {/* Section 3: Candidates */}
        <section className="mt-5">
          <h3 className="ortho-subtitle">Who are the candidates for orthodontic treatment?</h3>
          <p className="ortho-text">
            Anyone who has misaligned teeth, crowded teeth, overlapping of teeth,
            or gaps between the teeth are candidates for orthodontic treatment.
          </p>
        </section>

        {/* Section 4: Steps */}
        <section className="mt-5">
          <h3 className="ortho-subtitle">What steps are followed in orthodontic treatment?</h3>
          <ul className="ortho-list">
            <li>
              A record is made before treatment starts, which includes medical
              history, plaster models of the teeth, clinical examination, and
              photos of the teeth.
            </li>
            <li>
              Appliances are placed to adjust the teeth position. This is an
              active phase where appliances are periodically adjusted.
            </li>
            <li>
              The retention phase, where the patient wears a retainer to hold
              the new position of the teeth.
            </li>
          </ul>
        </section>

        {/* Section 5: Advantages */}
        <section className="mt-5">
          <h3 className="ortho-subtitle">What are the advantages of orthodontics?</h3>
          <p className="ortho-text">
            Orthodontics improves not only the teeth but also the facial
            structure. Aligning teeth enhances jaw functionality, reduces gum
            diseases, and boosts confidence with an attractive smile.
          </p>
        </section>

        {/* Remaining sections */}
        {/* Add similar sections with unique class names */}
      </div>
    </div>
  );
};

export default Orthodontics;
