import React, { useState } from "react";
import style from "./header.module.scss";
import Button from "../../components/buttons";
import Frame from "../../assets/images/headertag.jpeg";
import { NavLink } from "react-router-dom";

const pagesitem = [
  {
    text: "About Team",
  },
  {
    text: "Become Employer",
  },
  {
    text: "Job Alerts",
  },
  {
    text: "All Companies",
  },
  {
    text: "All Locations",
  },
  {
    text: "All Categories",
  },

  {
    text: "Carrer",
  },
  {
    text: "Pricing Table",
  },
  {
    text: "FAQs",
  },
  {
    text: "Privacy Policy",
  },
  {
    text: "Coming Soon",
  },
];
const tabsData = [
  {
    id: 1,
    title: "Job Categories",
    content: "first erat volutpat. Donec .",
  },
  {
    id: 2,
    title: "Company Categories",
    content: " nulla iacpendbia.",
  },
];
const Nav = () => {
  const [opencompany, setOpencompany] = useState(false)
  const [showOptions, setShowOptions] = useState(false);
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const MouseEnter = () => {
    setActive(true);
  };

  const MouseLeave = () => {
    setActive(false);
  };
  const Mousein = () => {
    setOpencompany(true);
  };

  const Mouseout = () => {
    setOpencompany(false);
  };
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
        
      <div className={style.main1}>
    
        <div className={style.main}>
          <img src={Frame} alt="" className={style.logoimg} />
          <div style={{ display: "flex" }}>
            <div className={style.link}>
              <div className={style.companyLink}>
                <NavLink to="/" className={style.name}>
                  Home
                </NavLink>
              </div>
              <div
                className={style.companyLink}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
              >
                <a href="/cats" className={style.name}>
                  Cats
                </a>
                {active && (
                  <div
                    className={style.optionBox}
                    onMouseEnter={MouseEnter}
                    onMouseLeave={MouseLeave}
                  >
                    {tabsData.map((tab, index) => (
                      <div
                        className={`${style.titlee} ${
                          activeTab === index ? style.activeTab : ""
                        }`}
                        key={index}
                      >
                        <h3
                          onClick={() => handleTabClick(index)}
                          className={style.h3}
                        >
                          {tab.title}
                        </h3>
                      </div>
                    ))}
                    <p className={style.para}>{tabsData[activeTab]?.content}</p>
                  </div>
                )}
              </div>
              <a href="/jobs" className={style.name}>
                Jobs
              </a>
              <div
                className={style.companyLink}
                onMouseEnter={Mousein}
                onMouseLeave={Mouseout}
              >
              <a href="/candidates" className={style.name}>
                Companies             
              </a>
              {opencompany && (
                  <div
                    className={style.optionsBox}
                    onMouseEnter={Mousein}
                    onMouseLeave={Mouseout}
                  >
                    <NavLink className={style.nam} to="/company">
                      International jobs
                    </NavLink>
                   
                  </div>
                )}
              </div>
              <a href="/candidates" className={style.name}>
                Candidates
              </a>
              <div
                className={style.companyLink}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a href="/pages" className={style.name}>
                  Pages
                </a>
                {showOptions && (
                  <div
                    className={style.optionsBox}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink className={style.nam} to="/contactus">
                      Contact us
                    </NavLink>
                    <NavLink className={style.nam} to="/aboutus">
                      About us
                    </NavLink>
                    {pagesitem.map((e, index) => (
                      <p key={index} className={style.list}>
                        {e.text}
                      </p>
                    ))}

                    <NavLink className={style.nam} to="/page404">
                      Page 404
                    </NavLink>
                  </div>
                )}
              </div>

              <div className={style.companyLink}>
                <a href="/blogs" className={style.name}>
                  Blogs
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.buton}>
          <Button
            title={"Login"}
            btndiv={style.butondiv}
            btnClass={style.btn}
          />
          <Button title={"Post a Job"} btndiv={style.butondiv} />
        </div>
      </div>
    </>
  );
};

export default Nav;
