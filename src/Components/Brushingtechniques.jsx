import React, { useState } from "react";
import brushingimg from "../assets/brushingtechniques.png";
import "./Oralandmaxillofacial.css";

const BrushingTechniques = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How important is brushing?",
      answer: `
        Brushing is very important as it keeps our teeth and gums healthy. It helps to clean dirt between the gums and teeth as well as between two teeth. Brushing technique should be soft (to massage the gums) and firm (to remove dirt). Brushing reduces the risk of infection and cavities, making both teeth and gums strong.
      `,
    },
    {
      question: "What are the methods of brushing?",
      answer: `
        There are 2 common techniques of brushing: Bass and Fone’s methods.
        - **Bass technique**: Suitable for adults, involves holding the brush at a 45-degree angle to the teeth and using vibratory strokes to clean the gums and teeth.
        - **Fone’s technique**: Suitable for children, involves circular motions with the brush held perpendicular to the teeth.
      `,
    },
    {
      question: "How frequently should we brush our teeth?",
      answer: `
        Quality matters more than quantity. Dentists recommend brushing twice a day: once in the morning and once before bed. The frequency may vary depending on individual oral conditions, such as plaque formation or gum diseases.
      `,
    },
    {
      question: "What types of brushes are available?",
      answer: `
        - **Soft brushes**: Suitable for sensitive gums, but may struggle with cleaning tight gaps.
        - **Medium brushes**: Ideal for healthy gums and teeth.
        - **Hard brushes**: Inexpensive but can cause tooth abrasion and sensitivity.
      `,
    },
    {
      question: "How important is toothpaste in brushing?",
      answer: `
        Toothpaste contains fluoride, which fights plaque, polishes teeth, reduces decay, and provides fresh breath. It also combats acid attacks caused by bacteria in the mouth.
      `,
    },
    {
      question: "When should a brush be changed?",
      answer: `
        Brushes should be replaced every 3 months or after recovering from a cold/flu. Some brushes have indicator bristles that fade when it's time for a replacement.
      `,
    },
    {
      question: "Is brushing needed for children?",
      answer: `
        Yes, children should start brushing as soon as baby teeth appear. Regular brushing prevents cavities and ensures good oral hygiene.
      `,
    },
  ];

  return (
    <div>
      {/* Centered Title and Image */}
      <div className="text-center my-5">
        <img
          src={brushingimg}
          alt="Brushing Techniques"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Brushing Techniques
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

export default BrushingTechniques;
