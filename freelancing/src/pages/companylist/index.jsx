import React, { useState } from "react";
import style from "./company.module.scss";
import Nav from "../../components/header/header";
import TextMap from "../../components/textmapping";
import PicText from "../../components/pictextcard";
import mail from "../../assets/images/mailbox.png";
import Input from "../../components/input";
import Footer from "../../components/footer";
import Button from "../../components/buttons";
import Block from "../../components/blocks";
import Search from "../../components/formsearch";
import backgroundimg from "../../assets/images/Banner.png";
import Selectform from "../../components/selectform";
import { useForm } from "react-hook-form";


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
const Company = () => {
  const { register, handleSubmit, setValue, watch, getValues, reset } = useForm(
    {
      defaultValue: {
        country: "",
        state: "",
        cities: "",
        range100200: false,
        range200300: false,
        range300400: false,
        range400500: false,
        range50100: false,
        rating: [],
      },
    }
  );
  const overlaystyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      <Nav />
      <div style={overlaystyle} className={style.maindiv}>
        <TextMap
          title={"Companies Hiring Internationally"}
          titleclass={style.title}
        />
        <div className={style.searchdiv}>
          <Search 
          
          />
        </div>
      </div>
      <div className={style.midportion}>
        <div className={style.sideform}>
          <Selectform
            setSelectedValue={setSelectedValue}
            handleSubmit={handleSubmit}
            setValue={setValue}
            reset={reset}
            register={register}
            watch={watch}
            getValues={getValues}
          />
        </div>

        <div className={style.blockdiv}>
          <Block
            carousalitemset={style.cardset}
            boxset={style.box}
            btntextflex={style.flexibility}
            selectedValue={selectedValue}
            gridMode={style.gridsetting}
            buttons={true}
            carousall={style.widthsettingblock}
          />
        </div>
      </div>

      <div>
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
      
      </div>
    </>
  );
};

export default Company;
