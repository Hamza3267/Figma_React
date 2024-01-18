import React from 'react'
import style from './button.module.scss'
const Button = ({ title, btnClass }) => {
  return (
    <div className={style.buttonedits}>
      <button className={`${style.btn} ${btnClass}`}>
        {title}
      </button>
    </div>
  )
}

export default Button
