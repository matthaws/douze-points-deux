import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, getVal } from "react-redux-firebase";

import Scoresheet from "./Scoresheet";

const mapStateToProps = (state, ownProps) => {
  const year = ownProps.match.params.year;
  return {
    year,
    entries: getVal(state.firebase.data, `entries/${year}`),
    isLoading: state.firebase.requesting[`entries/${year}`],
    currentUser: state.auth.currentUser,
    scores: getVal(
      state.firebase.data,
      `scores/${state.auth.currentUser.uid}/${year}`
    )
  };
};

const mapFireBaseToProps = ({ match, firebase }) => {
  const year = match.params.year;
  const currentUser = firebase.auth().currentUser;
  return [`entries/${year}`, `scores/${currentUser.uid}/${year}`];
};

const enhance = compose(
  firebaseConnect(mapFireBaseToProps),
  connect(mapStateToProps)
);

export default enhance(Scoresheet);
