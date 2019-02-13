import React from "react";
import { FormSection, Field } from "redux-form";
import { string, shape } from "prop-types";
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

const Score = ({ score, country, artist, songTitle, onScoreChange }) => (
  <div className={styles.scoreContainer}>
    <div className={styles.header}>
      <div className={styles.countrySection}>
        <HeartFlag country={country} size="SMALL" />
        <h1 className={styles.countryName}>{country}</h1>
      </div>
      <div className={styles.artistSection}>
        <h2 className={styles.title}>{`"${songTitle}"`}</h2>
        <h2>{artist}</h2>
      </div>
    </div>
    <FormSection name={country}>
      <div className={styles.scores}>
        {Object.keys(prettyNames).map(category => (
          <label
            key={`${country}.${category}`}
            htmlFor={`${country}.${category}`}
          >
            {category === "bonusText" ? (
              <Field
                component="textarea"
                id={`${country}.${category}`}
                name={category}
                props={{ className: styles.textarea }}
              />
            ) : (
              <div className={styles.category}>
                {prettyNames[category]}
                <Field
                  component={"input"}
                  id={`${country}.${category}`}
                  name={category}
                  props={{ className: styles.input, max: 12, min: 0 }}
                  type="number"
                />
              </div>
            )}
          </label>
        ))}
      </div>
    </FormSection>
  </div>
);

Score.propTypes = {
  artist: string,
  country: string,
  score: shape({
    song: string,
    dance: string,
    costume: string,
    cheese: string,
    bonusPoints: string,
    bonusText: string
  }),
  songTitle: string
};

export default Score;
