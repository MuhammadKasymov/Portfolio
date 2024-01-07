import React, { ComponentProps } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

type Props = ComponentProps<"div">;

const GlobalWrapper = ({ children, ...divProps }: Props) => (
  <div {...divProps}>
    <NavigationBar />
    <div>{children}</div>
  </div>
);

export default GlobalWrapper;
