import React from "react";
import Auth from "components/Auth";
import netta from "assets/netta.png";
import styles from "./Landing.module.css";

export default () => (
  <div className={styles.landingPage}>
    <h1 className={styles.logo}>
      Douze Points!
      <div className={styles.subtitle}>Eurovision Your-o-way!</div>
    </h1>
    <div className={styles.authContainer}>
      <Auth />
      <div className={styles.splashImage}>
        <img src={netta} alt="Netta" />
      </div>
    </div>
  </div>
);
