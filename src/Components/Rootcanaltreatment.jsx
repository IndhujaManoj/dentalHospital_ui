import React from 'react';
import "./Oralandmaxillofacial.css";
import dentalbridges from "../assets/dentalbridges.png";

const RootCanaltreatment = () => { 
  return (
    <div>
      <div className="container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4" style={{ color: "#00a3ff" }}>
              Root Canal Treatment
            </h1>
            <h3 className="fw-bold">Root Canal Treatment Offers Immediate Relief</h3>
            <p>
              Do you have an abscessed tooth or a tooth that is infected? Are you in pain and need an immediate solution? It's very important to see your dentist as soon as possible so that you can get to the root of the matter and get rid of the pain and the infection. Root canal treatment, also known as endodontic therapy, can be treated by an endodontist who can restore the condition of the tooth back to normal with expertise and experience. An endodontist specializes in Endodontics, which is a branch of dentistry, and has the skill and know-how to diagnose and treat a problem that needs root canal therapy. There are many reasons for the tooth to get infected, but the main cause is bacteria which can enter a tooth or teeth through a gap, decay, a fracture, or through a filling that has broken down. As there are millions of bacteria present in the mouth, the teeth must be kept in good condition as bacteria can cause the tooth to become diseased or pathologic.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={dentalbridges}
              alt="Root Canal Treatment"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Section 2: Symptoms */}
        <section className="mt-5">
          <h3 className="fw-bold">Symptoms Requiring Root Canal Treatment</h3>
          <p>
            Root canal treatment or endodontic therapy is necessary for patients who have pain while chewing or biting food, sudden intense pain in the tooth, unexpected pain in the infected tooth that wakes them up at night, or a nagging pain. Patients who need root canal treatment may experience sensitivity to cold or hot beverages and/or foods, a tooth that is loose or shaking, or a specific tooth that is more sensitive than the others. Pain that lasts approximately four to six weeks after a filling or the replacement of a filling may also indicate the need for treatment. In some cases, patients experience pain or pressure in the region of the eyes, neck, and ears, or there may be a soft bubble or pimple on the gum that leaks out pus or blood when pressed.
          </p>
        </section>

        {/* Section 3: Efficacy of Treatment */}
        <section className="mt-5">
          <h3 className="fw-bold">The Efficacy of Root Canal Treatment</h3>
          <p>
            Root canal treatment helps the patient in many ways. Making the patient feel comfortable and at ease in the dentist's chair, the endodontist would first numb the infected area before placing a rubber dam. An opening is made to remove the infected pulp through the crown of the tooth. The canals are cleaned with small dental instruments alternated with hand-held or mechanical tools and irrigants. The endodontist shapes the canal to the required size, which is then filled with gutta-percha—a purified rubbery sap from Malaysian trees approved by the ADA—and an endodontic sealer. The cavity is filled with medication for healing and a temporary filling to allow infected liquid to drain out. Antibiotics are prescribed to quicken the healing process and prevent further infection.
          </p>
          <p>
            During the second visit, the temporary filling is replaced with a permanent one, and the tooth is recapped with a gold or porcelain crown.
          </p>
        </section>

        {/* Section 4: Benefits */}
        <section className="mt-5">
          <h3 className="fw-bold">Benefits of Root Canal Treatment</h3>
          <p>
            Retaining one’s original teeth is crucial to prevent disease and harm to the rest of the body. Root canal treatment as a beneficial therapy helps the patient retain their original teeth, preventing TMJ pain, bite problems, and movement of adjacent teeth, which can lead to harmful results.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RootCanaltreatment;

