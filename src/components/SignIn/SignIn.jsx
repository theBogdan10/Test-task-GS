import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <body>
    <div className={styles.container}>
      <div>
        <NavLink to="/main">
          <button>Sign In</button>
        </NavLink>
      </div>
    </div>
    </body>
  );
};

export default SignIn;
