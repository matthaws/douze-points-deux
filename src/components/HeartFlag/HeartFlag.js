import React from "react";
import { string, oneOf } from "prop-types";
import classNames from "classnames";

import styles from "./HeartFlag.module.css";

const flagName = {
  "Czech Republic": "czech_republic",
  "San Marino": "san_marino",
  "United Kingdom": "united-kingdom"
};

const HeartFlag = ({ country, size }) => {
  const name = flagName[country] ? flagName[country] : country.toLowerCase();

  return (
    <img
      className={classNames(
        styles.flagBox,
        size === "SMALL" ? styles.small : styles.large
      )}
      alt={`Flag of ${country}`}
      src={`https://s3.amazonaws.com/douze-points-dev/heart_flags/${name}.png`}
    />
  );
};

HeartFlag.propTypes = {
  country: string,
  size: oneOf(["SMALL", "LARGE"])
};

HeartFlag.defaultProps = {
  size: "SMALL"
};

export default HeartFlag;
