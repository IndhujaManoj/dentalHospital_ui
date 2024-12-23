import React, { useState } from "react";
import "./Oralandmaxillofacial.css";
import dentalcrownimg from "../assets/dentalcrowns.png";

const Dentalcrowns = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What do you mean by dental crowns?",
      answer:
        "Dental crowns work like a tooth-shaped cap placed over the teeth. They cover the teeth and restore their shape, strength, size, and appearance. A crown is cemented over the gum line, completely covering the tooth and making it invisible.",
    },
    {
      question: "Why do we require dental crowns?",
      answer: (
        <ul className="custom-list">
          <li>To safeguard a weak tooth from breaking</li>
          <li>To hold the parts of a cracked or chipped tooth</li>
          <li>
            To support and cover a tooth with extensive filling and minimal remaining structure
          </li>
          <li>To keep dental bridges in place</li>
          <li>To cover discolored or misshapen teeth</li>
          <li>To restore a broken or worn-down tooth</li>
          <li>To cover a dental implant</li>
        </ul>
      ),
    },
    {
      question: "What type of crowns is available?",
      answer: (
        <ul className="custom-list">
          <li>
            <strong>Metals:</strong> Require less tooth reduction and minimal impact on adjacent teeth. These crowns are strong and durable but metallic in color, making them ideal for out-of-sight teeth or molars.
          </li>
          <li>
            <strong>Porcelain-Fused-to-Metal:</strong> Match the natural tooth color but may show metal at the gum line. Suitable for front and back teeth.
          </li>
          <li>
            <strong>All Resin:</strong> Cost-effective but less durable, prone to wear over time.
          </li>
          <li>
            <strong>All Porcelain or Ceramic:</strong> Best for front teeth and suitable for individuals allergic to metal. They look natural but are less strong than metal-based crowns.
          </li>
          <li>
            <strong>Temporary vs. Permanent:</strong> Temporary crowns are made in the dental clinic using materials like stainless steel or acrylic, while permanent crowns are custom-made in labs.
          </li>
        </ul>
      ),
    },
    {
      question: "How long does the crown last?",
      answer:
        "Dental crowns typically last 5–15 years, depending on care and maintenance. Avoid habits like nail biting, opening packets, and chewing hard objects. Brush twice daily and floss at least once a day for better longevity.",
    },
    {
      question: "What problems can one face with crowns?",
      answer: (
        <ul className="custom-list">
          <li>Teeth may be sensitive to hot or cold after the effect of anesthesia wears off.</li>
          <li>Improper crown placement can cause irregular bites and pain.</li>
          <li>
            Cement under the crown may wash away, loosening the crown over time.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="text-center my-5">
        <img
          src={dentalcrownimg}
          alt="Dental Crowns"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Dental Crowns
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

export default Dentalcrowns;
