import React, { useCallback, useEffect, useState } from "react";
import styles from "./NavigationBar.module.scss";
import cn from "classnames";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollEvent = useCallback(() => {
    const top = document.documentElement.scrollTop;
    console.log("🚀 ~ file: NavigationBar.tsx:14 ~ scrollEvent ~ top:", top);
    setIsScrolled(top > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  return (
    <header
      className={cn(styles.container, { [styles.activeContainer]: isScrolled })}
    >
      <span className={styles.logo}>{"<MK />"}</span>
      <div className={styles.rightItems}>
        <ul className={styles.navigation}>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <button className={styles.downloadButton}>Download CV</button>
      </div>
    </header>
  );
};

export default NavigationBar;
