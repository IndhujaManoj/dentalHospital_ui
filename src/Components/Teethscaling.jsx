import React from 'react';
import teethscale from "../assets/teethscaling.png";
import "./Oralandmaxillofacial.css"

const Teethscaling = () => {
  return (
    <div>
      <div className="container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4" style={{ color: "#00a3ff" }}>
              Teeth Scaling
            </h1>
            <h3 className="fw-bold">What is teeth scaling and why is it required?</h3>
            <p>
              Scaling is a treatment which cleans teeth by removing food particles (which are present in the teeth as well as the gums), tartar, and external stains which are difficult to remove while brushing. Scaling is a regular procedure and it does not affect one's teeth; in fact, it cleans teeth and maintains dental hygiene. No anesthesia is required in this process. Calculus/tartar gets deposited between the teeth and the gums, which causes tooth fall and unhealthy gums over a period of time. Hence, scaling helps to maintain healthy teeth.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={teethscale}
              alt="Teeth Scaling"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Section 2: Calculus/Tartar */}
        <section className="mt-5">
          <h3 className="fw-bold">What is calculus/tartar?</h3>
          <p>
            Plaque is a sticky, soft, colorless deposit of food particles and bacteria on the teeth. Such bacteria multiply very fast and lead to gum infection and bleeding of gums. Bacteria can be removed by brushing of teeth, but after 11-14 hours of brushing, these bacteria form calculus. Calculus cannot be removed by brushing and requires teeth scaling.
          </p>
        </section>

        {/* Section 3: Myths about Scaling */}
        <section className="mt-5">
          <h3 className="fw-bold">What are the myths about teeth scaling?</h3>
          <p>
            People have some doubts/negative views about scaling. There are certain myths such as:
          </p>
          <ul className="custom-list">
            <li>The gap between the gums and the teeth increases</li>
            <li>Teeth become weak and shaky</li>
            <li>Teeth become sensitive</li>
          </ul>
          <p>
            There are a few scientific reasons that go against these myths:
          </p>
          <ul className="custom-list">
            <li>
              Some feel that scaling results in gaps between teeth, which is wrong. The gap can be seen because the tartar between the teeth gets cleaned up during scaling.
            </li>
            <li>
              Some feel that the teeth become shaky, but according to scientists, tartar has a negative impact on the natural bonding/attachment of the teeth and gums. Teeth that are already shaky are held by tartar, and when scaling is done, the teeth seem shaky.
            </li>
            <li>
              When the tartar gets removed, the area gets exposed, which causes mild sensitivity, but this goes away in 1-2 days. Hence, the teeth become healthy after scaling.
            </li>
          </ul>
        </section>

        {/* Section 4: Instruments Used */}
        <section className="mt-5">
          <h3 className="fw-bold">What instruments are used for scaling?</h3>
          <p>
            There are 2 types of instruments used, i.e., hand-held and ultrasonic instruments. Some dentists rely on personal touch to identify tartar, plaque, and rough spots, and they use curettes/dental scalers to remove the plaque manually.
          </p>
          <p>
            Ultrasonic instruments have a metal tip that vibrates and chips off tartar, along with a water spray to wash away the tartar and keep the metal tip cool.
          </p>
        </section>

        {/* Section 5: Procedure */}
        <section className="mt-5">
          <h3 className="fw-bold">What procedure is adopted for scaling?</h3>
          <p>
            Scaling removes tartar/calculus that gets accumulated on the teeth by cleaning the teeth below and above the gum line. Various instruments are used for this purpose, but mostly ultrasonic machines are used. They vibrate and have a fine tip that removes tartar from the surface of the teeth. This machine is completely safe and does not affect the tooth surface. After scaling, the dentist will call you to see the improvement in the teeth. Dentists recommend cleaning of teeth every 6 months.
          </p>
        </section>

        {/* Section 6: Frequency of Scaling */}
        <section className="mt-5">
          <h3 className="fw-bold">How often is scaling required?</h3>
          <p>
            One should visit the dentist every six months. The dentist can check the teeth and advise you if scaling is required or not. People who have dental plaque should go for scaling every six months.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Teethscaling;
