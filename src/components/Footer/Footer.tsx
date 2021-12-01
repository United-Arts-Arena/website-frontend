import { Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.module.scss";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.area}>
        <Link className={styles.item} to="impressum">
          Impressum
        </Link>
        <Link className={styles.item} to="privacy">
          Privacy &amp; Security
        </Link>
      </div>
      <div className={styles.area}>
        <a
          className={styles.item}
          href="https://www.instagram.com/unitedartsarena/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          className={styles.item}
          href="https://twitter.com/unitedartsarena"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </div>
    </div>
  </footer>
);
