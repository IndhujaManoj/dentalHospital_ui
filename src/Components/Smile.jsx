import React, { useState, useEffect } from "react";
import "./Smile.css";
import smilebanner from "../assets/contactbanner.jpg";
import Appointment from "./Appointment";
import axios from "axios";

const Smile = () => {
  const [modalImage, setModalImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);

  // Fetch all images and categories from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/smiles"); // Fetch all categories and images
        if (response.data.success) {
          setCategories(response.data.categories); // Set the fetched categories in state
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages(); // Call the fetch function when component mounts
  }, []);

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
      <img
        className="img-fluid"
        src={smilebanner}
        alt="Contact Banner"
        style={{ width: "100%", height: "500px" }}
      />
      <div className="smile-gallery container my-5">
        <h1 className="text-center mb-4">Smile Gallery</h1>
        <h3>Cosmetic Treatment</h3>

        {/* Render categories and their images */}
        {categories.length === 0 ? (
          <p>No images available.</p>
        ) : (
          categories.map((category, index) => (
            <div key={index} className="category mb-4">
              <h4>{category.category}</h4>
              <div className="row">
                {/* Loop over images in each category */}
                {category.beforeImageUrl && category.afterImageUrl && (
                  <div key={index} className="col-md-6 col-sm-12 mb-3">
                    <div className="image-container d-flex justify-content-between">
                      <div className="before-after text-center">
                        <img
                          src={category.beforeImageUrl}
                          alt="Before"
                          className="img-fluid"
                          onClick={() => openModal(category.beforeImageUrl)}
                        />
                        <p>BEFORE</p>
                      </div>
                      <div className="before-after text-center">
                        <img
                          src={category.afterImageUrl}
                          alt="After"
                          className="img-fluid"
                          onClick={() => openModal(category.afterImageUrl)}
                        />
                        <p>AFTER</p>
                      </div>
                    </div>
                  </div>
                )}
                {/* Check for additional images */}
                {category.beforeImage2Url && category.afterImage2Url && (
                  <div key={index} className="col-md-6 col-sm-12 mb-3">
                    <div className="image-container d-flex justify-content-between">
                      <div className="before-after text-center">
                        <img
                          src={category.beforeImage2Url}
                          alt="Before"
                          className="img-fluid"
                          onClick={() => openModal(category.beforeImage2Url)}
                        />
                        <p>BEFORE</p>
                      </div>
                      <div className="before-after text-center">
                        <img
                          src={category.afterImage2Url}
                          alt="After"
                          className="img-fluid"
                          onClick={() => openModal(category.afterImage2Url)}
                        />
                        <p>AFTER</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}

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
      </div>
      <Appointment />
    </>
  );
};

export default Smile;
