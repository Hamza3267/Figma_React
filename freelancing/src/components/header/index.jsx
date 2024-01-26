import React, { useState } from "react";
import style from "./header.module.scss";
import Button from "../../components/buttons";
import Frame from "../../assets/images/headertag.jpeg";
import { NavLink } from "react-router-dom";
import LoginPage from "../loginform";

import img from "../../assets/images/salary.png";
import bell from "../../assets/images/bell.png";

import Clock from "../../assets/svgg/clock";
import Job from "../../assets/svgg/job";
import Applicant from "../../assets/svgg/applicant";
import Candidate from "../../assets/svgg/candidate";
import Package from "../../assets/svgg/package";
import Messege from "../../assets/svgg/messeges";
import Meeting from "../../assets/svgg/meeting";
import Company from "../../assets/svgg/company";
import Setting from "../../assets/svgg/setting";
import Logout from "../../assets/svgg/logout";

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

const Nav = ({ mainheader, headerbutonsettiing, activeimg }) => {

  const [opencompany, setOpencompany] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const formData = JSON.parse(localStorage.getItem("signInData"));
  const formSignupData = JSON.parse(localStorage.getItem("signupData"));

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


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`${style.main1} ${mainheader}`}>
        <div className={style.main}>
          {activeimg && (
            <div>
              <img src={Frame} alt="" className={style.logoimg} />
            </div>
          )}
          <div style={{ display: "flex", width: "100%" }}>
            <div className={style.link}>
              <div className={style.companyLink}>
                <NavLink to="/" className={style.name}>
                  Home
                </NavLink>
              </div>

              <div className={style.companyLink}>
                <a href="/cats" className={style.name}>
                  Cats
                </a>
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
              <NavLink to="/candidates" className={style.name}>
                Candidates
              </NavLink>

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

                    <NavLink className={style.name} to="/page404">
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

         {formData &&
          <div className={style.divheadersetting}>
            <img src={bell} alt="" style={{ width: "30px" }} />

            <div
              // className={style.dietting}
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
            >
              <div   className={style.dietting}>
              <img src={img} alt="" style={{ width: "30px" }} />
              <p className={style.pname}>{formSignupData.fname}</p>
              </div>
              {active && (
              <div 
              className={style.optionBox}
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
              >
             <Clock />
            <Job />
            <Applicant />
            <Candidate />
            <Package />
            <Messege />
            <Meeting />
            <Company />
            <Setting />
            <Logout />
              </div>
              )} 
            </div>
            <Button title={"Post a Job"} btndiv={style.bundiv} />
          </div>
          } 
          {!formData &&
          <div className={`${style.buton} ${headerbutonsettiing}`}>
            <Button
              title={"Login"}
              btndiv={style.butondiv}
              btnClass={style.btn}
              onClick={openModal}
            />
            <LoginPage
              isOpen={isModalOpen}
              onClose={closeModal}
             
            />
            <Button title={"Post a Job"} btndiv={style.butondiv} />
          </div>
            }
      </div>
    </>
  );
};

export default Nav;
