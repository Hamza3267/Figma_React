import React from 'react'
import style from './paragraph.module.scss'

const ParagraphMap = () => {
    const paraitems=[
        {
            order:"1",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        },
        {
            order:"2",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        },
        {
            order:"3",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        },
        {
            order:"4",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        },
    ];
  return (
    <>
    {paraitems.map((e,index)=>(
    <div className={style.maincontainer} key={index}>
      <p className={style.order}>{e.order}</p>
      <p className={style.descrip}>{e.text}</p>
    </div>
    ))}
    </>
  )
}

export default ParagraphMap
