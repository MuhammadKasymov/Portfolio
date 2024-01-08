import React, { ComponentProps } from "react";
import styles from "./SectionTitle.module.scss";
import classNames from "classnames";

type Props = ComponentProps<"div"> & {
  title: string;
};

const SectionTitle = ({ title, className, ...divProps }: Props) => (
  <div {...divProps} className={classNames(styles.container, className)}>
    <span className={styles.title}>{title}</span>
  </div>
);

export default SectionTitle;
