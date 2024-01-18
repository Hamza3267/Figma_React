import React from "react";
import Text from "../../components/texts";
import Button from "../../components/buttons";
import Backgroundpic from "../../assets/images/backgroundpic.png";
import Pipe from "../../assets/images/pipe.png";
import PicText from "../../components/pictext";
import style from "./plumber.module.scss";
import Wrenchbox from "../../components/Wrenchbox";
import wrench from "../../assets/images/wrench.png";
import Man from "../../assets/images/man.png";
import Tick from "../../assets/images/checkcircle.png";
import IconText from "../../components/icons";
import Maskimg from "../../assets/images/maskimg.png";
import TextMap from "../../components/textmapping";
import CommentBox from "../../components/commentbox";
import Girlpic from '../../assets/images/profilepicgirl.png'
import Commentsection from "../../components/commentsection";
const PlumberPage = () => {
  const overStyle = {
    backgroundImage: `url(${Backgroundpic})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "98.7vw",
    height: "88.2vh",
  };
  const overlyStyle = {
    backgroundImage: `url(${Maskimg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    // width: "98.7vw",
     height: "45.2vh",
  };
  const wrenchitem = [
    {
      wrench: wrench,
      p: "Services one",
    },
    {
      wrench: wrench,
      p: "Services one",
    },
    {
      wrench: wrench,
      p: "Services one",
    },
  ];
  const ticktextcontent = [
    {
      link: Tick,
      text: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      link: Tick,
      text: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      link: Tick,
      text: "Lorem Ipsum is simply dummy text of the printing",
    },
  ];
  const wrenchsitem = [
    {
      wrench: wrench,
    },
    {
      wrench: wrench,
    },
    {
      wrench: wrench,
    },
    {
      wrench: wrench,
    },
  ];

  const wrenchsitems = [
    {
      pragraph: "Lorem Ipsum",
      pgraph:"Lorem Ipsum is simply dummy text of the printing and typesetting "
    },
    {
      pragraph: "Lorem Ipsum",
      pgraph:"Lorem Ipsum is simply dummy text of the printing and typesetting "
    },
    {
      pragraph: "Lorem Ipsum",
      pgraph:"Lorem Ipsum is simply dummy text of the printing and typesetting "
    },
    {
      pragraph: "Lorem Ipsum",
      pgraph:"Lorem Ipsum is simply dummy text of the printing and typesetting "
    },
  ];
  const commentitems = [
    {
      pic:Girlpic,
      name: "Courtney Henry",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      pic:Girlpic,
      name: "Courtney Henry",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      pic:Girlpic,
      name: "Courtney Henry",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      pic:Girlpic,
      name: "Courtney Henry",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
    },
   
  ];
  return (
    <>
      <div style={overStyle} className={style.maindiv}>
        <PicText Pipe={Pipe} text={"ROUND ROCK "} txt={"PLUMBING"} />

        <div className={style.divpic}>
          <Text title={"What is Lorem Ipsum"} textClass={style.titletext} />
          <Text
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            }
            textClass={style.para}
          />

          <div className={style.displaywrenchpic}>
            {wrenchitem.map((e, index) => (
              <Wrenchbox wrench={e.wrench} p={e.p} key={index} />
            ))}
          </div>

          <div className={style.buttonediting}>
            <Button title={"Help Me"} btnClass={style.button} />
          </div>
        </div>
      </div>
      <div className={style.portionflex}>
        <div className={style.portion2}>
          <div className={style.divstyle}>
            <Text title={"What is Lorem Ipsum"} textClass={style.title} />
            <Text
              title={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              }
              textClass={style.paragraph}
            />
            <div className={style.icontextediting}>
              {ticktextcontent.map((e, index) => (
                <IconText key={index} link={e.link} alt="" text={e.text} />
              ))}
            </div>
          </div>
        </div>
        <div className={style.portion3}>
          <img src={Man} alt="" className={style.pictureedit} />
        </div>
      </div>
      <div className={style.buttoneditings}>
        <Button title={"Help Me"} btnClass={style.buttons} />
      </div>

      <div style={overlyStyle} className={style.portion4}>

        <div className={style.textalign}>
          <Text title={"Services"} textClass={style.tiitle} />
       
          </div>
         <div className={style.displaywrench}>
          {wrenchsitem.map((e, index) => (
            <div className={style.mapsetiing}>
            <Wrenchbox
              wrench={e.wrench}
              imgstyle={style.imgsetting}
              rectanglestyle={style.rectanglesetting}
              key={index}
            />
            </div>
          ))}
        </div> 
       
      </div>
      <div className={style.portion5}>
      <div className={style.displaywrench}>
          {wrenchsitems.map((e, index) => (
            <div className={style.setiing}>
            <TextMap 
              pragraph={e.pragraph}
              pgraph={e.pgraph}
            
              key={index}
            />
            </div>
          ))}
         
        </div>
        <div className={style.btnediting}>
            <Button title={"Help Me"} btnClass={style.button} />
          </div>
      </div>
      <div className={style.portion7}>
      <div className={style.headingset}>
          <Text title={"Testimonials"} textClass={style.mainheading} />
       
          </div>
        <div className={style.commentgrid}>
        {commentitems.map((e,index)=>(
            <CommentBox pic={e.pic}name={e.name} description={e.description} key={index}/>
            ))}
            </div>
      </div>
      <div className={style.lastportion}>
      <div className={style.headingset}>
          <Text title={"Contact Us"} textClass={style.mainheadings} />
          <Commentsection />
        
          </div>
      </div>
    </>
  );
};

export default PlumberPage;
