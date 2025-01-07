import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

function Button({ children, ...otherProps }: Props) {
  return <button {...otherProps}>{children}</button>;
}

export default Button;
