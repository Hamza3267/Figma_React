import React from "react";
import style from "./header.module.scss";
import Frame from "../../assets/images/frame.png";
import Basket from "../../assets/images/basket.png";

const Nav = () => {
  return (
    <div className={style.main}>
      <div className={style.logoo}>
        <img src={Frame} alt="" className={style.logoimg} />
        <p className={style.p}>Pop Rock Crystal</p>
      </div>
      <div style={{ display: "flex" }}>
        <div className={style.link}>
          <a href="/home" className={style.name}>
            Home
          </a>
          <a href="/shop" className={style.name}>
            Shop
          </a>
          <a href="/about us" className={style.name}>
            About us
          </a>
          <a href="/help" className={style.name}>
            Help
          </a>
        </div>

        <div className={style.basketsetting}>
          <div className={style.zerosetting}>
            <div className={style.zerologo}>
              <span className={style.zeroimg}>00</span>
            </div>
          </div>
          <img src={Basket} alt="" className={style.basketimg} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
