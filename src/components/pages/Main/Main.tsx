import React from "react";
import styles from "./Main.module.scss";
import TopSection from "./parts/TopSection/TopSection";
import GlobalWrapper from "@complex/GlobalWrapper/GlobalWrapper";

const Main = () => {
  return (
    <GlobalWrapper className={styles.container}>
      <TopSection />
    </GlobalWrapper>
  );
};

export default Main;
