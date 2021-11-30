import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./header.module.scss";

export const Header: React.FC = () => {
  const MenuEntries = (
    <>
      <li>
        <Link className={styles.menuItem} to="faq">
          FAQ
        </Link>
      </li>
      <li>
        <Link className={styles.menuItem} to="artists">
          Artist Signup
        </Link>
      </li>
      <li>
        <Link className={styles.menuItem} to="partners">
          Partner Signup
        </Link>
      </li>
    </>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <menu className={styles.menu}>{MenuEntries}</menu>
          <div className={styles.logoWrapper}>
            <Link to="/">
              <img className={styles.logo} src={logo} alt="uaa logo" />
            </Link>
          </div>
        </div>
      </header>
      <label htmlFor="menuCheckbox" className={styles.mobileMenuOpen}>
        <MenuIcon className={styles.icon} />
      </label>
      <input
        className={styles.menuCheckbox}
        type="checkbox"
        name="menuCheckbox"
        id="menuCheckbox"
      />
      <menu className={styles.menuMobile}>
        <label htmlFor="menuCheckbox" className={styles.mobileMenuClose}>
          <CloseIcon className={styles.icon} />
        </label>
        {MenuEntries}
      </menu>
    </>
  );
};
