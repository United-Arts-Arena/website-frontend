import { Typography } from "@mui/material";
import React from "react";

import styles from "./newsletterSignup.module.scss";

export const NewsletterSignup: React.FC = () => (
  <>
    <Typography variant="h3" className={styles.headline}>
      Signup to our newsletter!
    </Typography>
    <span>
      <div id="guestoo-registerForm"></div>
      <iframe
        className={styles.iframe}
        title="guestoo_frame"
        src="https://app.guestoo.de/public/event/4ec66dd8-b206-4358-8a03-638ead270c63/frame?hideCookieinfo=true&lang=de&scrollId=guestoo-registerForm"
        id="guestooFrame"
      >
        {" "}
      </iframe>
      <script
        type="text/javascript"
        src="https://app.guestoo.de/frame-support.js"
      ></script>
    </span>
  </>
);
