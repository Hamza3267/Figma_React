import React from "react";
import Style from "./block.module.scss";

const Block = ({ img, text }) => {
  return (
    <div className={Style.icon}>
      <img src={img} alt="" className={Style.img} />
      <h3 className={Style.ptextss}>{text}</h3>
    </div>
  );
};

export default Block;
