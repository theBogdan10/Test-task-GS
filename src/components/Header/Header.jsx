import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import signOut from "../../img/logout.png";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt=""  />
        <div>
          <h2>News Project</h2>
        </div>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className={styles.btn}>
            <span>Sign Out </span>
            <img id="icon" src={signOut} alt="" />
          </div>
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
