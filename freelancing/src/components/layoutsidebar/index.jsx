import React from 'react'
import style from './layout.module.scss'
import Header from '../../components/header';
import SideBar from '../sidebar';
const LayoutStyle = ({children}) => {
  return (
    <div className={style.flexdiv}>
      
      <div className={style.side}>
        <SideBar />
      </div>
      <div className={style.headdiv}>
        <Header  mainheader={style.setting} headerbutonsettiing={style.buttonsetting}/>
      {children}
      </div>
    </div>
  )
}

export default LayoutStyle
