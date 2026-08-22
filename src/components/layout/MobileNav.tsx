"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const NAV = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Lock background scroll while open, move focus into the panel, and restore
  // focus to the opener on close.
  useEffect(() => {
    if (!open) return;
    const opener = openerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [open]);

  // Escape to close + simple focus trap within the dialog.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const root = overlayRef.current;
      if (!root) return;
      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="inline-flex h-11 items-center gap-2 font-mono text-label uppercase tracking-widest text-ink"
      >
        Menu
      </button>

      {open ? (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[100] bg-paper"
        >
          {/* Solid, theme-aware panel. Full-height, above all content. */}
          <div className="flex h-full flex-col px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-label uppercase tracking-widest text-faint">
                Navigation
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="inline-flex h-11 items-center font-mono text-label uppercase tracking-widest text-ink transition-colors hover:text-accent"
              >
                Close
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-8 flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="border-b border-hairline py-5 font-display text-3xl text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
