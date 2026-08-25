import type { Metadata } from "next";
import { DM_Sans, Noto_Naskh_Arabic, Playfair_Display } from "next/font/google";

import { FloatingWhatsAppFab } from "@/components/cta/floating-whatsapp-fab";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import { buildOrganizationSchema } from "@/lib/schema";

import "./globals.css";

const playfairDisplay = Playfair_Display({
  weight: ["700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  weight: ["500", "700"],
  subsets: ["arabic"],
  variable: "--font-arabic",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

// Every page below supplies its own complete, final <title> (ported verbatim
// from the old site's literal titles, which already end in "| Al Quran Academy").
// No `template` here — Next would otherwise double-append the site name.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    "Learn Quran online with certified qualified teachers. 1-on-1 classes in Tajweed, Hifz & Tafsir for kids and adults. 50+ students in 15+ countries since 2012. Free 3-day trial — no credit card.",
  robots: "index, follow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = buildOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${notoNaskhArabic.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsAppFab />
      </body>
    </html>
  );
}
