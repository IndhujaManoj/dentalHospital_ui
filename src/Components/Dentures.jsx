import React, { useState } from "react";
import denturesImage from "../assets/dentures.png";
import "./Oralandmaxillofacial.css";

const Dentures = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are dentures?",
      answer:
        "Dentures are constructed by the dentist to replace the missing teeth. They are also called false teeth and get support from the surrounding hard/soft tissues of the oral cavity. Dentures used earlier were removable, but now dentures are available in different designs. Dentures are of two types: dentures replacing missing teeth on maxillary or mandibular arches.",
    },
    {
      question: "What are the advantages of dentures?",
      answer: (
        <ul className="custom-list">
          <li>Replace teeth in edentulous areas, making it easier to chew food.</li>
          <li>Enhance appearance, boosting self-esteem and confidence.</li>
          <li>Improve facial structure by supporting cheeks and lips.</li>
          <li>Enable better speech by filling the gaps created by missing teeth.</li>
        </ul>
      ),
    },
    {
      question: "What are the different types of dentures available?",
      answer: (
        <>
          <p>There are two main types of dentures:</p>
          <ul className="custom-list">
            <li>
              <strong>Complete Dentures:</strong> Used when there are no teeth in a single arch (upper or lower).
            </li>
            <li>
              <strong>Removable Partial Dentures:</strong> Used for patients with some missing teeth. Bridges and crowns are referred to as fixed partial dentures, which are more stable and expensive.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Is it difficult to eat after putting dentures?",
      answer:
        "Initially, eating requires practice. Start with soft foods cut into small bites. Chew using both sides to avoid denture tipping. Gradually increase food quantity but avoid chewing hard or hot food and biting hard objects.",
    },
    {
      question: "How to take care of the denture?",
      answer:
        "Clean dentures regularly as plaque or tartar can accumulate. Brush after every meal and avoid bleaching agents as they can discolor the acrylic gum line.",
    },
    {
      question: "Is denture adhesive a solution to old/loose dentures?",
      answer:
        "Denture adhesive provides extra retention for well-fitted dentures but should not be used for loose ones. Loose dentures can cause irritation and sores. Consult a dentist for replacement or realignment.",
    },
    {
      question: "What is the life of dentures?",
      answer:
        "Dentures can last 5 to 10 years. Gums and teeth continue to change shape throughout life, but dentures remain static, requiring adjustments or replacement after a few years. Regular dental checkups are recommended.",
    },
    {
      question: "What factors determine the cost of dentures?",
      answer:
        "The cost depends on the dentist's skill, the type of dentures, and the clinic's location. As dentures are in demand, competitive pricing is available.",
    },
  ];

  return (
    <div>
      {/* Centered Title and Image */}
      <div className="text-center my-5">
        <img
          src={denturesImage}
          alt="Dentures"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Dentures
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
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
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

export default Dentures;
