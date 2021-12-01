import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.module.scss";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Link className={styles.item} to="impressum">
      Impressum
    </Link>
    <Link className={styles.item} to="privacy">
      Privacy &amp; Security
    </Link>
  </footer>
);
