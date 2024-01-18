import React from 'react'

import Button from '../buttons'
import Text from '../texts'

import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Linkdln from "../images/linkedin.png";
import Youtube from "../images/youtube.png";

import style from './footer.module.scss'
const Footer = () => {
  return (
    <>
       <div className={style.borderline}></div>
        <div className={style.footerportion}>
          <Text
            textClass={style.footer}
            title={"© The7 Consulting - 2022. All rights reserved."}
          />
          <Button title={"Term & conditions"} btnClass={style.customfooter} />
          <Button title={"Cookies policy"} btnClass={style.customfooter} />
          <div className={style.links}>
            <img src={Facebook} alt='' className={style.logo}/>
            <img src={Twitter} alt='' className={style.logo}/>
            <img src={Youtube} alt='' className={style.logo}/>
            <img src={Linkdln} alt='' className={style.logo}/>
          </div>
        </div>
    </>
  )
}

export default Footer
