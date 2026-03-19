import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      as = "button",
      href,
      ...props
    },
    ref
  ) => {
    const classNames = [
      "pp-btn",
      `pp-btn-${variant}`,
      `pp-btn-${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (as === "a") {
      return (
        <a href={href} className={classNames}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classNames} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
