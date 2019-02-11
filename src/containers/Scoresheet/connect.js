import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, getVal } from "react-redux-firebase";

import Scoresheet from "./Scoresheet";

const mapStateToProps = (state, ownProps) => {
  const year = ownProps.match.params.year;
  return {
    year,
    entries: getVal(state.firebase.data, `entries/${year}`),
    isLoading:
      state.firebase.profile.isEmpty ||
      state.firebase.requesting[`entries/${year}`],
    displayName: state.firebase.profile.displayName,
    scores:
      state.firebase.auth.uid &&
      getVal(state.firebase.data, `scores/${state.firebase.auth.uid}/${year}`),
    userUid: state.firebase.auth.uid
  };
};

const mapFireBaseToProps = ({ match, firebase }, ownProps) => {
  const year = match.params.year;
  const currentUser = firebase.auth().currentUser;
  return [`entries/${year}`, `scores/${currentUser.uid}/${year}`];
};

const enhance = compose(
  firebaseConnect(mapFireBaseToProps),
  connect(mapStateToProps)
);

export default enhance(Scoresheet);
