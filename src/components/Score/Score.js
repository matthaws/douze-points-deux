import React from "react";
import { number, string, shape, func } from "prop-types";
import HeartFlag from "components/HeartFlag";
import styles from "./Score.module.css";

const Score = ({ score, country, artist, title, onScoreChange }) => (
  <div className={styles.scoreContainer}>
    <div className={styles.countrySection}>
      <HeartFlag country={country} size="SMALL" />
      <h1>{country}</h1>
    </div>
    <div className={styles.artistSection}>
      <h2>{`"${title}"`}</h2>
      <h2>{artist}</h2>
    </div>
    {Object.keys(score).map(category => (
      <label id={`${country}-${category}`} htmlFor={`${country}-${category}`}>
        <input
          className={styles.input}
          type="number"
          max={12}
          min={0}
          value={score[category]}
          onChange={onScoreChange(category)}
        />
      </label>
    ))}
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
