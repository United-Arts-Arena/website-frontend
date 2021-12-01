import React from "react";

import styles from "./artistSignup.module.scss";

export const ArtistSignup: React.FC = () => (
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
);
