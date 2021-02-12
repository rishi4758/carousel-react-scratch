import React from "react";
import "./style.css";
const Carousel = ({ images, length }) => {
  return (
    <div className="slider">
      <div class="slides">
        {images.map((image, index) => {
          return (
            <div id={index}>
              <span className="toolTipText">
                {index === length
                  ? "swipe left for previous"
                  : `swipe right for next`}
              </span>
              <img src={`${image}`} alt={image} />
            </div>
          );
        })}
      </div>
      {images.map((image, index) => (
        <a href={`#${index}`}>{index + 1}</a>
      ))}
    </div>
  );
};
export default Carousel;
