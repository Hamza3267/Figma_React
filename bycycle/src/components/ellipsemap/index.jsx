import React from 'react'
import style from './ellipse.module.scss'
const Ellipsetext = ({ logo, text, txt }) => {
  return (

    <div className={style.flexbox}>
      <img src={logo} alt='' className={style.pic} />
      <div className={style.textalign}>
        <p className={style.text}>{text}</p>
        <p className={style.txt}>{txt}</p>
      </div>
    </div>
  

  )
}

export default Ellipsetext
