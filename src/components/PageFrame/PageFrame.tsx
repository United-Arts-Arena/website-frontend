import { ThemeProvider } from "@mui/material";
import React from "react";
import { Header } from "../Header/Header";
import { theme } from "../../styles/theme";

import styles from "./pageFrame.module.scss";

export const PageFrame: React.FC = (props) => (
  <ThemeProvider theme={theme}>
    <div className={styles.pageFrame}>
      <Header />
      {props.children}
    </div>
  </ThemeProvider>
);
