import React from "react";
import { Header } from "../Header/Header";

import styles from "./pageFrame.module.scss";

export const PageFrame: React.FC = (props) => (
  <div className={styles.pageFrame}>
    <Header />
    {props.children}
  </div>
);
