import React, { Component } from "react";
import { shape, func, object } from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { firebaseConnect, isEmpty } from "react-redux-firebase";
import classNames from "classnames";

import styles from "./Auth.module.css";

class AuthPage extends Component {
  state = { version: "signin", email: "", password: "" };

  componentDidUpdate() {
    const { dispatch, auth, firebase } = this.props;
    if (!isEmpty(auth)) {
      dispatch(push("/scoresheets/2019"));
      firebase.logout();
    }
  }

  signInWithGoogle = () => {
    const { firebase } = this.props;
    firebase.login({ provider: "google", type: "popup" });
  };

  signInWithEmailAndPassword = () => {
    const { firebase } = this.props;
    const { version, email, password } = this.state;
    if (version === "signin") {
      firebase.signInWithEmailAndPassword(email, password);
    } else {
      firebase.createUserWithEmailAndPassword(email, password);
    }
  };

  toggleVersion = () => {
    const newVersion = this.state.version === "signin" ? "signout" : "signin";
    this.setState({ version: newVersion });
  };

  update = field => e => this.setState({ [field]: e.target.value });

  render() {
    const { version, email, password } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <label className={styles.label} for="email">
            E-mail
          </label>
          <br />
          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="example@hotmail.com"
            required
            value={email}
            onChange={this.update("email")}
          />
          <label className={styles.label} for="password">
            Password
          </label>
          <br />
          <input
            className={styles.input}
            id="password"
            type="password"
            placeholder="*****"
            pattern=".{3,10}"
            title="Password should be between 3 and 10 characters."
            value={password}
            onChange={this.update("password")}
          />
          <br />

          <button className={classNames(styles.login, styles.button)}>
            {version === "signin" ? "LOGIN" : "SIGN UP"}
          </button>
          <button className={classNames(styles.media, styles.button, styles.g)}>
            Sign in with Google
          </button>
          <br />
          <div
            onClick={this.toggleVersion}
            className={styles.switchVersion}
            href="#"
          >
            {version === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
          </div>
        </div>
      </div>
    );
  }
}

AuthPage.propTypes = {
  firebase: shape({
    login: func.isRequired
  }),
  auth: object
};

AuthPage.defaultProps = {
  auth: undefined
};

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(AuthPage);
