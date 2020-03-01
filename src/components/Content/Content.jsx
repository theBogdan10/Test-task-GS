import React from "react";
import styles from "./Content.module.css";
import { NavLink } from "react-router-dom";
import healthImg from "../../img/medical_news.png";
import technologyImg from "../../img/science.png";
import sportImg from "../../img/sport.png";
import entertainmentImg from "../../img/entertainment.png";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
      <h2>Health</h2>
          <NavLink to="/main/health">
            <img src={healthImg} alt=""></img>
            
          </NavLink>
          
          <h2>Sports</h2>

          <NavLink to="/main/sports">
            <img src={sportImg} alt=""></img>
          </NavLink>
      
          <h2>Technology</h2>

          <NavLink to="/main/technology">
            <img src={technologyImg} alt=""></img>
          </NavLink>
      
          <h2>Entertainment</h2>

          <NavLink to="/main/entertainment">
            <img src={entertainmentImg} alt=""></img>
          </NavLink>
        
      </div>
    </div>
  );
};

export default Content;
