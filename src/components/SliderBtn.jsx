import React from "react";
import leftArrow from "../icons/left-arrow.svg";
import rightArrow from "../icons/right-arrow.svg";

function SliderBtn({ direction, moveSlide }) {
  
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="Slider Button SVG"/>
    </button>
  );
}

export default SliderBtn;