import React from 'react'
import style from './card.module.scss'
import pic from "../../assets/images/switch.png"
import Button from '../buttons'
const Card = () => {
    const carditems=[
        {
            text:"Replacing sockets"
        },
        {
            text:"Replacing sockets"
        },
        {
            text:"Replacing sockets"
        },
        {
            text:"Replacing sockets"
        },
        {
            text:"Replacing sockets"
        },
        {
            text:"Replacing sockets"
        },
    ]

    
  return (
    <>
    <div className={style.mapdiv}>
    {carditems.map((e,index)=>(
    <div className={style.carddiv} key={index}>
      <img src={pic} alt='switch-pic' className={style.pic} />
      <p className={style.text}>{e.text}</p>
      <div className={style.btn}>
      <Button title={"I need"} btnClass={style.buton}/>
      </div>
    </div>
    ))}
    </div>
    </>
  )
}

export default Card
