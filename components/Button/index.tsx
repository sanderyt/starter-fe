import type { FC, ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type ButtonVariant = "primary" | "secondary" | "cta";

interface Props {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const Button: FC<Props> = ({ children, variant = "primary", className }) => {
  return (
    <button
      className={`${cx("button", {
        isPrimary: variant === "primary",
        isCta: variant === "cta",
      })} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
