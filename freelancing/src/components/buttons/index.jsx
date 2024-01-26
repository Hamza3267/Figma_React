import React from 'react'
import style from './button.module.scss'

const Button = ({ title, btnClass,btndiv, btnimg,imgset,onClick}) => {
  return (
    <div className={`${style.buttonedits} ${btndiv}`}>
      <button className={`${style.btn} ${btnClass}`} onClick={onClick} >
        
      {btnimg && <img src={btnimg} alt='' className={`${style.img} ${imgset}`}/> }{title}</button>
      
    </div>
  )
}

export default Button

