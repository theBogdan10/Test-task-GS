import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SignIn.module.css";
import signInIcon from "../../img/login.png";

const SignIn = () => {
  const [info, setInfo] = useState({ name: "", surname: "" });

  return (
    <body>
      <div className={styles.container}>
        <div className={styles.child}>
          <div>
            <input
              type="text"
              placeholder="Name"
              onChange={el => setInfo({ name: el })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Surname"
              onChange={el => setInfo({ surname: el })}
            />
          </div>
          <div>
            <NavLink to="/main" style={{ textDecoration: "none" }}>
              <div className={styles.btn}>
                <span>Sign In </span>
                <img id="icon" src={signInIcon} alt="" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignIn;
