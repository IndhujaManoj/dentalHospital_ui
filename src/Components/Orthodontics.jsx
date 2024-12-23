import React, { useState } from "react";
import bracesImage from "../assets/orthodonticimg.png";
import "./Oralandmaxillofacial.css";

const Orthodontics = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the meaning of orthodontics?",
      answer:
        "It is a specialized branch of dentistry that focuses on prevention as well as treatment of misalignment of teeth and facial irregularities/abnormalities.",
    },
    {
      question: "Who are orthodontists?",
      answer:
        "The dentist who specializes in the process of orthodontics is called an orthodontist. They are specially qualified and do extensive 3 years of specialized study in orthodontic programs.",
    },
    {
      question: "Who are the candidates for orthodontic treatment?",
      answer:
        "Anyone who has misaligned teeth, crowded teeth, overlapping of teeth, or gaps between the teeth are candidates for orthodontic treatment.",
    },
    {
      question: "What steps are followed in orthodontic treatment?",
      answer: `
        - A record is made before treatment starts, including medical history, plaster models of the teeth, clinical examination, and photos.
        - Appliances are placed to adjust the teeth position, periodically adjusted during the active phase.
        - The retention phase involves wearing a retainer to hold the new position of the teeth.`,
    },
    {
      question: "What are the advantages of orthodontics?",
      answer:
        "Orthodontics improves not only the teeth but also the facial structure. Aligning teeth enhances jaw functionality, reduces gum diseases, and boosts confidence with an attractive smile.",
    },
  ];

  return (
    <div>
      {/* Centered Image and Title */}
      <div className="text-center my-5">
        <img
          src={bracesImage}
          alt="Orthodontics Treatment"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Dental Orthodontic Treatment
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

export default Orthodontics;
