import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SignIn.module.css";
import signIn from "../../img/login.png";

const SignIn = () => {
  return (
    <body>
      <div className={styles.container}>
        <div>
          <NavLink to="/main" style={{ textDecoration: "none" }}>
            <div className={styles.btn}>
              <span>Sign In </span>
              <img id="icon" src={signIn} alt="" />
            </div>
          </NavLink>
        </div>
      </div>
    </body>
  );
};

export default SignIn;
