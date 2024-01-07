import React, { ComponentProps } from "react";
import classNames from "classnames";
import styles from "./MediaButton.module.scss";

type Props = ComponentProps<"button"> & {
  link: string;
};
type ClickEv = React.MouseEvent<HTMLButtonElement, MouseEvent>;

const MediaButton = ({
  children,
  link,
  className,
  onClick,
  ...divProps
}: Props) => {
  const handleClick = (ev: ClickEv) => {
    window.open(link);
    onClick && onClick(ev);
  };

  return (
    <button
      {...divProps}
      className={classNames(styles.container, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MediaButton;
