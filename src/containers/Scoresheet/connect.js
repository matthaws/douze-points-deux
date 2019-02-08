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
    displayName: state.auth.currentUser.displayName
  };
};

const mapFireBaseToProps = props => [`entries/${props.match.params.year}`];

const enhance = compose(
  firebaseConnect(mapFireBaseToProps),
  connect(mapStateToProps)
);

export default enhance(Scoresheet);
