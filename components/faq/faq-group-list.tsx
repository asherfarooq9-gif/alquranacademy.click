import { FaqAccordion } from "@/components/shared/faq-accordion";
import { FAQ_GROUPS } from "@/content/faq-groups";

export function FaqGroupList() {
  return (
    <div className="space-y-14">
      {FAQ_GROUPS.map((group) => (
        <div key={group.id} id={group.id}>
          <div className="mb-5 flex items-center gap-3 border-b-2 border-accent pb-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-lg">
              {group.icon}
            </span>
            <h2 className="font-heading text-xl text-foreground">{group.title}</h2>
          </div>
          <FaqAccordion items={group.items} idPrefix={group.id} />
        </div>
      ))}
    </div>
  );
}
