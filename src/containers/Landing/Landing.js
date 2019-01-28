import React, { Fragment } from "react";
import Auth from "components/Auth";
import netta from "assets/netta.png";
import styles from "./Landing.module.css";

export default () => (
  <div className={styles.landingPage}>
    <h1 className={styles.logo}>
      Douze Points!
      <h2 className={styles.subtitle}>Eurovision Your-o-way!</h2>
    </h1>
    <div className={styles.authContainer}>
      <Auth />
      <div className={styles.splashImage}>
        <img src={netta} alt="Netta" />
      </div>
    </div>
  </div>
);
