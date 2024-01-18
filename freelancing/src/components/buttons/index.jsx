import React from 'react'
import style from './button.module.scss'
import Svg from '../svg/svg'
const Button = ({ title, btnClass,btndiv, btnimg,btnsvg}) => {
  return (
    <div className={`${style.buttonedits} ${btndiv}`}>
      <button className={`${style.btn} ${btnClass}`} >
      {btnimg && <img src={btnimg} alt='' className={style.img}/> }{btnsvg && <Svg />}{title}</button>
      
    </div>
  )
}

export default Button

