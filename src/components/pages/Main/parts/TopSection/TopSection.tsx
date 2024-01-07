import React from "react";
import styles from "./TopSection.module.scss";
import ProjectionImage from "@simple/ProjectionImage/ProjectionImage";
import { ReactComponent as Location } from "@icons/location.svg";
import { ReactComponent as Telegram } from "@icons/media/telegram.svg";
import { ReactComponent as Git } from "@icons/media/git.svg";
import BeamingDot from "@simple/BeamingDot/BeamingDot";
import MediaButton from "@/components/simple/MediaButton/MediaButton";
import { telegram } from "@/constants/link";
import SectionWrapper from "@/components/simple/SectionWrapper/SectionWrapper";

const dummyImg =
  "https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-1169775.jpg";

const TopSection = () => {
  return (
    <SectionWrapper className={styles.container}>
      <div className={styles.leftItems}>
        <div>
          <h1 className={styles.title}>
            Hi, I&#39;m Muhammad <span>👋</span>
          </h1>
          <p className={styles.about}>
            I&#39;m a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className={styles.subAbouts}>
          <div className={styles.subAboutContainer}>
            <Location />
            <p className={styles.about}>Russia, Yekaterinburg</p>
          </div>
          <div className={styles.subAboutContainer}>
            <BeamingDot />
            <p className={styles.about}>Available for hunting</p>
          </div>
        </div>
        <div className={styles.mediaContainer}>
          <MediaButton link={telegram}>
            <Git />
          </MediaButton>
          <MediaButton link={telegram}>
            <Telegram />
          </MediaButton>
        </div>
      </div>
      <ProjectionImage
        className={styles.img}
        src={dummyImg}
        alt="Profile image"
      />
    </SectionWrapper>
  );
};

export default TopSection;
