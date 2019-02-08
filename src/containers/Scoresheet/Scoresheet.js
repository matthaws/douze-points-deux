import React, { Component, Fragment } from "react";
import { arrayOf, shape, string, number } from "prop-types";

import Score from "components/Score";
import styles from "./Scoresheet.module.css";

const defaultScore = {
  song: "",
  dance: "",
  cheese: "",
  bonusPoints: "",
  bonusText: ""
};

class Scoresheet extends Component {
  handleScoreChange = country => category => e => {
    const { firebase, scores, year, currentUser } = this.props;
    const priorScore = (scores && scores[country]) || defaultScore;
    const newScore = { ...priorScore, [category]: e.target.value };
    firebase
      .database()
      .ref(`scores/${currentUser.uid}/${year}/${country}`)
      .set(newScore);
  };

  render() {
    const { entries, year, isLoading, currentUser, scores } = this.props;
    return isLoading ? (
      <h1>Loading</h1>
    ) : (
      <div className={styles.scoresheetContainer}>
        <h1 className={styles.title}>
          {currentUser.displayName} -- Scores for {year}
        </h1>
        {entries.map(entry => (
          <Fragment key={entry.country}>
            <div className={styles.score}>
              <Score
                {...entry}
                onScoreChange={this.handleScoreChange(entry.country)}
                score={(scores && scores[entry.country]) || defaultScore}
              />
            </div>
            <hr />
          </Fragment>
        ))}
      </div>
    );
  }
}

Scoresheet.propTypes = {
  year: string.isRequired,
  entries: arrayOf(
    shape({
      artist: string,
      songTitle: string,
      country: string,
      finalRanking: number,
      finalScore: number,
      showOrder: number,
      year: number
    })
  ),
  scores: shape({})
};

Scoresheet.defaultProps = {
  entries: [],
  scores: {}
};

export default Scoresheet;
