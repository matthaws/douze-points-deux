import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    firebase: firebaseReducer,
    router: connectRouter(history)
  });
