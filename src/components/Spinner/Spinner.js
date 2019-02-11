import React from "react";
import classnames from "classnames";
import styles from "./Spinner.module.css";

export default () => (
  <div className={styles.container}>
    <div className={classnames(styles.spinner, styles.md)}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
