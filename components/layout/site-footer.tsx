import { FooterBrand } from "@/components/layout/footer-brand";
import { FooterContact } from "@/components/layout/footer-contact";
import { FooterLinks } from "@/components/layout/footer-links";
import { FooterTopbar } from "@/components/layout/footer-topbar";
import { COUNTRY_COUNT, FOUNDING_DATE, RATING_VALUE, STUDENT_COUNT } from "@/lib/constants";

const STATS = [
  { value: STUDENT_COUNT, label: "Students Enrolled" },
  { value: COUNTRY_COUNT, label: "Countries Served" },
  { value: `${RATING_VALUE}/5`, label: "Average Rating" },
  { value: FOUNDING_DATE, label: "Established" },
];

/** Site-wide footer, composed of the topbar/brand/links/contact pieces plus stats + legal bar. */
export function SiteFooter() {
  return (
    <footer className="bg-primary">
      <FooterTopbar />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[1.2fr_2fr_1fr]">
        <FooterBrand />
        <FooterLinks />
        <FooterContact />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 text-center sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <strong className="block font-heading text-2xl text-accent">{stat.value}</strong>
              <span className="mt-1 block text-xs text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40">
        © 2026 Al Quran Academy. All rights reserved. Serving the Ummah since 2012.
      </div>
    </footer>
  );
}
