import React from "react";
import style from "./home.module.scss";

import TextBar from "../../components/textbar";
import Nav from "../../components/header/header";
import MsgSlider from "../../components/messegeslide";
import CountrySearch from "../../components/countrysearch";
import PicText from "../../components/pictextcard";
import TextMap from "../../components/textmapping";
import Button from "../../components/buttons";
import Card from "../../components/cardslide";
import Block from "../../components/blocks";
import CardSlider from "../../components/cardslider";

import girlpic from "../../assets/images/girlpoint.png";
import homepic from "../../assets/images/home.webp";
import backgroundpic from "../../assets/images/background.webp";
import page from "../../assets/images/page.png";
import clock from "../../assets/images/clock.png";
import bell from "../../assets/images/bell.png";
import PicCard from "../../components/piccard";
import pic1 from "../../assets/images/pic1.webp";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import mail from "../../assets/images/mailbox.png";
import bellanime from '../../assets/images/bellanime.gif'
import Input from "../../components/input";
import Footer from "../../components/footer";


const overlyStyle = {
  backgroundImage: `url(${backgroundpic})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  //  width: "100%",
  height: "700px",
  overflow: "hidden",
};

const pictextitems = [
  {
    tittle: "Create your resume",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: page,
  },
  {
    tittle: "Create your resume",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: clock,
  },
  {
    tittle: "Create your resume",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: bell,
  },
];
const carditems = [
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
];
const numberitems = [
  {
    num: "24k+",
    para: "Candidate Applied",
  },
  {
    num: "10k+",
    para: "Company Reviews",
  },
  {
    num: "60k+",
    para: "Jobs submited",
  },
  {
    num: "30k+",
    para: "monthly Users",
  },
];
const hoverpicitems = [
  {
    pic: pic1,
    date: "October 29, 2022",
    learn: "Learn",
    para: " Remote Collaboration: Best Practices, Challenges, and Tools",
  },
  {
    pic: pic2,
    date: "October 29, 2022",
    learn: "Skills",
    para: " How to Work From Home: Tips and Companies Hiring Remotely",
  },
  {
    pic: pic3,
    date: "October 20, 2022",
    learn: "Speaking",
    para: "How Many Hours Is Part Time?",
  },
];
const textitem = [
  {
    textt: "Company",
  },
  {
    textt: "Service",
  },
  {
    textt: "Support",
  },
  {
    textt: "Connect",
  },
];
const Home = () => {
  return (
    <>
    <div className={style.blackdiv}>
          <img src={bellanime} alt="" style={{height:"20px"}}/>
          <text style={{color:"white",paddingLeft:"1%", fontSize:"14px" , display:"inline-block" , fontWeight:"400"}}>Subscribe for job alerts by email!</text>
        </div>
      <div style={overlyStyle} class>
        <div className={style.subdiv}>
          <Nav />
          <div className={style.flexscreen}>
            <div className={style.flextextcomponent}>
              <TextBar />
              <CountrySearch />
            </div>
            <MsgSlider />
          </div>
        </div>
      </div>
      <div className={style.portion2}>
        {pictextitems.map((e, index) => (
          <div className={style.portio2}>
            <PicText
              title={e.tittle}
              paragraph={e.para}
              logo={e.logo}
              key={index}
            />
          </div>
        ))}
      </div>
      
      <div className={style.portion3}>
        <TextMap
          title={"Popular category"}
          paragraph={"Find and hire professionals across all skills"}
          titleclass={style.edittitle}
          paragraphclass={style.paracont}
        />
        <div className={style.mapedit}>
          {carditems.map((e, index) => (
            <div className={style.mapdiv}>
              <PicText
              maindivedit={style.pictext}
                title={e.title}
                paragraph={e.paragraph}
                paraedit={style.paraed}
                logo={e.logo}
                titledit={style.titleeee}
                imgdivedit={style.borderedit}
                pictureedit={style.picediting}
                key={index}
              />
            </div>
          ))}
        </div>
        <Button
          title={"View all categories"}
          btndiv={style.btnedit}
          btnClass={style.btndit}
        />
      </div>

      <div className={style.portion4}>
        <div className={style.textmove}>
          <TextMap
            title={"Latest jobs"}
            paragraph={"2020 jobs live – 293 added today."}
            titleclass={style.edittitle}
            paragraphclass={style.paracont}
          />
        </div>
        <div className={style.divwidth}>
        <Card />
        </div>
      </div>
      <div className={style.portion5}>
        <div className={style.p5editing}>
          <TextMap
            title={"Featured companies actively hiring "}
            paragraph={"Over 100 million jobs"}
          />
          <Button
            title={"View all categories"}
            btndiv={style.btnedit}
            btnClass={style.btndit}
          />
        </div>
        <Block 
        flexx={style.carosaldivset}/>
      </div>
      <div className={style.portion6}>
        <div className={style.flexsubdiv}>
          <img src={girlpic} alt="girl" className={style.picedit} />
          <div className={style.textmapping}>
            <TextMap
              title={
                "Discover why more companies are using Civi to make hiring easy"
              }
              paragraph={
                "Faucibus sed diam lorem nibh nibh risus dui ultricies purus eget convallis auctor massa."
              }
              titleclass={style.tittleedit}
              paragraphclass={style.paraedit}
            />
            <div className={style.nummap}>
              {numberitems.map((e, index) => (
                <TextMap
                  key={index}
                  title={e.num}
                  paragraph={e.para}
                  titleclass={style.editingtext}
                  paragraphclass={style.editingpara}
                />
              ))}
            </div>
            <Button
              title={"Post your job for FREE"}
              btndiv={style.btndivedit}
            />
          </div>
        </div>
      </div>

      <div className={style.portion7}>
        <div className={style.flexcontainer}>
          <TextMap
            title={"Trusted by leading brands and startups"}
            paragraph={"Here’s what they say about us"}
            titleclass={style.edittitle}
            paragraphclass={style.paracont}
          />
        </div>

        <CardSlider />
      </div>

      <div className={style.poriton8}>
        <div className={style.subbdiv}>
          <div className={style.flexbox}>
            <div className={style.flextext}>
              <TextMap
                title={"EMPLOYERS"}
                paragraph={"Looking to post a job?"}
                desc={
                  "Find professionals from around the world and across all skills."
                }
                titleclass={style.titlredit}
                paragraphclass={style.paraediting}
                descclass={style.decedit}
              />
              <Button
                title={"Post your job for FREE"}
                btndiv={style.btndivedit}
              />
            </div>
            <div>
              <img src={homepic} alt="" className={style.pic} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.portion9}>
        <div className={style.flexcontainer}>
          <TextMap
            title={"Latest from our blog"}
            paragraph={"Get interesting insights, articles, and news"}
            titleclass={style.edittitle}
            paragraphclass={style.paracont}
          />
        </div>
        <div className={style.mappingcard}>
          {hoverpicitems.map((e, index) => (
            <PicCard
              pic={e.pic}
              date={e.date}
              learn={e.learn}
              para={e.para}
              key={index}
            />
          ))}
        </div>
        <Button
          title={"View more articles"}
          btndiv={style.btnd}
          btnClass={style.butun}
        />
      </div>
      <div className={style.portion10}>
        <hr class={style.borerline} />
        <div className={style.divportion10flex}>
          <PicText
            title={"Subscribe to our newsletter"}
            paragraph={"We'll keep you updated with the best new jobs."}
            logo={mail}
            titledit={style.titleditting}
            paraedit={style.paragraaph}
            imgdivedit={style.background}
            pictureedit={style.picsetting}
            maindivedit={style.maindivediting}
          />
          <div className={style.butontexteit}>
            <Input />
            <Button title={"Subscribe"} btndiv={style.btndivedit} />
          </div>
        </div>
        <hr class={style.borerline} />
      </div>
      <div className={style.footer}>
        <div className={style.subdivision}>
          <div className={style.textmapedit}>
            <TextMap
              title={"About Us"}
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris risus, lobortis a commodo at, varius sit amet ipsum."
              }
              desc={"T. (00) 658 54332 E. hello@uxper.co"}
              titleclass={style.t}
              paragraphclass={style.p}
              descclass={style.d}
            />
          </div>
          <div className={style.mapediting}>
            <div className={style.footersub}>
              {textitem.map((e, index) => (
                <div className={style.textmap}>
                  <p key={index}>{e.textt}</p>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        </div>
        <hr class={style.borerline} />
        <div className={style.lastdiv}>
          <TextMap
            paragraph={"© 2023 Uxper. All Right Reserved."}
            paragraphclass={style.p}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
