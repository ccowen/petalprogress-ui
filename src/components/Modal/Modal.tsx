import { useEffect, useCallback, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: number;
}

export function Modal({ open, onClose, children, maxWidth = 400 }: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [open, handleKeyDown]);

  if (!open) return null;

  return createPortal(
    <div className="pp-modal-overlay" onClick={onClose}>
      <div
        className="pp-modal-content"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="pp-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
