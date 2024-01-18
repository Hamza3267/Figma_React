import React from 'react'
import style from './contactinfo.module.scss'
const ContactInfo = ({ img, text }) => {
  return (
    <div className={style.maindiv}>
      <img src={img} alt='contact-info-picture' className={style.img} />
      <p className={style.text}>{text}</p>
    </div>
  )
}

export default ContactInfo
