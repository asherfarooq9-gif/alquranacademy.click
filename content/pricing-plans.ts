export type Currency = "usd" | "gbp" | "cad" | "aud";

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  usd: "$",
  gbp: "£",
  cad: "$",
  aud: "$",
};

export const CURRENCY_LABELS: Record<Currency, string> = {
  usd: "USD",
  gbp: "GBP",
  cad: "CAD",
  aud: "AUD",
};

export interface PricingPlan {
  slug: "starter" | "standard" | "intensive";
  name: string;
  tagline: string;
  price: Record<Currency, number>;
  perClassNote: string;
  classesPerWeek: number;
  sessionLength: string;
  classesPerMonth: string;
  featured: boolean;
  features: { text: string; included: boolean }[];
  buttonVariant: "outline" | "gold" | "primary";
}

/** Verbatim price table from the old site's pricing.html, including 4-currency conversions. */
export const PRICING_PLANS: PricingPlan[] = [
  {
    slug: "starter",
    name: "Starter",
    tagline: "Perfect for beginners & casual learners",
    price: { usd: 35, gbp: 28, cad: 48, aud: 55 },
    perClassNote: "2 classes/week · 30 min each",
    classesPerWeek: 2,
    sessionLength: "30 minutes",
    classesPerMonth: "~8",
    featured: false,
    features: [
      { text: "1-on-1 live classes via Microsoft Teams", included: true },
      { text: "Certified Quran teacher", included: true },
      { text: "Flexible scheduling", included: true },
      { text: "Monthly progress report", included: true },
      { text: "Male or female teacher", included: true },
      { text: "Sibling discount", included: false },
      { text: "Priority slot booking", included: false },
    ],
    buttonVariant: "outline",
  },
  {
    slug: "standard",
    name: "Standard",
    tagline: "Best for steady progress & consistent learning",
    price: { usd: 59, gbp: 47, cad: 80, aud: 90 },
    perClassNote: "5 classes/week · 30 min each",
    classesPerWeek: 5,
    sessionLength: "30 minutes",
    classesPerMonth: "~20",
    featured: true,
    features: [
      { text: "1-on-1 live classes via Microsoft Teams", included: true },
      { text: "Certified Quran teacher", included: true },
      { text: "Flexible scheduling", included: true },
      { text: "Weekly progress report", included: true },
      { text: "Male or female teacher", included: true },
      { text: "Sibling discount (10%)", included: true },
      { text: "Priority slot booking", included: false },
    ],
    buttonVariant: "gold",
  },
  {
    slug: "intensive",
    name: "Intensive",
    tagline: "Exclusively for Hifz memorization students",
    price: { usd: 69, gbp: 55, cad: 93, aud: 105 },
    perClassNote: "5 classes/week · 30 min · Hifz only",
    classesPerWeek: 5,
    sessionLength: "30 minutes",
    classesPerMonth: "~20",
    featured: false,
    features: [
      { text: "1-on-1 live classes via Microsoft Teams", included: true },
      { text: "Certified Quran teacher", included: true },
      { text: "Priority slot booking", included: true },
      { text: "Weekly progress report", included: true },
      { text: "Male or female teacher", included: true },
      { text: "Sibling discount (15%)", included: true },
      { text: "Dedicated Hifz revision tracking", included: true },
    ],
    buttonVariant: "primary",
  },
];

export interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  standard: string | boolean;
  intensive: string | boolean;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "1-on-1 live classes via Microsoft Teams", starter: true, standard: true, intensive: true },
  { feature: "Certified Quran teacher", starter: true, standard: true, intensive: true },
  { feature: "Male or female teacher", starter: true, standard: true, intensive: true },
  { feature: "Free 3-day trial", starter: true, standard: true, intensive: true },
  { feature: "Flexible scheduling", starter: true, standard: true, intensive: true },
  { feature: "Progress reports", starter: "Monthly", standard: "Weekly", intensive: "Weekly" },
  { feature: "Classes per week", starter: "2", standard: "3", intensive: "5" },
  { feature: "Session length", starter: "30 min", standard: "45 min", intensive: "45 min" },
  { feature: "Sibling discount", starter: false, standard: "10%", intensive: "15%" },
  { feature: "Priority slot booking", starter: false, standard: false, intensive: true },
  { feature: "Hifz revision tracking", starter: false, standard: false, intensive: true },
];

export interface PricingFaq {
  question: string;
  answer: string;
}

export const PRICING_FAQS: PricingFaq[] = [
  {
    question: "Is the free trial really free?",
    answer:
      "Yes — completely free. No credit card required. You get 3 full days of classes to experience our teachers and platform before deciding. If you don't love it, you owe nothing.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term contracts. Cancel anytime by messaging us on WhatsApp. No questions asked, no cancellation fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payment via Bank Transfer and Western Union. Contact us on WhatsApp and we will share the details for your country.",
  },
  {
    question: "Do you offer a discount for multiple children?",
    answer:
      "Yes — families enrolling 2 or more children receive 10–15% off each plan. Contact us on WhatsApp to set up a family arrangement.",
  },
  {
    question: "What if I need to reschedule a class?",
    answer:
      "No problem. Simply message your teacher or our support team on WhatsApp at least 2 hours before the class. Rescheduled classes do not count as used.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes — you can change your plan at any time by contacting us on WhatsApp. Changes take effect from the next billing cycle.",
  },
  {
    question: "Which plan is best for Hifz?",
    answer:
      "The Intensive plan (5 classes/week) is strongly recommended for Hifz students. Consistent daily contact with the teacher and daily revision tracking produces the best memorization results.",
  },
];
