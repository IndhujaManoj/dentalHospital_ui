import React, { useState } from "react";
import dentalveneers from "../assets/dentalveneers.png";
import "./Oralandmaxillofacial.css";

const Dentalveneers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are dental veneers?",
      answer:
        "Veneers are laminates made up of ceramic, porcelain, composite bonding materials. They are very thin like a wafer and are bonded over the visible portion of the teeth to enhance the appearance. Dentists use them to correct misaligned teeth, discolored teeth, and worn-out enamel. Veneers are suitable for people who like to improve the aesthetics of teeth.",
    },
    {
      question: "What are the advantages of veneers?",
      answer:
        "Veneers last for a long time and require very little tooth preparation. They look very natural and healthy.",
    },
    {
      question: "How long can veneers last?",
      answer:
        "Dental veneers can last for 10 to 15 years (or even more). After that, they need replacement. Proper care and maintenance are required to ensure they continue to provide an attractive smile for years.",
    },
    {
      question: "What kind of tooth preparation is involved?",
      answer:
        "For a strong bond between the teeth and the veneer, the enamel has to be reduced. The dentist reduces the enamel, takes an impression of the teeth, and sends it to the lab where the veneer is made. The thickness of the veneer is the same as the amount of enamel reduced, ensuring the veneer looks natural and matches the surrounding teeth.",
    },
    {
      question: "Is the process of attaching veneers painful?",
      answer:
        "Patients do not experience any pain, but there is some discomfort when the enamel is reduced. Anesthesia is applied before reshaping the teeth, but there is no pain when the veneer is attached. Sensitivity to cold or hot can be felt after the veneer is fitted.",
    },
    {
      question: "What are the alternatives to veneers?",
      answer:
        "Dental veneers are used for aesthetic enhancement. However, they are not suitable for repairing or straightening teeth. In such cases, dental crowns are the best option. An alternative to dental veneers is LUMINEERS, which are removable and provide an artificial coating to the teeth.",
    },
    {
      question: "How many visits are required?",
      answer:
        "Dental veneers require several visits. In the first visit, the dentist examines the teeth, discusses the procedure, and estimates the cost. In the second visit, tooth preparation is done, and an impression is taken. After 2-3 weeks, the veneer is prepared and bonded to the teeth with a special light that activates the cement. Finally, the dentist polishes the teeth.",
    },
    {
      question: "How to take care of veneers once placed?",
      answer:
        "Proper dental hygiene should be maintained. Brush twice a day, and visit the dentist regularly to keep veneers in good shape. Some dentists recommend polishing the veneer annually. Avoid biting hard objects and grinding your teeth.",
    },
  ];

  return (
    <div>
      {/* Centered Title and Image */}
      <div className="text-center my-5">
        <img
          src={dentalveneers}
          alt="Dental Veneers"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Dental Veneers
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

export default Dentalveneers;
