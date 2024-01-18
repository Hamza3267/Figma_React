import React from "react";
import style from "./header.module.scss";

const Nav = () => {
  return (
    <div className={style.main}>

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
  );
};

export default Nav;
