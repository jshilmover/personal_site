import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <a
        href="https://github.com/jshilmover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/icons/github.svg"}
          width={40}
          height={40}
          alt="Link to my github page"
          style={{ marginRight: "1em" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jory-shilmover/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/icons/linkedin.svg"}
          width={40}
          height={40}
          alt="Link to my linkedin page"
        />
      </a>
    </div>
  );
};
