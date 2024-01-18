import React from 'react';
import style from './commentsec.module.scss';

const Commentsection = () => {
  return (
    <>
    <div className={style.contain}>
      <input className={style.div} placeholder='Enter your Name'></input>
      <input className={style.div} placeholder='Enter your Email'></input>
      <input className={style.div} placeholder='Enter Comment'></input>
      <input className={style.div} placeholder='Enter Messege'></input>
      <button className={style.divv} >Send Request</button>
    </div>
   
     </>
  );
}

export default Commentsection;
