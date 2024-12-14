
import virtualbanner from "../assets/Virtualtourbanner.jpg";
import React, { useState } from 'react';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Virtualtour.css"
import Adress from "./Adress";
import virtual1 from "../assets/virtualtour-1.jpg"
import virtual2 from "../assets/virtualtour-2.jpg"
import virtual3 from "../assets/virtualtour-3.jpg"
import virtual4 from "../assets/virtualtour-4.jpg"
import virtual5 from "../assets/virtualtour-5.jpg"



const Virtualtour = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        virtual1,virtual2,virtual3,virtual4,virtual5
    ];

    const openSlideshow = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    const closeSlideshow = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
  return (
    <div>
      
        <img className="img-fluid" src={virtualbanner} alt="Contact Banner" style={{overflow:"hidden",width:"100%",height:"500px"}}/>

      
        <div className="virtual-tour container">
            <h1 className="text-left">Virtual Tour</h1>
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
                        <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="img-thumbnail"
                            onClick={() => openSlideshow(index)}
                            style={{height:"350px",width:"350px"}}
                        />
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="slideshow-overlay">
                    <div className="slideshow">
                        <button className="btn btn-light close-btn" onClick={closeSlideshow}>
                        <AiFillCloseCircle />
                        </button>
                        <button className="btn btn-light prev-btn" onClick={prevImage}>
                        <TbPlayerTrackPrevFilled />
                        </button>
                        <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className="slideshow-image" />
                        <button className="btn btn-light next-btn" onClick={nextImage}>
                        <TbPlayerTrackNextFilled />
                        </button>
                    </div>
                </div>
            )}
        </div>
        <Adress/>
       
        
      
    </div>
  )
}

export default Virtualtour

