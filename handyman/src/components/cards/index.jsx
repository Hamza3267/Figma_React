import React,{useState} from "react";
import style from "./card.module.scss";
import cartoon from "../../assests/images/cartoon.png";
import Button from "../buttons";

const carditems = [
  {
    heading: "Handyman",
    and: "&",
    heading2: "Moving services",
    paragraphh:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    heading: "Handyman",
    and: "&",
    heading2: "Moving services",
    paragraphh:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    heading: "Handyman",
    and: "&",
    heading2: "Moving services",
    paragraphh:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
];

const Card = () => {
    const [activeCard, setActiveCard] = useState(null);
  
    const handleCardClick = (index) => {
      setActiveCard(index);
    };
 
  
    return (
      <div className={style.mapcard}>
        {carditems.map((e, index) => (
          <div
            className={`${style.cardflex} ${activeCard === index ? style.activeCard : ""}`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <img src={cartoon} alt="" className={style.pic} />
  
            <div className={style.textflex}>
              <p className={style.txt}>{e.heading}</p>
              <p className={style.andedit}>{e.and}</p>
            </div>
            <p className={style.text}>{e.heading2}</p>
            <p className={style.paragraphh}>{e.paragraphh}</p>
            <div>
              <Button title={"help me"} btnClass={style.button}/>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Card;