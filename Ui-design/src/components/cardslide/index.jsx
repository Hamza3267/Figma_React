import React, { useState } from "react";
import style from "./cardslide.module.scss";
import pic from "../images/comma.png";
import Rightarrow from "../images/arrowright.png";
import Leftarrow from "../images/arrowleft.png";

const CardSlider = ({ slidecard }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slidecard.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidecard.length);
  };

  return (
    <div
      className={style.carousel}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className={style.carouselItems} style={{ transform: `translateX(-${currentIndex * 280}px)` }}>
        {slidecard.map((e, index) => (
          <div key={index} className={style.carouselItem}>
            <div className={style.maincontainer}>
              <div className={style.cardslider}>
                <img src={pic} alt="" className={style.cardslider} />
              </div>
              <div className={style.h3div}>
                <h3 className={style.text}>{e.description}</h3>
              </div>
              <div className={style.h3divv}>
                <h2>{e.text}</h2>
              </div>
              <div className={style.h3divv}>
                <h4 className={style.textt}>{e.name}</h4>
              </div>
             
            </div>
          </div>
        ))}
      </div>
      {isMouseOver && (
        <div className={style.arrows}>
          <img
            src={Leftarrow}
            alt=""
            className={`${style.carouselButton} ${style.prev}`}
            onClick={handlePrevClick}
          />

          <img
            src={Rightarrow}
            alt=""
            className={`${style.carouselButton} ${style.next}`}
            onClick={handleNextClick}
          />
        </div>
      )}
    </div>
  );
};

export default CardSlider;
