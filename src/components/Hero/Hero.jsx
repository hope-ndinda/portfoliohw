import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hope Ndindabahizi</h1>
        <p className={styles.description}>
        I am a passionate software developer and embedded systems enthusiast with experience in Python,Node,React, SQL and PostgreSQL.
         I’ve worked on innovative projects, from building ICT solutions for the community. 
         My interests include solving real-world challenges through technology, cybersecurity, and software innovation.
        </p>
        <a href="mailto:hopenishimwe5@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
