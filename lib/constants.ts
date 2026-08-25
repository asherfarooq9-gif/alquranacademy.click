/**
 * Sitewide business facts and contact details.
 * Single source of truth — reused by visible copy, JSON-LD schema, and metadata.
 */

export const SITE_NAME = "Al Quran Academy";
export const SITE_URL = "https://www.alquranacademy.click";
export const SITE_TAGLINE = "Online Quran Academy | Learn with Certified Scholars";

export const WHATSAPP_NUMBER = "923430565179";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DISPLAY = "+92 343 0565179";

/** Pre-fills the WhatsApp chat so visitors don't land on a blank conversation. */
export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
export const CONTACT_EMAIL = "alquranacademy685@gmail.com";

export const FOUNDING_DATE = "2012";
export const ADDRESS_LOCALITY = "Rawalpindi";
export const ADDRESS_COUNTRY = "PK";

export const STUDENT_COUNT = "50+";
export const STUDENT_COUNT_RAW = 50;
export const COUNTRY_COUNT = "15+";
export const COUNTRY_COUNT_RAW = 15;
export const RATING_VALUE = "4.9";
export const RATING_VALUE_RAW = 4.9;

export const NAV_LINKS = [
  { href: "/#services", label: "Courses" },
  { href: "/#method", label: "Method" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;
