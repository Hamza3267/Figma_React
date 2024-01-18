import React from 'react';
import style  from './numtext.module.scss'; 

const Numtext = ({num,title,text}) => {
  return (
    <div className={style.customcomponent}>
      <div className={style.backgroundnumber}>{num}</div>
      <div className={style.title}>{title}</div>
      <div className={style.text}>{text}</div>
    </div>
  );
};

export default Numtext;
