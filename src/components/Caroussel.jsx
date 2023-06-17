import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logements from '../assets/datas/logements.json';
import { useParams } from 'react-router-dom';
import '../styles/general.css';


export default function Caroussel() {
    const { id } = useParams();
    const logementId = id;
    const logementTrouve = Logements.find(obj => obj.id === logementId);
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
  
    const carouselSettings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: currentSlide,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
    };
  
    const goToPreviousSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  
    const goToNextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
  
    return (
      <div id="carouselContainer">
        <button className="carrouselButton previous" onClick={goToPreviousSlide}>
          <i className="fa-solid fa-angle-right fa-rotate-180"></i>
        </button>
        <button className="carrouselButton next" onClick={goToNextSlide}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
        <Slider ref={sliderRef} {...carouselSettings}>
          {logementTrouve.pictures.map((picture, index) => (
            <div key={index} className="logementSlide">
              <img src={picture} alt={`Image ${index + 1}`} className={`carrouselImage #${index + 1}`} />
            </div>
          ))}
        </Slider>
        <div className="slideNumber">{currentSlide + 1} / {logementTrouve.pictures.length}</div>
      </div>
    );
  }