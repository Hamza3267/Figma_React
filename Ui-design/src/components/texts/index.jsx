import React from 'react'
import style from './text.module.scss'
const Text = ({title,textClass}) => {
  return (
    <div>
      <h1 className={`${style.txt} ${textClass}`}>{title}</h1>
    </div>
  )
}

export default Text
