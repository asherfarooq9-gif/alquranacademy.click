import { MapPin, Clock } from "lucide-react";

import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/constants";

const CONTACT_ITEMS = [
  {
    icon: <WhatsAppIcon size={16} />,
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

/** Footer contact column — WhatsApp/email links plus static location and availability. */
export function FooterContact() {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">Get in Touch</h4>
      <div className="mt-4 space-y-3">
        {CONTACT_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 text-sm text-white/70 transition hover:text-accent"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent">
              {item.icon}
            </span>
            <span>
              <span className="block text-xs text-white/40">{item.label}</span>
              <strong className="font-medium text-white/90">{item.value}</strong>
            </span>
          </a>
        ))}
        <div className="flex items-center gap-3 text-sm text-white/70">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent">
            <MapPin className="size-4" />
          </span>
          <span>
            <span className="block text-xs text-white/40">Location</span>
            <strong className="font-medium text-white/90">Rawalpindi, Pakistan</strong>
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-white/70">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent">
            <Clock className="size-4" />
          </span>
          <span>
            <span className="block text-xs text-white/40">Availability</span>
            <strong className="font-medium text-white/90">24/7 All Timezones</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
