import React, { useState } from "react";
import smilemakeoverimg from "../assets/smilepics.jpg";
import "./Oralandmaxillofacial.css";

const Smilemakeover = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a smile makeover?",
      answer:
        "A smile makeover is a part of cosmetic dentistry and varies from person to person. It includes procedures such as teeth whitening, straightening teeth, repairing or replacing teeth, dental bonding, and porcelain veneers. Often referred to as an 'extreme makeover,' the results can be dramatic and life-changing.",
    },
    {
      question: "Who are the candidates?",
      answer:
        "People who are highly conscious of their appearance or wish to enhance their confidence are ideal candidates for a smile makeover.",
    },
    {
      question: "How important is a smile makeover?",
      answer:
        "More than 75% of people avoid smiling in photos due to self-consciousness. A smile makeover can boost self-esteem, have a positive psychological impact, and improve personal and romantic interactions.",
    },
    {
      question: "What factors should be considered for natural results?",
      answer:
        "Factors like gender, age, lifestyle, and facial structure are crucial for achieving natural and aesthetically pleasing results.",
    },
    {
      question: "What are the common procedures used?",
      answer: (
        <>
          <p>A smile makeover may include:</p>
          <ul className="custom-list">
            <li>Repairing broken or chipped teeth with crowns, veneers, or bonding.</li>
            <li>Straightening crooked teeth.</li>
            <li>Replacing missing teeth with implants, dentures, or braces.</li>
            <li>Correcting a gummy smile with surgery or laser treatment.</li>
            <li>Whitening stained teeth.</li>
            <li>Using lumineers to fill gaps between teeth.</li>
          </ul>
        </>
      ),
    },
    {
      question: "How long does the smile last?",
      answer:
        "With proper maintenance and regular dental checkups, the results can last several years. Materials used are strong, durable, and resistant to wear.",
    },
    {
      question: "How many visits are required?",
      answer:
        "The number of visits varies depending on the individual's goals and treatment plan. A consultation with the dentist is essential to outline the process, cost, and duration.",
    },
    {
      question: "What is the cost of a smile makeover?",
      answer:
        "The cost depends on the materials used, the dentist's skill, and the clinic's location. It can vary significantly from person to person.",
    },
    {
      question: "Is the smile makeover covered under insurance?",
      answer:
        "Smile makeovers are usually not covered by insurance as they are considered cosmetic treatments aimed at improving appearance.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="text-center my-5">
        <img
          src={smilemakeoverimg}
          alt="Smile Makeover"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Smile Makeover
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

export default Smilemakeover;
