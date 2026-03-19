import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./Card.css";

export type CardVariant = "surface" | "dark";
export type CardPadding = "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = "surface", padding = "md", className, children, ...props },
    ref
  ) => {
    const classNames = [
      "pp-card",
      `pp-card-${variant}`,
      `pp-card-pad-${padding}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
