import React, { useState } from "react";
import "./Oralandmaxillofacial.css";
import dentalbridges from "../assets/dentalbridges.png";

const Dentalbridges = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are dental bridges & when are they used?",
      answer:
        "Dental bridges are used in case of a missing tooth. They are false teeth, also called pontics, that fill the gap created by missing teeth. This reduces dental problems, tooth drift, and gum diseases. Unlike removable dentures, dental bridges are permanent and are anchored to adjacent teeth using metal bands, cement, or resin.",
    },
    {
      question: "What type of material is used for dental bridges?",
      answer:
        "Materials used include porcelain, gold fused with metal, or sometimes only porcelain. The choice of material affects the teeth preparation process.",
    },
    {
      question: "What are the types of bridges used?",
      answer: (
        <>
          <p>There are three main types of dental bridges:</p>
          <ul className="custom-list">
            <li>
              <strong>Fixed Bridges:</strong> Fill gaps anywhere in the mouth. False teeth are anchored to crowns on adjacent teeth.
            </li>
            <li>
              <strong>Cantilever Bridges:</strong> Suitable when there is only one healthy tooth on one side of the gap. Commonly used for front teeth.
            </li>
            <li>
              <strong>Resin-Bonded Bridges:</strong> Ideal for less stressed teeth like front teeth. The bridge is attached with metal bands and resin, requiring minimal alteration to adjacent teeth.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "How can the bridge be fitted?",
      answer:
        "The process usually requires 2-3 visits. During the first visit, the dentist prepares the adjacent teeth and takes a mold for the bridge. In subsequent visits, the bridge is fitted and adjusted until comfortable before being permanently fixed.",
    },
    {
      question: "What type of care is required after the bridge is fitted?",
      answer:
        "Maintaining strict dental hygiene is essential. Debris can accumulate beneath the bridge and in gaps, requiring regular cleaning and flossing. Special tools are available to clean awkward areas, and your dentist can guide you in their use.",
    },
    {
      question: "What is the cost involved?",
      answer:
        "The cost depends on the type of material used and the number of visits required.",
    },
    {
      question: "What is the alternative to dental bridges?",
      answer: "Alternatives to dental bridges include dentures and implants.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="text-center my-5">
        <img
          src={dentalbridges}
          alt="Dental Bridges"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Dental Bridges
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

export default Dentalbridges;
