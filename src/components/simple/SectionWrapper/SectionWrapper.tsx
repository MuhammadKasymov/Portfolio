import React, { ComponentProps } from "react";
import classNames from "classnames";
import styles from "./SectionWrapper.module.scss";

type Props = ComponentProps<"div"> & {
  sectionClassname?: string;
};

const SectionWrapper = ({ sectionClassname, ...otherProps }: Props) => (
  <section className={classNames(styles.content, sectionClassname)}>
    <div {...otherProps} />
  </section>
);

export default SectionWrapper;
