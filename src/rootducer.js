import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { connectRouter } from "connected-react-router";
import auth from "store/auth/reducer";

export default history =>
  combineReducers({
    auth,
    firebase: firebaseReducer,
    router: connectRouter(history)
  });
