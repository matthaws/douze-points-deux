import React, { Fragment } from "react";
import { number, string, shape, func } from "prop-types";
import HeartFlag from "components/HeartFlag";
import styles from "./Score.module.css";

const prettyNames = {
  song: "Song",
  dance: "Dance",
  costume: "Costume",
  cheese: "Eurocheese",
  bonusPoints: "Bonus Pts.",
  bonusText: ""
};

const Score = ({ score, country, artist, title, onScoreChange }) => (
  <div className={styles.scoreContainer}>
    <div className={styles.header}>
      <div className={styles.countrySection}>
        <HeartFlag country={country} size="SMALL" />
        <h1 className={styles.countryName}>{country}</h1>
      </div>
      <div className={styles.artistSection}>
        <h2 className={styles.title}>{`"${title}"`}</h2>
        <h2>{artist}</h2>
      </div>
    </div>
    <div className={styles.scores}>
      {Object.keys(score).map(category => (
        <label id={`${country}-${category}`} htmlFor={`${country}-${category}`}>
          {category === "bonusText" ? (
            <textarea className={styles.textarea}>{score[category]}</textarea>
          ) : (
            <div className={styles.category}>
              {prettyNames[category]}
              <input
                className={styles.input}
                type="number"
                max={12}
                min={0}
                value={score[category]}
                onChange={onScoreChange(category)}
              />
            </div>
          )}
        </label>
      ))}
    </div>
  </div>
);

Score.propTypes = {
  artist: string,
  country: string,
  onScoreChange: func,
  score: shape({
    song: number,
    dance: number,
    costume: number,
    cheese: number,
    bonusPoints: number,
    bonusText: string
  }),
  title: string
};

export default Score;
