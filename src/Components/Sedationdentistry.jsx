import React, { useState } from "react";
import sedationtimg from "../assets/sedationdentistry.png";
import "./Oralandmaxillofacial.css";

const SedationDentistry = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What do you mean by sedation?",
      answer:
        "Sedation dentistry helps one to virtually snooze during visits to the dental clinic. It allows patients to go through the entire dental procedure comfortably and safely.",
    },
    {
      question: "Who are the best candidates for sedation dentistry?",
      answer: (
        <ul>
          <li>People who gag</li>
          <li>Have problems getting numb</li>
          <li>Have a fear of dental treatment</li>
          <li>Have sensitive teeth</li>
          <li>Have experienced traumatic dental procedures</li>
          <li>Hate shots and needles</li>
          <li>Dislike the smell, noise, and taste of dental treatment</li>
        </ul>
      ),
    },
    {
      question: "Does one experience any pain?",
      answer:
        "Patients feel very comfortable and experience no pain during the dental treatment, and they feel even better after the procedure is completed.",
    },
    {
      question: "What type of sedation is used?",
      answer:
        "General anesthesia is one type of sedation that requires a breathing machine. For oral surgeries, IV sedation is used. The most convenient, safe, and comfortable type is oral sedation, where a pill is given to the patient a few hours before the dental visit.",
    },
    {
      question: "What are different levels of sedation?",
      answer: (
        <>
          <p><strong style={{ color: "#04abe3" }}>Mild Sedation:</strong> The patient remains conscious and responds to verbal commands. Heart function and breathing are unaffected, though coordination and cognitive functions may be impaired.</p>
          <p><strong style={{ color: "#04abe3" }}>Moderate Sedation:</strong> There is a depression of consciousness, and the patient responds to commands. Breathing and heart function are not affected.</p>
          <p><strong style={{ color: "#04abe3" }}>Deep Sedation:</strong> The patient cannot be easily aroused and shows purposeful responses. Breathing may be impaired, but heart function remains normal.</p>
          <p><strong style={{ color: "#04abe3" }}>General Anesthesia:</strong> The patient experiences a complete loss of consciousness and cannot be aroused. Breathing is impaired, requiring ventilator support, and heart function may also be affected.</p>
        </>
      ),
    },
    {
      question: "Who administers the sedation?",
      answer:
        "Our anesthetist, who is specifically trained for dental sedation and general anesthesia, provides sedation for our clients.",
    },
    {
      question: "Does a person remember anything about the treatment?",
      answer:
        "After the treatment, patients typically forget their experience at the dental clinic.",
    },
    {
      question: "How safe is sedation dentistry?",
      answer:
        "Oral sedation has been used for over 30 years and is very safe and comfortable. Dentists first review the patient’s medical history and explain how sedation works to ensure comfort. During the procedure, oxygen saturation, blood pressure, and heart rate are continuously monitored. A reversal agent is available to end the sedation effect within 30 seconds if needed.",
    },
    {
      question: "What are the side effects?",
      answer:
        "Side effects such as hiccups and dry mouth may occur after the treatment. However, most patients are unaware of the sedation process and experience its benefits without discomfort. Sedation is especially helpful for patients who have difficulty getting numb.",
    },
  ];

  return (
    <div>
      {/* Centered Image and Title */}
      <div className="text-center my-5">
        <img
          src={sedationtimg}
          alt="Sedation Dentistry"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Sedation Dentistry
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

export default SedationDentistry;
