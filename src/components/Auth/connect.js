import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import AuthPage from "./Auth";

const mapStateToProps = ({ firebase: { auth } }) => ({ auth });

export default compose(
  firebaseConnect(),
  connect(mapStateToProps)
)(AuthPage);
