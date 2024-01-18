import React from "react";
import style from "./renchbox.module.scss";

const Wrenchbox = ({
  wrench,
  p,
  imgstyle,
  rectanglestyle,

}) => {
  return (
    <>
      <div>
        <div className={`${style.rectangle} ${rectanglestyle}`}>
          <img src={wrench} alt="" className={`${style.wrench} ${imgstyle} `} />
         
        </div>
      
        <p className={style.p}>{p}</p>
      </div>
    </>
  );
};

export default Wrenchbox;
