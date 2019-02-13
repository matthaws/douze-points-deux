import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, getVal } from "react-redux-firebase";
import { reduxForm } from "redux-form";

import { selectCurrentUser } from "store/auth/selectors";
import { selectScoresheetYear } from "store/router/selectors";

import Scoresheet from "./Scoresheet";

const selectInitialValues = (state, year) => {
  const initialValues = {};
  const scores =
    getVal(state.firebase.data, `scores/${state.firebase.auth.uid}/${year}`) ||
    {};

  Object.keys(scores).forEach(country =>
    Object.keys(scores[country]).forEach(
      category =>
        (initialValues[`${country}.${category}`] = scores[country][category])
    )
  );
  return initialValues;
};

const mapStateToProps = (state, ownProps) => {
  const year = selectScoresheetYear(state);
  return {
    year,
    entries: getVal(state.firebase.data, `entries/${year}`),
    initialValues: selectInitialValues(state, year),
    isLoading:
      state.firebase.profile.isEmpty ||
      state.firebase.requesting[`entries/${year}`],
    displayName: state.firebase.profile.displayName,
    userUid: state.firebase.auth.uid
  };
};

const mapFireBaseToProps = (state, ownProps) => {
  const year = selectScoresheetYear(state);
  const currentUser = selectCurrentUser(state);
  return currentUser
    ? [`entries/${year}`, `scores/${currentUser.uid}/${year}`]
    : [];
};

const enhance = compose(
  connect(mapStateToProps),
  reduxForm({ form: "scoresheet", enableReinitialize: true }),
  firebaseConnect(mapFireBaseToProps)
);

export default enhance(Scoresheet);
