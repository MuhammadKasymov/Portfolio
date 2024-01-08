import React, { ComponentProps, useMemo } from "react";
import styles from "./ProjectionImage.module.scss";
import classNames from "classnames";

type Props = ComponentProps<"img"> & {
  projectionScheme?: "right" | "leftLarge";
};

const ProjectionImage = ({
  className,
  projectionScheme = "right",
  ...containerProps
}: Props) => {
  const projectionStyles = useMemo(
    () =>
      classNames(styles.projection, {
        [styles.projectionRight]: projectionScheme === "right",
        [styles.projectionLeftLarge]: projectionScheme === "leftLarge",
      }),
    [projectionScheme]
  );

  return (
    <div className={styles.container}>
      <img
        className={classNames(styles.img, className)}
        loading="lazy"
        decoding="async"
        {...containerProps}
      />
      <div className={classNames(styles.projectionContainer, className)}>
        <div className={projectionStyles} />
      </div>
    </div>
  );
};

export default ProjectionImage;
