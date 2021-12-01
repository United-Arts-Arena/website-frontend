import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./header.module.scss";
import classNames from "classnames";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const MenuEntries = (
    <>
      <li
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <Link className={styles.menuItem} to="/">
          Home
        </Link>
      </li>
      <li
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <Link className={styles.menuItem} to="faq">
          FAQ
        </Link>
      </li>
      <li
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <Link className={styles.menuItem} to="artists">
          Artist Signup
        </Link>
      </li>
      <li
        onClick={() => {
          setMenuOpen(false);
        }}
      >
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
      <div
        className={styles.mobileMenuOpen}
        onClick={() => {
          setMenuOpen(true);
        }}
      >
        <MenuIcon className={styles.icon} />
      </div>
      <menu
        className={classNames(styles.menuMobile, { [styles.open]: menuOpen })}
      >
        <div
          className={styles.mobileMenuClose}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <CloseIcon className={styles.icon} />
        </div>
        {MenuEntries}
      </menu>
    </>
  );
};
