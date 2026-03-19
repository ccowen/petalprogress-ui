import type { ReactNode } from "react";
import "./Nav.css";

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavProps {
  logo?: ReactNode;
  links?: NavLink[];
  actions?: ReactNode;
  variant?: "marketing" | "app";
}

export function Nav({
  logo,
  links = [],
  actions,
  variant = "marketing",
}: NavProps) {
  return (
    <nav className={`pp-nav pp-nav-${variant}`}>
      <div className="pp-nav-inner">
        {logo && <div className="pp-nav-logo">{logo}</div>}
        {links.length > 0 && (
          <div className="pp-nav-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`pp-nav-link ${link.active ? "pp-nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        {actions && <div className="pp-nav-actions">{actions}</div>}
      </div>
    </nav>
  );
}
