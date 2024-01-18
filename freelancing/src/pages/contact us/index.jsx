import React from "react";
import style from "./contactus.module.scss";
import Nav from "../../components/header/header";
import TextMap from "../../components/textmapping";
import Image from "../../components/img";
import PicText from "../../components/pictextcard";
import mail from "../../assets/images/mailbox.png";
import Input from "../../components/input";
import Footer from "../../components/footer";
import Button from "../../components/buttons";
import map from "../../assets/images/map.png";
import HookForm from "../../components/hookform";
const contactitems = [
  {
    tite: "Phone number",
    paraa: "(00) 723 445 793",
  },
  {
    tite: "Email address",
    paraa: "hello@uxper.co",
  },
  {
    tite: "Address",
    paraa: "2866 Oakway Lane, New York, USA",
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
const ContactUs = () => {
  return (
    <>
      <Nav />
      <div className={style.maindv}>
        <TextMap
          title={"Contact Us"}
          paragraph={
            "Have a question or need more information? Just drop us a line!"
          }
          titleclass={style.title}
          paragraphclass={style.para}
        />
        <div className={style.contactusdiv}>
          <div className={style.maptext}>
            {contactitems.map((e, index) => (
              <div>
                <TextMap
                  key={index}
                  title={e.tite}
                  paragraph={e.paraa}
                  titleclass={style.titlecomp}
                  paragraphclass={style.paracomp}
                />
              </div>
            ))}
            <Image img={map} imgsetting={style.imgset} />
          </div>
         
          <div className={style.formdiv}>
          <TextMap title={"Send us a message"} titleclass={style.titlecomp} />
            <HookForm />
          </div>
        </div>
      </div>
      <div className={style.lastportion}>
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

export default ContactUs;
