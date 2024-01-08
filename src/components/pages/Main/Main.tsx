import React from "react";
import styles from "./Main.module.scss";
import TopSection from "./parts/TopSection/TopSection";
import GlobalWrapper from "@complex/GlobalWrapper/GlobalWrapper";
import AboutMeSection from "./parts/AboutMeSection/AboutMeSection";

const Main = () => {
  return (
    <GlobalWrapper className={styles.container}>
      <TopSection />
      <AboutMeSection />
    </GlobalWrapper>
  );
};

export default Main;
