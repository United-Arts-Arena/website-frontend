import React from "react";
import { Logo } from "../../components/Logo/Logo";

import styles from "./home.module.scss";

export const Home: React.FC = () => (
  <main>
    <div className={styles.intro}>
      <Logo className={styles.logo} pulse />
    </div>
  </main>
);
