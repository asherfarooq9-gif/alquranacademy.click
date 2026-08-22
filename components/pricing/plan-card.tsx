import { Check, X } from "lucide-react";

import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { CURRENCY_SYMBOLS, type Currency, type PricingPlan } from "@/content/pricing-plans";

interface PlanCardProps {
  plan: PricingPlan;
  currency: Currency;
}

export function PlanCard({ plan, currency }: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-card p-8 ring-1 transition hover:-translate-y-1 ${
        plan.featured ? "ring-2 ring-accent" : "ring-border"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground">
          Most Popular
        </span>
      )}

      <h3 className="font-heading text-xl text-foreground">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

      <div className="mt-5">
        <span className="align-super text-lg text-primary">{CURRENCY_SYMBOLS[currency]}</span>
        <span className="font-heading text-4xl font-bold text-primary">
          {plan.price[currency]}
        </span>
        <span className="text-sm text-muted-foreground">/month</span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{plan.perClassNote}</p>

      <div className="my-5 h-px bg-border" />

      <dl className="space-y-1.5 text-sm">
        <div className="flex justify-between border-b border-border py-1.5">
          <dt className="text-muted-foreground">Classes per week</dt>
          <dd className="font-medium text-foreground">{plan.classesPerWeek}</dd>
        </div>
        <div className="flex justify-between border-b border-border py-1.5">
          <dt className="text-muted-foreground">Session length</dt>
          <dd className="font-medium text-foreground">{plan.sessionLength}</dd>
        </div>
        <div className="flex justify-between py-1.5">
          <dt className="text-muted-foreground">Classes per month</dt>
          <dd className="font-medium text-foreground">{plan.classesPerMonth}</dd>
        </div>
      </dl>

      <ul className="my-6 space-y-2.5 text-sm">
        {plan.features.map((feature) => (
          <li
            key={feature.text}
            className={`flex items-start gap-2 ${feature.included ? "text-foreground" : "text-muted-foreground"}`}
          >
            {feature.included ? (
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            ) : (
              <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex justify-center pt-2">
        <WhatsAppCTA label="Start Free Trial" />
      </div>
    </div>
  );
}
