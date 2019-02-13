import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";

export default history =>
  combineReducers({
    firebase: firebaseReducer,
    form: formReducer,
    router: connectRouter(history)
  });
