import type { HTMLAttributes, ReactNode } from "react";
import "./Badge.css";

export type BadgeVariant = "sage" | "coral" | "amber" | "blue" | "muted";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({
  variant = "sage",
  className,
  children,
  ...props
}: BadgeProps) {
  const classNames = [`pp-badge`, `pp-badge-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
}
