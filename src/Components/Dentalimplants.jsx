import React, { useState } from "react";
import "./Oralandmaxillofacial.css";
import dentalimplantsimg from "../assets/dentalimplants.png";

const Dentalimplants = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the meaning of dental implant?",
      answer:
        "A dental implant is a manmade replacement in place of the natural teeth, enabling a person to have fixed teeth. Dental implants differ from transplants taken from others. The type of implant suitable for a patient depends on individual needs and teeth conditions. An x-ray is typically required to assess bone density and space availability. Dentists perform examinations to finalize the type of implant required.",
    },
    {
      question: "Who are the candidates for dental implant?",
      answer:
        "People missing one or all teeth are candidates for an implant. For missing one or a few teeth, dental implants with a crown or bridge can replace the gap. For those missing all teeth, implants can anchor loose dentures. Bone regeneration techniques can be used in cases of bone loss, aiding implant success.",
    },
    {
      question: "How much does an implant cost?",
      answer:
        "The cost of an implant depends on the individual case after thorough examination. Factors like the dentist’s skill, clinic location, and specific patient requirements influence the price.",
    },
    {
      question: "How much time is required?",
      answer:
        "Dental implants are advanced procedures, often taking 4-9 months or longer, depending on the case. Temporary teeth are provided during this time, ensuring the patient is never without teeth.",
    },
    {
      question: "Is the treatment painful?",
      answer:
        "There is minor discomfort during the procedure, which is minimized with sedation and anesthesia. Most patients experience pain for 2-3 days post-surgery, which can be managed with prescribed medications.",
    },
    {
      question: "Are there any chances of rejection?",
      answer:
        "The body does not reject dental implants like soft tissue transplants. Failures may occur due to misalignment, health conditions, or improper care. Dental implants are made of titanium, a biocompatible material widely used in medical replacements.",
    },
    {
      question: "When can I resume work?",
      answer:
        "Patients may experience discomfort and swelling on the day of surgery and the following day. Strenuous activities should be avoided. The decision to resume work depends on the individual's comfort and recovery.",
    },
    {
      question: "What side effects does one face without a dental implant?",
      answer: (
        <>
          <p>
            Without a dental implant, various complications can arise, such as:
          </p>
          <ul className="custom-list">
            <li>Weakening of adjacent teeth, leading to pain and lack of support for dentures, bridges, or partials.</li>
            <li>Enlargement of the tongue to fill the space of missing teeth.</li>
            <li>Changes in diet, often limited to soft foods.</li>
            <li>Bone loss, potentially leading to numbness in the lower lip and an increased risk of jaw fractures.</li>
            <li>Weakened adjacent bones causing further tooth loss.</li>
          </ul>
          <p>
            Early treatment is crucial to prevent worsening conditions and additional complications.
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
          src={dentalimplantsimg}
          alt="Dental Implants"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Dental Implants
        </h1>
      </div>

      {/* FAQ Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
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

export default Dentalimplants;
