"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { NAV_LINKS } from "@/lib/constants";

/** Hamburger-triggered mobile nav drawer, client-only (needs open/close state). */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex size-9 items-center justify-center rounded-lg text-foreground"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full border-t border-border bg-card px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6">
            <WhatsAppCTA label="Free Trial" />
          </div>
        </div>
      )}
    </div>
  );
}
