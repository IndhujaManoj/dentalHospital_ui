import React from 'react';
import dentalcrownimg from "../assets/dentalcrowns.png";
import "./Oralandmaxillofacial.css"


const Dentalcrowns = () => {
  return (
    <div>
      <div className="container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4" style={{ color: "#00a3ff" }}>
              Dental Crowns
            </h1>
            <h3 className="fw-bold">What do you mean by dental crowns?</h3>
            <p>
              Dental crown works like a cap which is tooth-shaped and is placed over the teeth. It covers the teeth and restores its shape, strength, size and moreover improves one's appearance. A crown is cemented over the gum line, and it covers the whole tooth, making it completely invisible.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={dentalcrownimg}
              alt="Dental Crowns"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Section 2: Why Crowns Are Required */}
        <section className="mt-5">
          <h3 className="fw-bold">Why do we require dental crowns?</h3>
          <p>Dental crowns have many uses such as:</p>
          <ul className="custom-list">
            <li>To safeguard a weak tooth from breaking</li>
            <li>To hold the parts of cracked/chipped tooth</li>
            <li>To support and cover the tooth which has a lot of filling and the tooth is hardly left</li>
            <li>To keep the dental bridges in place</li>
            <li>To cover discolored/badly shaped teeth</li>
            <li>To restore a broken tooth/worn-down tooth</li>
            <li>Crown covers a dental implant</li>
          </ul>
        </section>

        {/* Section 3: Types of Crowns */}
        <section className="mt-5">
          <h3 className="fw-bold">What type of crowns is available?</h3>
          <p>Crowns are available in different materials such as:</p>
          <ul className="custom-list">
            <li>
              <strong>METALS:</strong> In case of metal crowns, less tooth is reduced, and reduction of adjacent teeth is minimum. Such crowns are very strong and withstand chewing and biting pressure. Metal crowns do not crack or break. Alloy of gold, palladium, and nickel are used in case of metal crowns. The only drawback of metal crowns is the color. These crowns are best suited for out-of-sight teeth/molars.
            </li>
            <li>
              <strong>FUSION OF PORCELAIN AND METAL:</strong> These crowns can match the color of the teeth. As compared to metal crowns, more wearing of teeth is required. The porcelain may break/crack. But such crowns look like natural teeth. Sometimes the metal placed under the crown is visible at the gum line; hence these crowns are suitable for back/front teeth.
            </li>
            <li>
              <strong>ALL RESIN:</strong> These crowns are not so expensive, but there are chances of wearing down over time.
            </li>
            <li>
              <strong>ALL PORCELAIN/CERAMIC:</strong> These crowns are best for the front teeth and suitable for people who are allergic to metal. Though not so strong, they match the color of the natural teeth.
            </li>
            <li>
              <strong>TEMPORARY AND PERMANENT CROWNS:</strong> Temporary crowns are made in the dental clinic, whereas the permanent crowns are specially made on orders in the laboratory. Material used for temporary crowns is stainless steel or acrylic. Temporary crowns can be used till the time the permanent crown is ready.
            </li>
          </ul>
        </section>

        {/* Section 4: Longevity of Crowns */}
        <section className="mt-5">
          <h3 className="fw-bold">How long does the crown last?</h3>
          <p>
            Dental crowns have a life of say 5-15 years. One has to take extra care of the crown. Biting nails, opening packets, chewing hard things, etc., are a few habits which have to be corrected. Moreover, brushing teeth twice a day is a must and flossing at least once a day.
          </p>
        </section>

        {/* Section 5: Problems with Crowns */}
        <section className="mt-5">
          <h3 className="fw-bold">What problems can one face with crowns?</h3>
          <p>Some common problems associated with dental crowns include:</p>
          <ul className="custom-list">
            <li>Teeth may be sensitive to hot/cold after the effect of anesthesia is over.</li>
            <li>
              There can be irregular bites which result in pain. Such problems occur when the crown is placed too low or too high.
            </li>
            <li>
              Sometimes the cement under the crown gets washed away, and the crown becomes loose.
            </li>
          </ul>
          <p>
            Hence, proper care should be taken, and regular dental checkups are required to maintain a healthy dental structure.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Dentalcrowns;
