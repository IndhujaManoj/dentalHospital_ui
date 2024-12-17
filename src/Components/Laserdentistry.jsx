import React from 'react'
import "./Oralandmaxillofacial.css"
import lazerdentimg from "../assets/laserdentistry.png"
const Laserdentistry = () => {
  return (  
    <div>
        <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{color:"#00a3ff"}}>
          Laser Dentistry
          </h1>
          <h3 className="fw-bold">What is laser dentistry?</h3>
          <p>
          Laser dentistry is an effective and precise way of performing various dental procedures .Laser dentistry has the potential to improve various dental procedures, but all depends on the personnel skill of the dentist i.e. his ability and skill to control the exposure of laser on the gum as well as the teeth surface, and control over power output. Special care is required as the laser should not damage the surrounding tissues.
          </p>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src={lazerdentimg} 
            alt="Maxillofacial Surgery"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Section 2: Oral Treatment */}
      <section className="mt-5">
        <h3 className="fw-bold">What are benefits of laser dentistry?</h3>
        <p>Some benefits of laser dentistry are:-
          </p>
          <ul className="custom-list">
          <li>
          it does not damage the surrounding tissues
          </li>
          <li>
          some laser dentistry procedures are done without anesthesia
          </li>
          <li>
          chances of bacterial infection are less because the area on which work is done is exposed to high light beam
            
          </li>
          <li>
          The procedures which use soft tissues laser do not require stitches
          </li>
          <li>
          There is very less bleeding, because high light beam results in clotting of blood which reduces blood loss.
          </li>
          <li>
          Wounds heal up faster and there is regeneration of tissues.
          </li>
        </ul>
        <h3 className="fw-bold">How does the dentist use the technique of laser dentistry?</h3>
        <p>The dentists use the  hydrophotonics technique which uses the combination of laser energy as well as spray of water that help  in performing various procedures on gums, teeth and teeth bones more easily. The laser energy is absorbed by molecules of water present in the tooth tissues. The laser energy causes a explosion because the water molecules expand which in turn moves apart the tooth particle.
          </p>
          <h3 className="fw-bold">Does laser dentistry help in curing gum diseases?</h3>
        <p>Yes, laser dentistry helps to treat gum diseases by first targeting and then vaporizing the gum tissues.Laser dentistry is very much better than the traditional procedures that cut the tissues using scalpels. Laser is used to vaporize only diseased tissues which leave the tissues healthy and free of diseases.
          </p>
          <h3 className="fw-bold">How much recovery time is required after laser gum treatment?</h3>
        <p>Laser automatically forms clots/it seals the blood vessels as well the nerve ending. One can return back to work immediately after the treatment and there is no down time. Hence it is very convenient and comfortable for the patient as there is no recovery time.
          </p>
          <h3 className="fw-bold">Is laser used for all dentistry?</h3>
        <p>Lasers reflect light with the help of a mirror hence it gets difficult /impossible to remove the silver filling i.e. amalgam filling as there are chances of fracture of mirror. The conventional drill removes the amalgam filling in first instance. Then laser is used to remove decay and the cavity that allows the placement of tooth color filling. Combination of conventional drill and laser is used for extensive works such as preparation of crown.
          </p>
          <h3 className="fw-bold">How costly is the laser therapy?</h3>
        <p>The cost factor depends on the personnel skill of the dentist i.e. how efficiently and skillfully the light energy is used, the location of the dental clinic as well as individual requirement. In some cases the laser therapy has proved to be much cheaper than gum surgeries. Some insurance companies also cover laser therapy, but this should be checked before going for the treatment.
          </p>
      </section>

      
    </div>
      
    </div>
  )
}

export default Laserdentistry
