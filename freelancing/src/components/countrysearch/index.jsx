import React from "react";
import { useForm } from "react-hook-form";
import pic from "../../assets/images/iconsearch.png";
import icon from "../../assets/images/iconloading.gif";
import style from "./country.module.scss";
import Button from "../buttons";

const CountrySearch = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className={style.container}>
        <img src={pic} alt="search-icon" className={style.img} />

        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className={style.box}
        >
          <input
            {...register("input")}
            className={style.inbox}
            placeholder="Jobs title or keywords"
          />
          <img src={icon} alt="search-icon" className={style.icon} />
          <select
            {...register("country")}
            className={style.selectbox}
            placeholder="select country"
          >
            <option value="select country">Select Country</option>
            <option value="pakistan">Pakistan</option>
            <option value="usa">USA</option>
            <option value="canada">CANADA</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="malaysia">Malaysia</option>
            <option value="uk">Uk</option>
            <option value="uae">UAE</option>
            <option value="russia">RUSSIA</option>
          </select>
        </form>
        <Button title={"Search"} btndiv={style.btn}/>
      </div>

      <div className={style.flexdiv}>
        <p>Popular Searches:</p>
        <p className={style.p}>Data Visualization,</p>
        <p className={style.p}>Business Manager</p>
      </div>
    </>
  );
};

export default CountrySearch;
