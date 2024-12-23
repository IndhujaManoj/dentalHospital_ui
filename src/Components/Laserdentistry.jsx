import React, { useState } from "react";
import "./Oralandmaxillofacial.css";
import lazerdentimg from "../assets/laserdentistry.png";

const Laserdentistry = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is laser dentistry?",
      answer:
        "Laser dentistry is an effective and precise way of performing various dental procedures. It depends on the skill of the dentist to control the exposure of laser on the gum as well as the teeth surface, and control over power output. Special care is required as the laser should not damage the surrounding tissues.",
    },
    {
      question: "What are the benefits of laser dentistry?",
      answer: (
        <ul className="custom-list">
          <li>It does not damage the surrounding tissues.</li>
          <li>Some laser dentistry procedures are done without anesthesia.</li>
          <li>Chances of bacterial infection are less because the area on which work is done is exposed to a high light beam.</li>
          <li>The procedures which use soft tissues laser do not require stitches.</li>
          <li>There is very less bleeding, as the high light beam results in clotting of blood which reduces blood loss.</li>
          <li>Wounds heal faster and there is regeneration of tissues.</li>
        </ul>
      ),
    },
    {
      question: "How does the dentist use the technique of laser dentistry?",
      answer:
        "Dentists use the hydrophotonics technique which combines laser energy and a spray of water to perform various procedures on gums, teeth, and teeth bones. The laser energy is absorbed by water molecules in the tooth tissues, causing an explosion that moves apart the tooth particles.",
    },
    {
      question: "Does laser dentistry help in curing gum diseases?",
      answer:
        "Yes, laser dentistry helps to treat gum diseases by targeting and vaporizing the gum tissues. It is better than traditional procedures that cut tissues using scalpels. Laser vaporizes only diseased tissues, leaving healthy tissues intact.",
    },
    {
      question: "How much recovery time is required after laser gum treatment?",
      answer:
        "Laser automatically forms clots and seals blood vessels as well as nerve endings. One can return to work immediately after the treatment, with no downtime required, making it very convenient for patients.",
    },
    {
      question: "Is laser used for all dentistry?",
      answer:
        "Lasers reflect light with the help of a mirror, making it difficult to remove silver (amalgam) fillings as there is a chance of mirror fracture. The conventional drill is used to remove amalgam fillings, after which laser can remove decay and the cavity for placing tooth-colored fillings. A combination of conventional drill and laser is used for extensive work like crown preparation.",
    },
    {
      question: "How costly is the laser therapy?",
      answer:
        "The cost depends on the skill of the dentist, the clinic's location, and individual requirements. In some cases, laser therapy is cheaper than gum surgeries. Some insurance companies may cover laser therapy, so it's best to check before undergoing treatment.",
    },
  ];

  return (
    <div>
      {/* Centered Image and Title */}
      <div className="text-center my-5">
        <img
          src={lazerdentimg}
          alt="Laser Dentistry"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Laser Dentistry
        </h1>
      </div>

      {/* FAQ Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Have Some Questions?</h2>
        <div className="faq">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""} mb-3`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question d-flex justify-content-between align-items-center p-3">
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer p-3">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laserdentistry;