import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/scoresheet/2018" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => {
  return {
    loggedIn: state.firebase.auth.isLoaded && !state.firebase.auth.isEmpty
  };
};

export const AuthRoute = connect(
  mapStateToProps,
  null
)(Auth);

export const ProtectedRoute = connect(
  mapStateToProps,
  null
)(Protected);
