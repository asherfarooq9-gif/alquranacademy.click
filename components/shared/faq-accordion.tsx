import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqAccordionItem[];
  /** Prefix keeps trigger ids unique when multiple accordions render on one page. */
  idPrefix?: string;
}

/** Reused shadcn Accordion wrapper for FAQ lists across pricing, /faq, and the guide pages. */
export function FaqAccordion({ items, idPrefix = "faq" }: FaqAccordionProps) {
  return (
    <Accordion multiple={false} className="divide-y divide-border rounded-2xl bg-card ring-1 ring-border">
      {items.map((item, index) => (
        <AccordionItem key={`${idPrefix}-${index}`} value={`${idPrefix}-${index}`} className="px-5">
          <AccordionTrigger className="py-4 text-base font-medium text-foreground hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
