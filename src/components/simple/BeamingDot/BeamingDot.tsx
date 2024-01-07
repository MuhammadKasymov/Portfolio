import React from "react";
import { ReactComponent as GreenDot } from "@icons/greenDot.svg";
import styles from "./BeamingDot.module.scss";

const BeamingDot = () => {
  return (
    <div className={styles.container}>
      <div className={styles.beamingContainer} />
      <GreenDot width={10} height={10} className={styles.greenDot} />
    </div>
  );
};

export default BeamingDot;
