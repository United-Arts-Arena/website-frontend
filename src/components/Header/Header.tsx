import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <menu className={styles.menu}>
        <li>
          <Link className={styles.menuItem} to="impressum">
            Impressum
          </Link>
        </li>
      </menu>
    </div>
  </header>
);
