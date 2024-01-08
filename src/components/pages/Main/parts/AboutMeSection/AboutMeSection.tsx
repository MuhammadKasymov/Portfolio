import React from "react";
import SectionTitle from "@simple/SectionTitle/SectionTitle";
import SectionWrapper from "@simple/SectionWrapper/SectionWrapper";
import ProjectionImage from "@simple/ProjectionImage/ProjectionImage";
import styles from "./AboutMeSection.module.scss";

const dummyImage =
  "https://123flatfeeminnesota.com/wp-content/uploads/2019/07/girl-taking-photo1.jpg";

const AboutMeSection = () => {
  return (
    <SectionWrapper
      sectionClassname={styles.section}
      className={styles.container}
    >
      <SectionTitle title="About me" />
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <ProjectionImage
            projectionScheme="leftLarge"
            className={styles.img}
            src={dummyImage}
            alt="Big profile image"
          />
        </div>
        <div className={styles.aboutContainer}>
          <h2 className={styles.title}>Curious about me? Here you have it:</h2>
          <p className={styles.paragraph}>
            I&#39;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className={styles.paragraph}>
            I&#39;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className={styles.paragraph}>
            I&#39;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className={styles.paragraph}>
            I&#39;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className={styles.paragraph}>
            I&#39;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className={styles.paragraph}>
            I&#39;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMeSection;
