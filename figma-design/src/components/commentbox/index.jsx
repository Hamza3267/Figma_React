import React from 'react'
import style from './commentbox.module.scss'
import star from '../../assets/images/star.png'
const CommentBox = ({name,description,pic}) => {
    const starmap=[
        {
            star:star
        },
        {
            star:star
        },
        {
            star:star
        },
        {
            star:star
        },
        {
            star:star
        },
    ];
  return (
    <>
      <div className={style.maincontainer}>
        <div className={style.midcontainer}>
        <div>
            <img src={pic} alt=''  className={style.picture}/>
        </div>
        <div>
            <p className={style.name}>{name}</p>
            <p className={style.description}>{description}</p>
            <div className={style.girlmap}>
           {starmap.map((e,index)=>(
            <div key={index} >
                <img src={e.star} className={style.colorstar} />
                </div>
           ))} 
           </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default CommentBox
