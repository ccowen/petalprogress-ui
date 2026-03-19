import { forwardRef, type InputHTMLAttributes } from "react";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="pp-input-field">
        {label && (
          <label htmlFor={inputId} className="pp-input-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`pp-input ${error ? "pp-input-error" : ""} ${className ?? ""}`}
          {...props}
        />
        {error && <span className="pp-input-error-text">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
