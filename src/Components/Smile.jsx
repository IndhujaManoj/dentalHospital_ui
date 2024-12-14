import React, { useState } from "react";
import "./Smile.css"
import smilepics from "../assets/smilepics.jpg"
import smilebanner from "../assets/Smilebanner.jpg"
import Adress from "./Adress";


const Smile = () => {
  const [modalImage, setModalImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const categories = [
    {
      title: "Fractured Teeth Corrections",
      images: [
        { before: smilepics, after:smilepics},
        { before: smilepics, after: smilepics },
      ],
    },
    {
      title: "Attrited Teeth Correction",
      images: [{ before:smilepics, after:smilepics}],
    },
    {
      title: "Decayed Teeth Corrections",
      images: [{ before:smilepics, after:smilepics }],
    },
    {
      title: "Discoloured Teeth Corrections",
      images: [
        { before:smilepics, after: smilepics },
        { before: smilepics, after:smilepics },
      ],
    },
    {
      title: "Malaligned Teeth Corrections",
      images: [
        { before: smilepics, after:smilepics },
        { before: smilepics, after: smilepics },
      ],
    },
    {
      title: "Spacing Between Teeth",
      images: [{ before: smilepics, after: smilepics }],
    },
  ];

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImage("");
    setShowModal(false);
  };

  return (
    <>
    <img className="img-fluid" src={smilebanner} alt="Contact Banner" style={{width:"100%",height:"400px"}}/>
    <div className="smile-gallery container my-5">
      <h1 className="text-center mb-4">Smile Gallery</h1>
      <h3>Cosmetic Treatment</h3>
      {categories.map((category, index) => (
        <div key={index} className="category mb-4">
          <h4>{category.title}</h4>
          <div className="row">
            {category.images.map((image, imgIndex) => (
              <div className="col-md-6 col-sm-12 mb-3">
              <div className="image-container d-flex justify-content-between">
                <div className="before-after text-center">
                  <img
                    src={image.before}
                    alt="Before"
                    className="img-fluid"
                    onClick={() => openModal(image.before)}
                  />
                  <p>BEFORE</p>
                </div>
                <div className="before-after text-center">
                  <img
                    src={image.after}
                    alt="After"
                    className="img-fluid"
                    onClick={() => openModal(image.after)}
                  />
                  <p>AFTER</p>
                </div>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} alt="Enlarged" className="img-fluid" />
          </div>
        </div>
      )}
      <Adress/>
    </div>
    </>
  );
};

export default Smile;
