import React from 'react'
import style from './text.module.scss'
const Text = ({title,textClass}) => {
  return (
    <div className={style.flex}>
      <p className={`${style.txt} ${textClass}`}>{title}</p>
    </div>
  )
}

export default Text
