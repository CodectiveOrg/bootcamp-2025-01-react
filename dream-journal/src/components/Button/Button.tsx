import { ComponentProps } from "react";

import clsx from "clsx";

import styles from "./Button.module.css";

type Shape = "rectangle" | "circle";
type Size = "small" | "large";

type Props = ComponentProps<"button"> & {
  shape?: Shape;
  size?: Size;
  sameWidthHeight?: boolean;
};

function Button({
  children,
  className,
  shape = "rectangle",
  size = "small",
  sameWidthHeight = false,
  ...otherProps
}: Props) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[shape],
        styles[size],
        sameWidthHeight && styles["same-width-height"],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
