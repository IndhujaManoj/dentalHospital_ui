import React, { useState } from "react";
import Teethwhitenimg from "../assets/teethwhitening.png";
import "./Oralandmaxillofacial.css";

const TeethWhitening = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is teeth whitening?",
      answer:
        "Teeth whitening is a process of removing stains that stick on to the enamel. It is a bleaching process used to get rid of the discoloration of the teeth. There are different ways of teeth whitening, including bleaching sessions at the dental clinic, over-the-counter products, and cosmetic treatments. Teeth whitening is not permanent, though the results are effective and noticeable. It requires proper care and oral hygiene.",
    },
    {
      question: "What are tooth stains?",
      answer:
        "There are 2 types of staining of teeth: extrinsic and intrinsic staining. Extrinsic stains appear on the surface of the teeth due to exposure to dark-colored beverages, tobacco, and food. Intrinsic stains result from aging, trauma, or exposure to excessive fluoride during tooth formation. Cosmetic dentistry has made it possible to remove deep intrinsic stains with professional treatments.",
    },
    {
      question: "What causes stains?",
      answer:
        "Various factors cause stains, such as aging, eating habits, smoking, drug consumption during tooth formation, and grinding of teeth. Over time, these factors lead to stubborn and sometimes permanent discoloration.",
    },
    {
      question: "What are the teeth whitening options available?",
      answer:
        "There are three main options: In-Office Whitening, Take-Home Whitening Kits, and Over-the-Counter Kits. In-office treatments use a high concentration of peroxide gel for quick results. Take-home kits provide gradual results using custom trays. Over-the-counter kits are convenient but may not whiten the entire smile.",
    },
    {
      question: "What are the risks involved?",
      answer:
        "Bleaching can cause temporary sensitivity to hot/cold, touch, and pressure. Gum irritation may also occur but typically lasts for a week. Additionally, crowns, veneers, and restorations are not affected by bleaching, which can result in uneven whitening.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="text-center my-5">
        <img
          src={Teethwhitenimg}
          alt="Teeth Whitening"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Teeth Whitening
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

export default TeethWhitening;
