import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/constants";

/** Footer brand column — logo, tagline, trust badges, social links. */
export function FooterBrand() {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span className="font-arabic text-xl text-accent">القرآن</span>
        <span className="font-heading text-base font-bold text-white">Al Quran Academy</span>
      </div>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
        Illuminating hearts through the words of Allah. Online Quran education trusted by
        families worldwide since 2012.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
          ✓ Female Teachers
        </span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
          ✓ Child Safe
        </span>
      </div>
      <div className="mt-5 flex gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <WhatsAppIcon size={16} />
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          aria-label="Email"
          className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
