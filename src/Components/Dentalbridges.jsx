import React from 'react';
import "./Oralandmaxillofacial.css";
import dentalbridges from "../assets/dentalbridges.png";

const Dentalbridges = () => {
  return (
    <div>
      <div className="container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4" style={{ color: "#00a3ff" }}>
              Dental Bridges
            </h1>
            <h3 className="fw-bold">What are dental bridges & when are they used?</h3>
            <p>
              Dental bridges are used in case of a missing tooth. They are false teeth, also called pontics. Dental bridges fill up the gap created by missing teeth, which helps in reducing dental problems, tooth drift, and gum diseases. Traditionally, removable dentures were used, which were not permanent, but dental bridges are permanent as they are anchored to the teeth with the help of metal bands held by cement or resin.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={dentalbridges}
              alt="Dental Bridges"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Section 2: Materials */}
        <section className="mt-5">
          <h3 className="fw-bold">What type of material is used for dental bridges?</h3>
          <p>
            Materials used include porcelain, gold fused with metal, or in many situations, only porcelain is used. The type and amount of teeth reduction depend on the type of materials used.
          </p>
        </section>

        {/* Section 3: Types of Bridges */}
        <section className="mt-5">
          <h3 className="fw-bold">What are the types of bridges used?</h3>
          <p>
            Three types of bridges are used: fixed, cantilever, and resin-bonded bridges. Two main factors decide the type of bridge to be used: the positioning of the gap and the teeth situated on either side of the gap.
          </p>

          <h4 className="fw-bold">Fixed Bridges</h4>
          <p>
            These bridges fill up the gap anywhere in the mouth. In this, a false tooth is anchored to a new crown, which is attached to the teeth situated on either side of the gap. Crowns are made of porcelain, and the new teeth are made up of porcelain or ceramic.
          </p>

          <h4 className="fw-bold">Cantilever Bridges</h4>
          <p>
            These dental bridges are used when there is only one healthy tooth on one side of the gap. This bridge is anchored to one or more teeth on one side only. Such bridges are suitable for front teeth, i.e., low-stress bridges.
          </p>

          <h4 className="fw-bold">Resin-Bonded Bridges</h4>
          <p>
            These bridges do not require crowning of the adjacent teeth, hence are appropriate where there is little or no damage. The new tooth is made of plastic and is attached with the help of metal bands to adjacent teeth through resin. Such bridges are well-suited for less stressed teeth, such as front teeth, where the bonding can be done behind the teeth, making the bridge out of view.
          </p>
        </section>

        {/* Section 4: Fitting Process */}
        <section className="mt-5">
          <h3 className="fw-bold">How can the bridge be fitted?</h3>
          <p>
            Bridges require at least 2-3 visits to the dentist. In the first visit, space is made for the new crown. This preparatory work is done for a fixed bridge. The dentist takes a mold of the teeth with the help of which the bridge is made. In the second visit, the bridge is fitted, and it is adjusted to get a correct bite. Once the patient is comfortable with the bridge, it is permanently fixed.
          </p>
        </section>

        {/* Section 5: Post-Fitting Care */}
        <section className="mt-5">
          <h3 className="fw-bold">What type of care is required after the bridge is fitted?</h3>
          <p>
            A strict dental hygiene regime has to be followed. Debris can get accumulated, as there is a gap between and beneath the bridge, i.e., the false teeth. The adjacent teeth require special care as the bridge rests on them. If regular cleaning and flossing are not done, the teeth may fall off. Special tools are available to clean awkward areas, and the dentist can help you use them.
          </p>
        </section>

        {/* Section 6: Alternatives and Costs */}
        <section className="mt-5">
          <h3 className="fw-bold">What is the cost involved?</h3>
          <p>
            The cost depends on the type of material used and the number of visits required.
          </p>

          <h3 className="fw-bold">What is the alternative to dental bridges?</h3>
          <p>
            An alternative to bridges is dentures or implants.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Dentalbridges;
