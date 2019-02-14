import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, getVal } from "react-redux-firebase";

import { selectCurrentUserUid } from "store/auth/selectors";
import { selectScoresheetYear } from "store/router/selectors";

import Scoresheet from "./Scoresheet";

const mapStateToProps = (state, ownProps) => {
  const year = selectScoresheetYear(state);
  const userUid = selectCurrentUserUid(state);
  return {
    year,
    entries: getVal(state.firebase.data, `entries/${year}`),
    isLoading:
      state.firebase.profile.isEmpty ||
      state.firebase.requesting[`entries/${year}`],
    displayName: state.firebase.profile.displayName,
    scores: getVal(state.firebase.data, `scores/${userUid}/${year}`)
  };
};

const mapFireBaseToProps = props => {
  const { year } = props.match.params;
  const userUid = props.firebase.auth().currentUser.uid;
  return userUid ? [`entries/${year}`, `scores/${userUid}/${year}`] : [];
};

const enhance = compose(
  firebaseConnect(mapFireBaseToProps),
  connect(mapStateToProps)
);

export default enhance(Scoresheet);
