import { Instagram, Twitter } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import Obfuscate from "react-obfuscate";

import styles from "./contact.module.scss";

export const Contact: React.FC = () => (
  <main className={styles.contact}>
    <Typography className={styles.headline} variant="h2" align="left">
      Contact us
    </Typography>
    <Typography className={styles.content} align="left">
      <div className={styles.description}>
        Contact us through any of our channels and we will come back to you as
        fast as possible.
      </div>
      <div className={styles.email}>
        <Obfuscate
          email="press@unitedartsarena.com"
          headers={{
            subject: "Hello UAA from your website!",
          }}
        />
      </div>
    </Typography>
    <div className={styles.social}>
      <a
        className={styles.item}
        href="https://twitter.com/unitedartsarena"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
      </a>
      <a
        className={styles.item}
        href="https://www.instagram.com/unitedartsarena/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram />
      </a>
    </div>
  </main>
);
