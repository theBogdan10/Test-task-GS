import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/main/health" activeClassName={s.activeLink}>
        Health
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/main/sports" activeClassName={s.activeLink}>
        Sports
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/main/technology" activeClassName={s.activeLink}>
        Technology
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/main/entertainment" activeClassName={s.activeLink}>Entertainment</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink exact to="/main" activeClassName={s.activeLink}>Main Page</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
