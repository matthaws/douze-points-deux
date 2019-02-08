import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { loginUser } from "store/auth/actions";
import AuthPage from "./Auth";

const mapStateToProps = ({ firebase: { auth } }) => ({ auth });
const mapDispatchToProps = { loginUser };

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AuthPage);
