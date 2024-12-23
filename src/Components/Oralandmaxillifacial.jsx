import React, { useState } from "react";
import "./Oralandmaxillofacial.css";
import oralmax from "../assets/oral-maxio.png";

const Oralandmaxillofacial = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the meaning of maxillofacial?",
      answer:
        "Maxillofacial means jaws and face, which combines with mouth becomes the domain/area of specialization of oral and maxillofacial surgeon.",
    },
    {
      question: "What is oral treatment/surgery?",
      answer:
        "This is a branch of dentistry which deals in diagnosing and surgically treating injuries, diseases, defects of jaws, mouth, face etc. This includes dental implants, removing decayed teeth, biopsy, and treating facial trauma and jaw reconstruction.",
    },
    {
      question:
        "What treatment/procedures are followed by oral and maxillofacial surgeon?",
      answer: `
        - Placement of dental implants to replace missing teeth.
        - Reconstructive surgery for trauma and injuries.
        - Treatment of maxillofacial infections.
        - Treating injuries to face, teeth, and jaws.
        - Corrective surgeries for deformities or congenital disorders.
        - Facial cosmetic procedures.`,
    },
    {
      question: "Does the treatment require x-rays?",
      answer:
        "Yes, x-rays are always taken before the treatment begins as they provide a clear picture of the disorder in the teeth or the bones.",
    },
  ];

  return (
    <div>
      {/* Centered Image and Title */}
      <div className="text-center my-5">
        <img
          src={oralmax}
          alt="Oral and Maxillofacial Surgery"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Oral and Maxillofacial
        </h1>
      </div>

      {/* FAQ Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Have Some Questions?</h2>
        <div className="faq">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              } mb-3`}
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

export default Oralandmaxillofacial;
