import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import signOut from "../../img/logout.png";
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img
          src="https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png"
          alt=""
        />
        <div>
          <h2>News Project</h2>
        </div>
        <NavLink to="/">
          <div className={styles.btn}>
            Sign Out
            <img id='icon' src={signOut} alt="" />
		  </div>
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
