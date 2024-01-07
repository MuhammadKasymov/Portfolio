import React, { ComponentProps } from "react";
import styles from "./ProjectionImage.module.scss";
import classNames from "classnames";

type Props = ComponentProps<"img">;

const ProjectionImage = ({ className, ...containerProps }: Props) => {
  return (
    <div className={styles.container}>
      <img
        className={classNames(styles.img, className)}
        loading="lazy"
        decoding="async"
        {...containerProps}
      />
      <div className={classNames(styles.projectionContainer, className)}>
        <div className={styles.projection} />
      </div>
    </div>
  );
};

export default ProjectionImage;
