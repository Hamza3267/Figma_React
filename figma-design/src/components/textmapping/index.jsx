import React from 'react'
import style from './textmapping.module.scss'
const TextMap = ({pragraph,pgraph,pclas,p2class}) => {
  return (
    <div>
      <p className={`${style.p}  ${pclas}`}>{pragraph}</p>
      <p className={`${style.p2}  ${p2class}`}>{pgraph}</p>
    </div>
  )
}

export default TextMap
