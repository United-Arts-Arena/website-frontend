import { Typography } from "@mui/material";
import React from "react";

import styles from "./block.module.scss";

type Props = {
  headline?: string;
};

export const Block: React.FC<Props> = (props) => (
  <section className={styles.block}>
    <div className={styles.content}>
      {props.headline ? (
        <Typography variant="h2" className={styles.headline}>
          {props.headline}
        </Typography>
      ) : null}
      {props.children}
    </div>
  </section>
);
