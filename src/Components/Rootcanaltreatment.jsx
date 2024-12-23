import React, { useState } from "react";
import "./Oralandmaxillofacial.css";
import dentalbridges from "../assets/dentalbridges.png";

const RootCanalTreatment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Root Canal Treatment?",
      answer:
        "Root canal treatment, also known as endodontic therapy, is a procedure to treat and save a tooth that is infected or badly decayed. An endodontist specializes in diagnosing and treating problems requiring root canal therapy.",
    },
    {
      question: "What are the symptoms requiring Root Canal Treatment?",
      answer:
        "Symptoms include pain while chewing, sensitivity to hot or cold, nagging tooth pain, swelling, or a pimple-like bump on the gums that leaks pus or blood when pressed.",
    },
    {
      question: "How is Root Canal Treatment performed?",
      answer:
        "The endodontist numbs the area, removes infected pulp through an opening in the tooth, cleans the canals, fills them with gutta-percha, and seals the tooth. Antibiotics may be prescribed, and a crown is usually placed in a subsequent visit.",
    },
    {
      question: "What are the benefits of Root Canal Treatment?",
      answer:
        "The procedure allows patients to retain their natural teeth, preventing issues such as TMJ pain, bite problems, and adjacent tooth movement, which could lead to more significant oral health concerns.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="text-center my-5">
        <img
          src={dentalbridges}
          alt="Root Canal Treatment"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Root Canal Treatment
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

export default RootCanalTreatment;
