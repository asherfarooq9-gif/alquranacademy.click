"use client";

import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { buildWhatsAppUrl } from "@/lib/constants";

interface WhatsAppCTAProps {
  label?: string;
  viewMode?: "text" | "icon";
  /** Pre-filled chat text — always set something context-specific, never leave the chat blank. */
  message?: string;
}

/**
 * The single site-wide WhatsApp CTA. Every "chat on WhatsApp" / "free trial" button
 * renders through this thin wrapper around LiquidMetalButton so the fixed
 * href/target/rel — and the shader's brand recolor — apply everywhere automatically.
 */
export function WhatsAppCTA({
  label = "Chat on WhatsApp",
  viewMode = "text",
  message = "Hi! I'd like to claim my free 3-day Quran trial.",
}: WhatsAppCTAProps) {
  const openWhatsApp = () => {
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return <LiquidMetalButton label={label} viewMode={viewMode} onClick={openWhatsApp} />;
}
