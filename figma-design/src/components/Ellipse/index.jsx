import React from "react";
import style from "./ellipse.module.scss";
import Fruit from '../../assets/images/fruit.png'
const Ellipse = () => {
  return (
    <>
    
      <div className={style.bigcircle}>
        <div className={style.smallcircle}>
          <div className={style.border}>
            <img src={Fruit} alt=""  className={style.pic}/>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Ellipse;
