"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { WHATSAPP_URL } from "@/lib/constants";

const SCROLL_THRESHOLD = 500;

/** Scroll-triggered floating WhatsApp button + back-to-top, matching the old site's behavior. */
export function FloatingWhatsAppFab() {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastThreshold(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {isPastThreshold && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-lg ring-1 ring-border transition hover:-translate-y-0.5"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition hover:-translate-y-0.5"
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}
