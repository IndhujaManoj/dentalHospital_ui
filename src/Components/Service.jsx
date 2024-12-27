import React, { useState, useEffect } from "react";
import "./Service.css";
import client1 from "../assets/renish.jpg";
import client2 from "../assets/client2.jpg";
import servicepicture from "../assets/Servicedesign.png";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";

const Service = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [transition, setTransition] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const reviews = [
    {
      name: "Renish",
      location: "kattathurai",
      review:
        "I had an amazing experience at Selvan Dental Hospital! The root canal was painless, expertly done, and the staff ensured my comfort throughout. Highly recommend for top-notch dental care!",
      image: client1,
    },
    {
      name: "Jane",
      location: "Nagercoil",
      review:
        "I've been visiting Selvan Dental Hospital for years and have always been impressed with their service. The dentists are highly skilled and approachable, and the staff is always supportive and caring.",
      image: client2,
    },
  ];

  const handleNextReview = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
      setTransition(false);
    }, 500);
  };

  const handlePreviousReview = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentReview((prevReview) =>
        prevReview === 0 ? reviews.length - 1 : prevReview - 1
      );
      setTransition(false);
    }, 500);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNextReview();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="service-section">
      <div className="container-service">
        <div className="service-row row align-items-center">
          <div className="col-md-6 service-image">
            <img
              src={servicepicture}
              alt="Doctor"
              className="img-fluid"
              style={{ height: "500px", width: "100%"}}
            />
          </div>
          <div className="col-md-6 service-carousel">
            <h2>What Our Clients Say</h2>
            <div className="review-box">
              <div
                className="review-details-container"
                style={{
                  transform: `translateX(-${currentReview * 100}%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="review-slide"
                    style={{
                      opacity: transition ? 0 : 1,
                    }}
                  >
                    <div className="review-details" style={{ paddingTop: "30px" }}>
                      <p style={{ textAlign: "justify" }}>{review.review}</p>
                      <div
                        className="review-image"
                        style={{ display: "flex", paddingTop: "20px" }}
                      >
                        <img
                          src={review.image}
                          alt={review.name}
                          className="rounded-circle"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "10px",
                            paddingLeft: "20px",
                          }}
                        >
                          <h3>{review.name}</h3>
                          <p>{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="review-controls">
              <button onClick={handlePreviousReview} className="control-button">
              <MdOutlineSkipPrevious />
              </button>
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="control-button"
              >
                {isPlaying ? <FaPause />: <FaPlay />}
              </button>
              <button onClick={handleNextReview} className="control-button">
              <MdOutlineSkipNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
