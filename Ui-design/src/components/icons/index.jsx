import React from 'react'
import Icons from './icon.module.scss'
const Icon = ({link,text,iconClass,textClass}) => {
  return (
    <div className={Icons.icon}>
      <img src={link} alt='' className={`${Icons.img} ${iconClass} `} />
      <h3 className={`${Icons.ptextss} ${textClass}`}>{text}</h3>
    </div>
  )
}

export default Icon
