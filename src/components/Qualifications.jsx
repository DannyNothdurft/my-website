import React, {useState} from 'react';
import "./qualifications.scss";

// Data
import zertifikate from '../data/images';
import dataSlider from "../data/dataSlider.js";

// Components
import SliderBtn from './SliderBtn';

const Qualifications = () => {

  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
  
  return (
    <div id="qualifikationen" className="qualifi-container">
      <span className="quali-text">Meine Qualifikationen</span>

      <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                      className={slideIndex === index + 1 ? "slide qualifications-box active-anim" : "slide qualifications-box"}
                      key={obj.id}
                      >
                      
                      <div className="qualifications-container">
                        <div className="qualification">
                          <div className="content dci"><img src={zertifikate[obj.image]} alt="" /></div>
                          <h2>{obj.title}</h2>
                        </div>
                      </div>
        
                    </div>
                )
            })}
            <SliderBtn moveSlide={nextSlide} direction={"next"} />
            <SliderBtn moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
     
    </div>
  );
};

export default Qualifications;
