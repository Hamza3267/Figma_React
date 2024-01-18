import React, { useState } from "react";
import home from "./home.module.scss";
//components
import Button from "../../components/buttons";
import Text from "../../components/texts";
import IconText from "../../components/icons";
import Tab from "../../components/tabs";
import Block from "../../components/blocks";
import ProgressBar from "../../components/progressbar";
import Numtext from "../../components/numbertext";
import Input from "../../components/inputs";
import Navbar from "../../components/header/logo";
import CardSlider from "../../components/cardslide";
//video
import Video from "../../components/videos";
//images
import Backgroundimg from "../../components/images/background-img.png";
import Img3 from "../../components/images/img3.webp";
import Img4 from "../../components/images/img4.webp";
import Img9 from "../../components/images/phonecall.png";
import Logoimg from "../../components/images/logowhite.png";
import Whitephn from "../../components/images/whitephone.png";
import Mail from "../../components/images/mail.png";
import Building from "../../components/images/building.png";
import Footer from "../../components/footer";

import {
  blockcontent,
  progresscontent,
  numtextcontent,
  ticktextcontent,
  tabsData,
  slidecard,
  icontext,
} from "./helper";
const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const overlayStyle = {
    background: `linear-gradient(to bottom right, #0f1b2d, #162740, #1d3553, #244066, #2b4979)`,
    maskImage: `url(${Backgroundimg})`,
  };

  return (
    <>
      <Navbar />
      <div style={overlayStyle} className={home.info}>
        <div className={home.ptext}>
          <div className={home.text}>
            <Text
              textClass={home.txts}
              title={
                "Need a professional business consultation? Look no further. We are here to help!"
              }
            />
            <Text
              textClass={home.p}
              title={
                " We offer a professional advice, guidance and actionable solutions to businesses experiencing issues they can’t deal with in-house."
              }
            />

            <div className={home.btns}>
              <Button title={"Get free consultation"} />
              <Button
                title={"Shop online guides  >"}
                btnClass={home.customBtn}
              />
            </div>
          </div>

          <div className="img-section">
            <img src={Img3} alt="" className={home.img3} />
            <img src={Img4} alt="" className={home.img4} />
          </div>
        </div>
        <div className={home.display}>
          {icontext.map((e, index) => (
            <IconText key={index} link={e.link} alt="" text={e.text} />
          ))}
        </div>
      </div>
      <div className={home.portion2}>
        <div className={home.tabSetting}>
          <div className={home.textSetting}>
            <Text
              textClass={home.title}
              title={"Welcome to Seven Consulting"}
            />
            <Text
              textClass={home.tittle}
              title={
                "Risk more than others think is safe. Dream more than others think is practical"
              }
            />
            <Button title={"Let's discuss your case"} btnClass={home.editBtn} />
          </div>
          <div className={home.tab}>
            <Tab
              tabsData={tabsData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>

        <div className={home.mapping}>
          {blockcontent.map((e, index) => (
            <div key={index}>
              <Block img={e.img} text={e.text} />
            </div>
          ))}
        </div>
      </div>
      <div style={overlayStyle} className={home.portion3}>
        <div className={home.mainHead}>
          <Text
            textClass={home.heading}
            title={
              "Need a professional business consultation? Let's discuss your case!"
            }
          />
        </div>
        <div className={home.flex}>
          <Button title={"Contact us online"} />
          <div className={home.editIconText}>
            <IconText
              iconClass={home.cBtn}
              textClass={home.cText}
              link={Img9}
              alt=""
              text={"1-001-234-5678"}
            />
          </div>
        </div>
      </div>

      <div className={home.portion4}>
        <div className={home.barflex}>
          <div className={home.alltext}>
            <Text
              textClass={home.titletextss}
              title={"High level of competence"}
            />
            <Text
              textClass={home.portion4text}
              title={"Our experience will help you create a quality product"}
            />
            <Text
              textClass={home.t}
              title={
                "Aliquam erat volutpat. Donec placerat metus erat, nec vulputate nulla iaculis eu. Suspendisse potenti. Sed sagittis maximus quam, nec laoreet enim laoreet sed lorem ipsum vulputate nulla iaculis. Suspendisse euismod felis nunc, vitae aliquet lectus ornare."
              }
            />
          </div>
          <div className={home.bar}>
            {progresscontent.map((eve, index) => (
              <ProgressBar
                key={index}
                title={eve.title}
                progress={eve.progress}
              />
            ))}
          </div>
        </div>
        <div className={home.numtex}>
          {numtextcontent.map((e, index) => (
            <Numtext key={index} num={e.num} title={e.title} text={e.text} />
          ))}
        </div>
      </div>
      <div className={home.container5}>
        <div className={home.mainHead}>
          <Text
            textClass={home.formheading}
            title={
              "Any questions? Request a call-back to get a free analysis of your business!"
            }
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Input />
          <div className={home.buttonedit}>
            <Button title={"Request a call-back"} btnClass={home.editBtun} />
          </div>
        </div>
      </div>
      <div className={home.portion6}>
        <div className={home.barflex}>
          <div className={home.alltext}>
            <Text
              textClass={home.titletextss}
              title={"High level of competence"}
            />
            <Text
              textClass={home.portion4text}
              title={"Our experience will help you create a quality product"}
            />
            <div className={home.icontextediting}>
              {ticktextcontent.map((e, index) => (
                <IconText
                  key={index}
                  iconClass={home.iconcolor}
                  textClass={home.textsize}
                  link={e.link}
                  alt=""
                  text={e.text}
                />
              ))}
            </div>
          </div>
          <div className={home.videdit}>
            <Video />
          </div>
        </div>

        <CardSlider slidecard={slidecard} />
      </div>
      <div style={overlayStyle} className={home.portion7}>
        <div className={home.lastcontainer}>
          <div className={home.logoimage}>
            <img src={Logoimg} alt="" className={home.logoimg} />
          </div>

          <Text
            textClass={home.textportion}
            title={
              "We exist to empower people to deliver ridiculously good innovation to the world’s best companies."
            }
          />
          <div className={home.details}>
            <div>
              <Button title={"Contact info"} btnClass={home.customheading} />
              <div className={home.articleportion}>
                <div className={home.textdiv}>
                  <IconText
                    iconClass={home.changebtn}
                    textClass={home.changetext}
                    link={Whitephn}
                    alt=""
                    text={"1-001-234-5678"}
                  />
                    <IconText textClass={home.date} text={"Mon-Sat: 8:00 – 21:00"} />
                </div>
              
                <div className={home.textdiv}>
                  <IconText
                    iconClass={home.changebtn}
                    textClass={home.changetext1}
                    link={Mail}
                    alt=""
                    text={"info@dream-theme.com"}
                  />
                   <IconText textClass={home.date} text={"24/7 customer support"} />
                </div>
               
                <div className={home.textdiv}>
                  <IconText
                    iconClass={home.changebtn}
                    textClass={home.changetext1}
                    link={Building}
                    alt=""
                    text={"3 Rockaway St., New Rochelle, NY 10801"}
                  />
                  <IconText textClass={home.date} text={"Main office location"} />
                  </div>
                
              
              </div>
            </div>

            <div className={home.recentarticle}>
              <Button title={"Recent articles"} btnClass={home.customheading} />
              <div className={home.article}>
                <Text
                  title={"How to find your ideal business advisor"}
                  textClass={home.custombtn}
                />

                <Text textClass={home.date} title={"March 4, 2020"} />
                <Text
                  title={"Main business consulting trends 21/22"}
                  textClass={home.custombtn}
                />

                <Text textClass={home.date} title={"February 25, 2020"} />
                <Text
                  title={"Top 6 financial planing tricks"}
                  textClass={home.custombtn}
                />

                <Text textClass={home.date} title={"February 18, 2020"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
