import React, { useState } from "react";
import perdiatric from "../assets/pediatricdentistry.png";
import "./Oralandmaxillofacial.css";

const PediatricDentistry = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the meaning of pediatric dentistry?",
      answer:
        "Pediatric dentistry specializes in/takes care of the oral health of infants, children, and adolescents. This dentistry also treats children with special needs who are physically and mentally challenged. It involves additional study of 3 years after 4 years of dental training and includes child growth, psychology, and development. Pediatric dentists address a variety of dental problems such as cavities, tooth decay, malocclusion, emergency care, crooked teeth, etc.",
    },
    {
      question: "When should a child first visit the dentist?",
      answer:
        "According to the American Academy of Pediatric Dentistry, a child should visit the dentist by their first birthday. By this time, the first teeth emerge, and the dentist can guide parents on maintaining oral hygiene, diet, tooth eruption, finger habits, fluoride use, etc.",
    },
    {
      question: "How many visits are recommended?",
      answer:
        "The American Academy of Pediatric Dentistry recommends visiting the dentist twice a year. However, the frequency may vary depending on factors such as tooth decay, poor oral hygiene, or unusual teeth growth.",
    },
    {
      question: "How important are baby teeth?",
      answer:
        "Baby teeth help children chew food, smile properly, and speak clearly. They hold space for permanent teeth. Losing baby teeth prematurely due to decay or damage can cause nearby teeth to shift, leading to misplaced or crooked permanent teeth.",
    },
    {
      question: "How to clean baby teeth?",
      answer:
        "For infants, a soft cloth should be used to clean their gums after every feed. Once a child has a tooth, a soft toothbrush can be used.",
    },
    {
      question: "What is the right time to use toothpaste?",
      answer:
        "Toothpaste can be used once a child develops a few teeth. Fluoride toothpaste is not recommended for children under 2 years old due to the risk of swallowing, which can cause tooth staining. Parents should assist in brushing until the child can do it independently and ensure thorough rinsing after brushing.",
    },
    {
      question: "What is a cavity?",
      answer:
        "Cavities form when bacteria in the mouth interact with sweet food residues, producing acids that attack the enamel and create holes in the teeth. Poor oral hygiene and excessive sweet consumption can lead to cavities.",
    },
    {
      question: "What are dental sealants?",
      answer:
        "Sealants are protective coatings applied to the fissures and pits of teeth to prevent cavities. They are especially effective for children's molars and are safe and easy to apply.",
    },
    {
      question: "Does sucking the thumb cause any problems in teeth?",
      answer:
        "Thumb sucking should stop before permanent teeth emerge. Prolonged thumb sucking can lead to issues like buck teeth or an open bite.",
    },
    {
      question: "What are positive dental habits?",
      answer:
        "Good oral hygiene is a family effort. Children should learn the importance of brushing twice a day, flossing daily, and attending regular dental checkups for overall oral health.",
    },
  ];

  return (
    <div>
      {/* Centered Image and Title */}
      <div className="text-center my-5">
        <img
          src={perdiatric}
          alt="Pediatric Dentistry"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="fw-bold" style={{ color: "#00a3ff" }}>
          Pediatric Dentistry
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

export default PediatricDentistry;
