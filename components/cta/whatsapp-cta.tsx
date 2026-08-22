"use client";

import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { WHATSAPP_URL } from "@/lib/constants";

interface WhatsAppCTAProps {
  label?: string;
  viewMode?: "text" | "icon";
}

/**
 * The single site-wide WhatsApp CTA. Every "chat on WhatsApp" / "free trial" button
 * renders through this thin wrapper around LiquidMetalButton so the fixed
 * href/target/rel — and the shader's brand recolor — apply everywhere automatically.
 */
export function WhatsAppCTA({ label = "Chat on WhatsApp", viewMode = "text" }: WhatsAppCTAProps) {
  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return <LiquidMetalButton label={label} viewMode={viewMode} onClick={openWhatsApp} />;
}
