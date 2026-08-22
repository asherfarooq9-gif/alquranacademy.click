"use client";

import { useState } from "react";

import { PlanCard } from "@/components/pricing/plan-card";
import { CURRENCY_LABELS, PRICING_PLANS, type Currency } from "@/content/pricing-plans";

const CURRENCIES: Currency[] = ["usd", "gbp", "cad", "aud"];
const CURRENCY_SYMBOL_PREFIX: Record<Currency, string> = { usd: "$", gbp: "£", cad: "$", aud: "$" };

/** Currency toggle + plan grid — the one piece of client state on the pricing page. */
export function PlansSection() {
  const [currency, setCurrency] = useState<Currency>("usd");

  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-muted-foreground">Select your currency</p>
        <div className="inline-flex gap-1 rounded-full bg-secondary p-1">
          {CURRENCIES.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setCurrency(code)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                currency === code
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {CURRENCY_SYMBOL_PREFIX[code]} {CURRENCY_LABELS[code]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <PlanCard key={plan.slug} plan={plan} currency={currency} />
        ))}
      </div>
    </div>
  );
}
