import React, { Component, Fragment } from "react";
import { arrayOf, shape, string, number } from "prop-types";

import Score from "components/Score";
import styles from "./Scoresheet.module.css";

const defaultScore = {
  song: 0,
  dance: 0,
  cheese: 0,
  bonusPoints: 0,
  bonusText: ""
};

class Scoresheet extends Component {
  state = {};

  handleScoreChange = country => category => e => {};

  render() {
    const { entries, year, isLoading, displayName } = this.props;
    return isLoading ? (
      <h1>Loading</h1>
    ) : (
      <div className={styles.scoresheetContainer}>
        <h1 className={styles.title}>
          {displayName} -- Scores for {year}
        </h1>
        {entries.map(entry => (
          <Fragment key={entry.country}>
            <div className={styles.score}>
              <Score
                {...entry}
                onScoreChange={this.handleScoreChange(entry.country)}
                score={this.props.scores[entry.country] || defaultScore}
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
      finalRanking: 0,
      finalScore: number,
      showOrder: number,
      year: number
    })
  ),
  scores: arrayOf(
    shape({
      song: number,
      dance: number,
      cheese: number,
      bonusPoints: number,
      bonusText: string
    })
  )
};

Scoresheet.defaultProps = {
  entries: [],
  scores: []
};

export default Scoresheet;
