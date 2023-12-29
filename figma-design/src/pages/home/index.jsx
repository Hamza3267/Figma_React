import React from "react";
import Navbar from "../../components/header/header";
import style from "./home.module.scss";
import Text from "../../components/texts";
import Block from "../../components/blocks";
import Button from "../../components/buttons";
import Card from "../../components/cards";
import Vector from "../../assets/images/vector.png";
import Ellipse from "../../components/Ellipse";
const Home = () => {
  const overlayStyle = {
    backgroundImage: `url(${Vector})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "250vh",
    background: `linear-gradient(
    to bottom,#87CEEB,    #87CEEB,    #87CEEB,    peachpuff,  peachpuff,  peachpuff,  #87CEEB,  #87CEEB    )`,
  };
  const overStyle = {
    backgroundImage: `url(${Vector})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "260vh",
  };
  return (
    <div className={style.maincontainer} style={overlayStyle}>
      <Navbar />
      <div className={style.portionflex}>
        <div>
          <Text title={"Welcome to"} textClass={style.title} />
          <Text title={"Pop Rock Crystal Shop!"} textClass={style.content} />
          <Text
            title={
              "Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!"
            }
            textClass={style.para}
          />
          <div className={style.buttonsdisplay}>
            <Button title={"Shop Now"} btnClass={style.btnediting} />
            <Button title={"about us"} btnClass={style.aboutus} />
          </div>
        </div>
        <Block />
      </div>
      <Text title={"scroll down"} textClass={style.mouseedit}/>
      <div className={style.portion2} style={overStyle}>
        <Text title={"All products"} textClass={style.text} />
        <div className={style.flexcontent}>
          <div className={style.displayflex}>
            <Text title={"Filter:"} textClass={style.fillter} />
            <Text title={"All products"} textClass={style.product} />
          </div>
          <div className={style.flexibility}>
            <Text title={"Sort:"} textClass={style.sort} />
            <Text title={"Best Selling"} textClass={style.selling} />
          </div>
        </div>
        <Card />

        <div className={style.circlepading}>

          <div>
            <Text title={"BEST PRICE "} textClass={style.price} />
            <Text title={" Agate Phone Grip"} textClass={style.grip} />
            <div className={style.pricetagcontainer}>
              <Text
                title={"44.50$"}
                textClass={style.fullprice}
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid red",
                }}
              />
              <Text title={"19.50$"} textClass={style.discountedprice} />
            </div>
            <Text
              title={
                "These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!"
              }
              textClass={style.description}
            />
            <div className={style.buttons}>
              <Button title={"Buy now"} btnClass={style.viewbutton} />
            </div>
          </div>

          <Ellipse />
        </div>
      </div>

      <div className={style.lastportion}></div>
    </div>
  );
};

export default Home;
