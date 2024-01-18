import React from "react";
import backgroundpic from "../../assets/images/backgroundpic.png";
import style from "./bycycle.module.scss";
import PicText from "../../components/pictext";
import logo from "../../assets/images/logo.png";
import headerpic from "../../assets/images/headerpic.png";
import TextMap from "../../components/textmapping";
import Button from "../../components/buttons";
import ellipse1 from "../../assets/images/Ellipse1.png";
import ellipse2 from "../../assets/images/Ellipse2.png";
import ellipse3 from "../../assets/images/Ellipse3.png";
import ellipse4 from "../../assets/images/Ellipse4.png";
import Ellipsetext from "../../components/ellipsemap";
import Manimg from "../../assets/images/manimg.png";
import Commentsection from "../../components/commentsection";
import mail from "../../assets/images/mail.png";
import phone from "../../assets/images/call.png";
import location from "../../assets/images/location.png";
import ContactInfo from "../../components/contactinfo";
const BycycleRepair = () => {
  const overlyStyle = {
    backgroundImage: `url(${backgroundpic})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height: "100%",
  };

  const ellipseitem = [
    {
      logo: ellipse1,
      text: "Diagnosis and adjustment of the bike",
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      logo: ellipse2,
      text: "Diagnosis and adjustment of the bike",
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      logo: ellipse3,
      text: "Diagnosis and adjustment of the bike",
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      logo: ellipse4,
      text: "Diagnosis and adjustment of the bike",
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
  ];
  const infoitems = [
    {
      img:mail,
      text:"test@gmail.com"
  },
  {
    img:phone,
    text:"(303) 555-0105"
},
{
  img:location,
  text:"2715 Ash Dr. San Jose, South Dakota 83475"
},
];
  return (
    <>
      <div style={overlyStyle} className={style.maindiv}>
        <div className={style.flexcontainer}>
          <div className={style.subdiv}>
            <PicText logo={logo} text={"ROUND ROCK"} txt={"BICYCLE REPAIR"} />
            <div className={style.texdivedit}>
              <TextMap
                title={"What is Lorem Ipsum"}
                desc={"What is Lorem Ipsum"}
                paragraph={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
              />
              <Button title={"Help Me"} btnClass={style.buttonmodule} />
            </div>
          </div>
          <img src={headerpic} alt="" className={style.picedit} />
        </div>
      </div>
      <div className={style.portion2}>
        <div className={style.edittextmapcomponent}>
          <div className={style.borderedit}>
            <TextMap
              desc={"Services for you"}
              paragraph={"Repair and maintenance"}
              descclass={style.desc}
              paragraphclass={style.para}
            />
          </div>
          <div className={style.mapdiv}>
            {ellipseitem.map((e, index) => (
              <Ellipsetext
                logo={e.logo}
                text={e.text}
                txt={e.txt}
                key={index}
              />
            ))}
          </div>
          <div className={style.butnsdiv}>
          <Button title={"Get discount 10%"} btnClass={style.buttonedit} />
          </div>
        </div>
      </div>
      <div style={overlyStyle} className={style.portion3}>
        <div className={style.aboutus}>
          <TextMap
            desc={"About Us"}
            paragraph={"We are a big family"}
            descclass={style.about}
            paragraphclass={style.description}
          />
          <div className={style.divflexibility}>
            <img src={Manimg} alt="" className={style.imgsetting} />
            <div className={style.portiontextbutndiv}>
              <TextMap
                desc={"Company name"}
                descclass={style.commentportion}
                paragraphclass={style.paraclass}
                paragraph={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
              />
              <div className={style.butndiv}>
                <Button
                  title={"Get discount 10%"}
                  btnClass={style.buttonclass}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={overlyStyle} className={style.portion4}>
         <div className={style.lastportionmaindiv}>
          <TextMap
            desc={"Contact Us"}
            paragraph={"Leave a request"}
            descclass={style.contactus}
            paragraphclass={style.leaverequest}
          />
          <div className={style.flexdiv}>
            <Commentsection />
            <div>
            {infoitems.map((e,index)=>(
              <ContactInfo img={e.img} text={e.text} key={index}/>
            ))}
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default BycycleRepair;
