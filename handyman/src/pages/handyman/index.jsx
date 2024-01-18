import React from "react";
import Header from "../../components/header";
import style from "./handyman.module.scss";

import backgroundimg from "../../assests/images/backgroundimg.png";
import backgroundpic from "../../assests/images/portion2backgroundimg.png";
import logo from "../../assests/images/logo.png";
import headerpic from "../../assests/images/headerportionimg.png";
import sidepic from "../../assests/images/sidepic.png";
import mask1 from '../../assests/images/mask1pic.png';
import mask2 from '../../assests/images/mask2pic.png'

import PicText from "../../components/pictext";
import TextMap from "../../components/textmapping";
import Button from "../../components/buttons";
import Card from "../../components/cards";
import ParagraphMap from "../../components/paragraphmapping";
import ServiceAdevertisement from "../../components/serviceportionmap";
import Commentsection from "../../components/commentsection";
const HandyMan = () => {
  const overlaystyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundRepeat: "no-repeat",
  };
  const styleoverlay = {
    backgroundImage: `url(${backgroundpic})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div style={overlaystyle} className={style.maincontainer}>
        <Header />
        <PicText logo={logo} text={"Round Rock"} txt={"Handyman services"} />
        <div className={style.maincontainersubdiv}>
          <div>
            <TextMap
              title={"Handyman Services"}           
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              }
            />
            <div className={style.buttondiv}>
              <Button title={"Help me"} />
              <Button title={"Help me"} btnClass={style.buttonedit} />
            </div>
          </div>
          <div>
            <img
              src={headerpic}
              alt="side-pic"
              className={style.picturesetting}
            />
          </div>
        </div>
      </div>
      <div className={style.portion2}>
        <Card />
      </div>
      <div style={styleoverlay} className={style.portion3}>
        <TextMap
          paragraph={" About Us"}
          desc={"Lorem Ipsum is simply"}
          descclass={style.description}
          paragraphclass={style.about}
        />
        
        <div className={style.pportion3}>
          <img src={sidepic} alt="sidepic" className={style.portion3pic} />
          <div className={style.maptextportion3}>
              <ParagraphMap />
              <div className={style.buttondiv}>
              <Button title={"Help me"} />
              <Button title={"More Information"} btnClass={style.btned} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.portion4}>
      <TextMap
          paragraph={" Services"}
          desc={"Lorem Ipsum is simply"}
          descclass={style.description}
          paragraphclass={style.about}
        />
        <div className={style.griddiv}>
          <ServiceAdevertisement />
        </div>
      </div>
      <div className={style.lastportion}>
        <Commentsection />
        <div>
         
          <img src={mask2} alt="" className={style.mask2} />
         
         
        </div>
      </div>
    </>
  );
};

export default HandyMan;
