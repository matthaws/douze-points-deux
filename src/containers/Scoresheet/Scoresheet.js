import React, { Component, Fragment } from "react";
import { arrayOf, shape, string, number } from "prop-types";

import Spinner from "components/Spinner";
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
  state = this.props.scores;

  handleScoreChange = country => category => e => {
    this.setState({
      ...this.state,
      [country]: { ...this.state[country], [category]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firebase, year, userUid } = this.props;
    console.log(firebase.database().ref(`scores/${userUid}/${year}`));
    firebase
      .database()
      .ref(`scores/${userUid}/${year}`)
      .set(this.state);
  };

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.scores) !== JSON.stringify(this.props.scores)
    ) {
      this.setState(this.props.scores);
    }
  }

  render() {
    const { entries, year, isLoading, displayName } = this.props;

    return isLoading ? (
      <Spinner />
    ) : (
      <div className={styles.scoreshetContainer}>
        <h1 className={styles.title}>
          {displayName} -- Scores for {year}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Save Scores</button>
          {entries.map(entry => (
            <Fragment key={entry.country}>
              <div className={styles.score}>
                <Score
                  {...entry}
                  score={this.state[entry.country]}
                  year={year}
                  name={entry.country}
                  onScoreChange={this.handleScoreChange(entry.country)}
                />
              </div>
              <hr />
            </Fragment>
          ))}
          <button type="submit">Save Scores</button>
        </form>
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
