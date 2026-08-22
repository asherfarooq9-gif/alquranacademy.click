"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NAV_LINKS } from "@/lib/constants";

/** Sticky site header shared across all 8 pages, with a scroll-state shadow toggle. */
export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-card/95 backdrop-blur transition-shadow ${
        isScrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-arabic text-xl text-primary">القرآن</span>
          <span className="font-heading text-base font-bold text-primary">Al Quran Academy</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppCTA label="Free Trial" />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
