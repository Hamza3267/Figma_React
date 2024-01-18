import React from "react";
import style from "./electric.module.scss";
import backgroundpic from "../../assets/images/backgroundpic.png";
import PicText from "../../components/pictext";
import TextMap from "../../components/textmapping";
import Button from "../../components/buttons";
import lamp from "../../assets/images/lamp.png";
import backgroundshape from "../../assets/images/shade.png";
import backshape from "../../assets/images/backshade.png";
import mail from "../../assets/images/mail.png";
import phone from "../../assets/images/call.png";
import location from "../../assets/images/location.png";
import Card from "../../components/cards";
import ParagraphMap from "../../components/paragraphmapping";
import Commentsection from "../../components/commentsection";
import ContactInfo from "../../components/contactinfo";
import map1 from "../../assets/images/map1.png";
import map2 from "../../assets/images/map2.png";
import map3 from "../../assets/images/map3.png";
import map4 from "../../assets/images/map4.png";

const ElectricPage = () => {
  const overlaystyle = {
    backgroundImage: `url(${backgroundpic})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const laystyle = {
    backgroundImage: `url(${backgroundshape})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const backstyle = {
    backgroundImage: `url(${backshape})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const picitems = [
    {
      pic: map1,
    },
    {
      pic: map2,
    },
    {
      pic: map3,
    },
    {
      pic: map4,
    },
    {
      pic: map2,
    },
    {
      pic: map4,
    },
    {
      pic: map1,
    },
    {
      pic: map3,
    },
  ];
  const infoitems = [
    {
      img: mail,
      text: "test@gmail.com",
    },
    {
      img: phone,
      text: "(303) 555-0105",
    },
    {
      img: location,
      text: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
  ];
  return (
    <>
      <div style={overlaystyle} className={style.maindiv}>
        <PicText logo={lamp} text={"Round Rock"} txt={"Handyman services"} />
        <div className={style.subdiv}>
          <TextMap
            title={"Lorem"}
            paragraph={"Lorem"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
            }
          />
          <div className={style.buttondiv}>
            <Button title={"Help me"} />
            <Button title={"Help me"} btnClass={style.buttonedit} />
          </div>
        </div>
      </div>
      <div className={style.portion2}>
        <TextMap
          title={"only the best"}
          paragraph={"Electric Services"}
          titleclass={style.title}
          paragraphclass={style.paraclass}
        />
        <div style={laystyle} className={style.portion2subdiv}>
          <div className={style.mapdiv}>
            <Card />
          </div>
        </div>
      </div>
      <div style={backstyle} className={style.portion3}>
        <TextMap
          title={"only the best"}
          paragraph={"About Us"}
          titleclass={style.title}
          paragraphclass={style.paraclass}
        />
        <div className={style.paradiv}>
          <ParagraphMap />
        </div>
      </div>
      <div className={style.portion4}>
      
          <TextMap
            title={"only the best"}
            paragraph={"Gallery"}
            titleclass={style.title}
            paragraphclass={style.paraclass}
          />
       
        <div className={style.picsmapediting}>
          {picitems.map((e, index) => (
            <img
              src={e.pic}
              alt="pics"
              className={style.picwidthsetting}
              key={index}
            />
          ))}
        </div>

        <div className={style.portion5}>
        <div className={style.textdiv}>
          <TextMap title={"Contact us"} titleclass={style.lasttitle} />
         </div>
          <div className={style.flexdiv}>
            <Commentsection />
            <div>
              {infoitems.map((e, index) => (
                <ContactInfo img={e.img} text={e.text} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricPage;
