import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";

/** Top strip of the footer — reach banner + free-trial CTA. */
export function FooterTopbar() {
  return (
    <div className="border-b border-white/10 bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-4 text-center sm:flex-row sm:text-left">
        <span className="text-sm text-primary-foreground/90">
          🕌 Serving students across 15+ countries since 2012
        </span>
        <WhatsAppCTA label="Start Free Trial" />
      </div>
    </div>
  );
}
