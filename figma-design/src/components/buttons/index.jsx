import React from 'react'
import style from './button.module.scss'
const Button = ({ title, btnClass, onClick }) => {
  return (
    <div>
      <button className={`${style.btn} ${btnClass}`} onClick={onClick}>
        {title}
      </button>
    </div>
  )
}

export default Button
