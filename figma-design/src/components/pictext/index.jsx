import React from 'react'
import style from './pictext.module.scss'
const PicText = ({Pipe,text,txt}) => {
  return (
    <>
    <div className={style.flexbox}>
      <img src={Pipe} alt='' className={style.pic}/>
<div className={style.textalign}>
      <p className={style.text}>{text}</p>
      <p className={style.txt}>{txt}</p>
      </div>
      </div>
    </>
  )
}

export default PicText
