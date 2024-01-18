import React from 'react'
import style from './service.module.scss'
import pic from '../../assests/images/helpermanpic.png'
const ServiceAdevertisement = () => {
    const items=[
        {
            text:"Handyman",
            sign:"&",
            heading:"Moving services"
        },
        {
            text:"Handyman",
            sign:"&",
            heading:"Moving services"
        },
        {
            text:"Handyman",
            sign:"&",
            heading:"Moving services"
        },
        {
            text:"Handyman",
            sign:"&",
            heading:"Moving services"
        },
        {
            text:"Handyman",
            sign:"&",
            heading:"Moving services"
        },
    ];
    
  return (
    <>
    
    {items.map((e,index)=>(
    <div className={style.maindiv} key={index}>
      <img src={pic} alt='' className={style.img} />
    <div className={style.textmap}>
      <p className={style.heading1}>{e.text} </p>
      <p className={style.heading2}>{e.sign}</p>
      </div>
      <p className={style.heading3}> {e.heading}</p>
    </div>
    ))}
    </>
  )
}

export default ServiceAdevertisement
