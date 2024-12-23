import React, { useState } from "react";
import "./Oralandmaxillofacial.css";
import cosmeticImage from "../assets/cosmeticdentistry.png";

const CosmeticDentistry = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the meaning of the term cosmetic dentistry?",
      answer:
        "Cosmetic dentistry is the branch of science which works on enhancing the appearance of the teeth. It improves aesthetics of one’s teeth by using various techniques such as teeth whitening, dental veneers, Invisalign, TMJ treatment. Moreover, cosmetic dentistry helps to keep good oral hygiene and healthy teeth.",
    },
    {
      question: "What is Invisalign?",
      answer:
        "Invisalign is one of the techniques of cosmetic dentistry in which braces are used to align the teeth, but they are not visible. Conventional braces were visible and affected the smile. The invisible braces solve both purposes: they align the teeth and are not visible, which improves one's appearance and makes the smile attractive.",
    },
    {
      question: "What is teeth whitening?",
      answer:
        "Sometimes, bad eating habits, alcohol consumption, smoking, intake of fluoride, red wine, colorful beverages, etc., cause discoloration of teeth. Stained teeth hamper one’s appearance and smile. With the help of teeth whitening techniques, impurities are oxidized. Hard stains, which are difficult to remove with a brush, need proper treatment involving oxidizing agents. Special care should be taken as oxidizing agents are harmful to the gums. Only a qualified and skilled doctor can perform this technique.",
    },
    {
      question: "What are veneers?",
      answer:
        "Veneers are a thin layer made of porcelain, bonded to the front of the teeth by reducing the enamel. Veneers are wafer-like and match the color of the surrounding teeth. They help to conceal deformed/chipped or yellow teeth, improving one’s appearance and smile.",
    },
    {
      question: "What is TMJ treatment?",
      answer:
        "TMJ treatment is a cosmetic dentistry technique used to improve or correct facial shape.",
    },
    {
      question: "Do cosmetic dentistry procedures require sedation?",
      answer:
        "Yes, cosmetic dentistry requires sedation, but the level needed depends on various factors such as the procedure used, personal health, pre-medical history, and how familiar the dentist is with sedation.",
    },
    {
      question: "Can cosmetic dentistry procedures be performed on people who smoke?",
      answer:
        "Smoking is not good for teeth. Smokers face issues such as gum diseases, oral/throat/lung cancer, and loss of dental bone structure. Dental implants may fail as unhealthy gums hinder integration with gum tissues. Teeth whitening also loses its impact if a person continues to smoke. Quitting smoking before dental procedures is strongly recommended.",
    },
    {
      question: "Are cosmetic dentistry procedures suitable for children/teenagers?",
      answer:
        "Children and teenagers want to look good and attractive to improve their confidence and self-esteem. If there is a specific problem, cosmetic dentistry procedures can be performed, but factors like age, teeth formation, and arch development should be considered. Consulting a dentist for proper guidance is essential.",
    },
    {
      question: "What are the advantages of cosmetic dentistry?",
      answer:
        "Cosmetic dentistry has improved people's quality of life. Enhancing one's appearance boosts confidence and self-esteem. It helps solve the problem of unattractive teeth, allowing individuals to feel more socially accepted and confident.",
    },
  ];

  return (
    <div>
      {/* Centered Title and Image */}
      <div className="text-center my-5">
        <img
          src={cosmeticImage}
          alt="Cosmetic Dentistry"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Cosmetic Dentistry
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

export default CosmeticDentistry;
