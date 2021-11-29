import React from "react";
import classnames from "classnames";

import styles from "./logo.module.scss";

import logo from "../../assets/logo.png";

type Props = {
  pulse: boolean;
};

export const Logo: React.FC<Props> = (props) => (
  <span className={styles.logoWrapper}>
    <img className={styles.logo} src={logo} alt="uaa logo" />
    <img
      className={classnames(styles.logo, styles.logoAlt, styles.logoAlt1)}
      src={logo}
      alt="uaa logo"
    />
    <img
      className={classnames(styles.logo, styles.logoAlt, styles.logoAlt2)}
      src={logo}
      alt="uaa logo"
    />
  </span>
);
