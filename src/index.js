import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createBrowserHistory } from "history";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";

import App from "containers/App";

import createRootducer from "./rootducer";
import * as serviceWorker from "./serviceWorker";

const fbConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const rrfConfig = {
  userProfile: "users"
};

firebase.initializeApp(fbConfig);

const initialState = {};
const history = createBrowserHistory();

const store = createStore(
  createRootducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

const Root = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
