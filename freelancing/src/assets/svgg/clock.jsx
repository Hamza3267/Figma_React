import React from "react";
import style from "./clocksvg.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
const Clock = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div
        className={
          location.pathname === "/dashboard" ? style.svgdash : style.svgcla
        }
      >
        <div onClick={() => handleDashboard()}>
          <div className={style.subdiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#"
            >
              <g clip-path="url(#clip0_4488_7023)">
                <path
                  d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4ZM15.833 7.337C16.07 7.171 16.392 7.199 16.596 7.404C16.8 7.608 16.826 7.93 16.659 8.164C14.479 11.21 13.279 12.842 13.061 13.061C12.475 13.646 11.525 13.646 10.939 13.061C10.354 12.475 10.354 11.525 10.939 10.939C11.313 10.566 12.944 9.365 15.833 7.337ZM17.5 11C18.052 11 18.5 11.448 18.5 12C18.5 12.552 18.052 13 17.5 13C16.948 13 16.5 12.552 16.5 12C16.5 11.448 16.948 11 17.5 11ZM6.5 11C7.052 11 7.5 11.448 7.5 12C7.5 12.552 7.052 13 6.5 13C5.948 13 5.5 12.552 5.5 12C5.5 11.448 5.948 11 6.5 11ZM8.818 7.404C9.208 7.794 9.208 8.427 8.818 8.818C8.428 9.208 7.794 9.208 7.404 8.818C7.014 8.428 7.014 7.794 7.404 7.404C7.794 7.014 8.427 7.014 8.818 7.404ZM12 5.5C12.552 5.5 13 5.948 13 6.5C13 7.052 12.552 7.5 12 7.5C11.448 7.5 11 7.052 11 6.5C11 5.948 11.448 5.5 12 5.5Z"
                  fill="#"
                ></path>
              </g>
            </svg>

            <p>Dashboard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
