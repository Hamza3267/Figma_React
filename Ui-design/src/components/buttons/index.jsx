import React from 'react'
import style from './button.module.scss'
const Buttons = ({ title,btnClass }) => {
  return (
    <div>
      <button className={`${style.btn} ${btnClass}`}>
        {title}
      </button>
    </div>
  )
}

export default Buttons
