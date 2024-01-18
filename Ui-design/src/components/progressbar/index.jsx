import React from 'react';
import style from './progressbar.module.scss'
const ProgressBar = ({ title, progress }) => {
    let pct = progress*10;
  return (
    <div className={style.companyProgress}>
      <h2>{title}</h2>
      <div className={style.progressContainer}>
        <div className={style.progress}  style={{ width: `${pct}%`}}>    
        <span className={style.progresstext}>{`${progress} years`}</span>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar