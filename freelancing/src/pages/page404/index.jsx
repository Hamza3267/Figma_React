import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './page404.module.scss'
import Nav from '../../components/header/header'
import TextMap from '../../components/textmapping'
import pic from '../../assets/images/notfound.png'
import mail from "../../assets/images/mailbox.png";
import Input from "../../components/input";
import Footer from "../../components/footer";
import PicText from "../../components/pictextcard";
import Button from "../../components/buttons";

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
const Page404 = () => {
  return (
    <>
        <Nav />
        <div className={style.maindiv}>
            <div>
            <TextMap title={"Hmm, that didn’t work."} 
            paragraph={"The page you are looking for cannot be found"} 
            titleclass={style.text}
            paragraphclass={style.para}      
            />
            <img src={pic} alt='' className={style.pic}/>
            <div className={style.butondiv}>
            <NavLink to="/" className={style.name}>
                  Go to home page
                </NavLink>
                </div>
        </div>
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
  )
}

export default Page404
