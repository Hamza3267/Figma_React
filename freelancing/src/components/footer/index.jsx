import React from "react";
import style from "./footer.module.scss";

import linkdin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";

const footeritems = [
  {
    about: "About us",
    job: "Jobs",
    privacy: "Privacy Policy",
    pic: linkdin,
    lind: "Linkedin",
  },
  {
    about: "Carrer",
    job: "Companies",
    privacy: "Term of Use",
    pic: facebook,
    lind: "Facebook",
  },
  {
    about: "Blogs",
    job: "Candidates",
    privacy: "Help center",
    pic: insta,
    lind: "Instagram",
  },
  {
    about: "FAQ's",
    job: "Pricing",
    privacy: "Updates",
    pic: youtube,
    lind: "Youtube",
  },
  {
    about: "Contact",
    job: "Partner",
    privacy: "Documentation",
    pic: twitter,
    lind: "Twitter",
  },
];

const Footer = () => {
  return (
    <>
      <div className={style.mainconainer}>
        {footeritems.map((e, index) => (
          <div className={style.flex} key={index}>
            <p className={style.name}>{e.about}</p>
            <p className={style.name}>{e.job} </p>
            <p className={style.name}>{e.privacy}</p>
            <div className={style.divflex}>
              <img src={e.pic} alt="" className={style.picture} />
              <p className={style.name}>{e.lind}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
