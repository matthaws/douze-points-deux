import React, { Fragment } from "react";
import Auth from "components/Auth";
import netta from "assets/netta.png";
import styles from "./Landing.module.css";
import Score from "components/Score";

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
    {/* <Score
      country="Belgium"
      artist="Belgian Waffle"
      title="Pour Syrup On Me"
      score={{
        song: 10,
        costume: 8,
        dance: 5,
        cheese: 12,
        bonusPoints: 1000,
        bonusText: "cutest waffle ever"
      }}
      onScoreChange={category => e => console.log(category, e.target.value)}
    /> */}
  </div>
);
