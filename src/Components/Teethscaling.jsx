import React, { useState } from "react";
import teethscale from "../assets/teethscaling.png";
import "./Oralandmaxillofacial.css";

const TeethScaling = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is teeth scaling and why is it required?",
      answer: (
        <>
          Scaling is a treatment that cleans teeth by removing food particles, tartar, and external stains that are difficult to remove by brushing. It maintains dental hygiene without affecting teeth. Tartar deposits between teeth and gums can cause tooth fall and unhealthy gums over time. Scaling prevents this and promotes healthy teeth.
        </>
      ),
    },
    {
      question: "What is calculus/tartar?",
      answer: (
        <>
          Plaque is a sticky, soft, colorless deposit of food particles and bacteria on teeth. These bacteria multiply rapidly, causing gum infection and bleeding. While brushing removes bacteria temporarily, calculus forms within 11-14 hours and requires professional scaling for removal.
        </>
      ),
    },
    {
      question: "What are the myths about teeth scaling?",
      answer: (
        <>
          <p>Common myths include:</p>
          <ul className="custom-list">
            <li>The gap between gums and teeth increases.</li>
            <li>Teeth become weak and shaky.</li>
            <li>Teeth become sensitive.</li>
          </ul>
          <p>However, scientifically:</p>
          <ul className="custom-list">
            <li>The gaps seen after scaling are due to tartar removal, not caused by the procedure itself.</li>
            <li>Shaky teeth were already compromised by tartar, which scaling removes.</li>
            <li>Sensitivity after scaling is mild and temporary, lasting 1-2 days.</li>
          </ul>
        </>
      ),
    },
    {
      question: "What instruments are used for scaling?",
      answer: (
        <>
          <p>
            Scaling can be done using hand-held instruments like curettes/dental scalers or ultrasonic instruments. Ultrasonic instruments have a vibrating metal tip and water spray to remove tartar efficiently and keep the tip cool.
          </p>
        </>
      ),
    },
    {
      question: "What procedure is adopted for scaling?",
      answer: (
        <>
          <p>
            Scaling removes tartar above and below the gum line using ultrasonic machines with fine vibrating tips. The procedure is safe and maintains the tooth surface integrity. Dentists recommend cleaning every six months for optimal oral health.
          </p>
        </>
      ),
    },
    {
      question: "How often is scaling required?",
      answer: (
        <>
          <p>
            Dentists advise scaling every six months for individuals prone to dental plaque. Regular visits ensure timely intervention to maintain dental hygiene.
          </p>
        </>
      ),
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="text-center my-5">
        <img
          src={teethscale}
          alt="Teeth Scaling"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Teeth Scaling
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

export default TeethScaling;
