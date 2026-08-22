import type { Metadata } from "next";

import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { PlansSection } from "@/components/pricing/plans-section";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { PRICING_FAQS } from "@/content/pricing-plans";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Online Quran Classes Pricing & Plans 2026 | Al Quran Academy",
  description:
    "Affordable online Quran class pricing for kids and adults. Tajweed, Hifz and Tafsir plans starting from $35/month. Free 3-day trial. No credit card required.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Simple, Transparent <em className="text-accent not-italic">Pricing</em>
          </>
        }
        description="No hidden fees. No long-term contracts. Cancel anytime. Start with 3 free days — no credit card required."
        pills={[
          "Free 3-day trial",
          "Cancel anytime",
          "Certified Quran teachers",
          "Female teachers available",
        ]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Choose Your Plan"
            description="All plans include 1-on-1 classes, certified teachers, and flexible scheduling across all time zones."
          />
          <div className="mt-10">
            <PlansSection />
          </div>
          <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-secondary px-6 py-5 text-center text-sm text-muted-foreground">
            👨‍👩‍👧‍👦 <strong className="text-foreground">Family discount available</strong> — enrol 2+
            children and receive 10–15% off each plan. Contact us on WhatsApp to arrange.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            title="Compare All Plans"
            description="Everything included in every plan — no surprise fees."
          />
          <div className="mt-10">
            <ComparisonTable />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Pricing FAQs" />
          <div className="mt-10">
            <FaqAccordion items={PRICING_FAQS} idPrefix="pricing-faq" />
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center sm:py-20">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-heading text-3xl text-white sm:text-4xl">
            Start Your Free <em className="text-accent not-italic">3-Day Trial</em>
          </h2>
          <p className="mt-4 text-base text-white/75">
            No credit card. No commitment. Just quality Quran education from day one.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA label="Claim Free Trial" />
          </div>
          <p className="mt-5 text-xs text-white/50">
            928+ students enrolled · 15+ countries · Rated 4.9/5
          </p>
        </div>
      </section>
    </>
  );
}
