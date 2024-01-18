import React, { useState } from "react";
import Style from "./block.module.scss";
import Fruit from "../../assets/images/fruit.png";
import Leftarrow from "../../assets/images/arrowleft.png";
import Rightarrow from "../../assets/images/arrowright.png";

const slides = [
  {
    p: "New lot",
    text: "Crystal Agate Phone Grip",
    price: "- 18.99$",
  },
  {
    p: "New lot",
    text: "Crystal Agate Phone Grip",
    price: "- 18.99$",
  },
  {
    p: "New lot",
    text: "Crystal Agate Phone Grip",
    price: "- 18.99$",
  },
  {
    p: "New lot",
    text: "Crystal Agate Phone Grip",
    price: "- 18.99$",
  },
  {
    p: "New lot",
    text: "Crystal Agate Phone Grip",
    price: "- 18.99$",
  },
  {
    p: "New lot",
    text: "Crystal Agate Phone Grip",
    price: "- 18.99$",
  },
];
const CardSlider = () => {
  const totalSlides = slides.length;
  const [currentIndex, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div className={Style.carousel}>
      <div
        className={Style.carouselItems}
        style={{ transform: `translateX(-${currentIndex * 505}px)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={Style.icon}>
            <div className={Style.flexitem}>
              <p className={Style.p}>{slide.p}</p>
              <img src={Fruit} alt="" className={Style.img} />
            </div>

            <div className={Style.border}></div>
            <div className={Style.textflex}>
              <p className={Style.ptextss}>{slide.text}</p>
              <p className={Style.pprice}>{slide.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={Style.arrows}>
        <img
          src={Leftarrow}
          alt=""
          className={`${Style.carouselButton} ${Style.prev}`}
          onClick={handlePrevClick}
        />
        <div className={Style.dotsContainer}>
          {Array.from({ length: totalSlides }).map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`${Style.dot} ${
                dotIndex === currentIndex ? Style.activeDot : ""
              }`}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>

        <img
          src={Leftarrow}
          alt=""
          className={`${Style.carouselButton} ${Style.next}`}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default CardSlider;
