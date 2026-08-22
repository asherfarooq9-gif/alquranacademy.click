import { FAQ_GROUPS } from "@/content/faq-groups";

/** Sticky side nav of FAQ categories — desktop only, matching the old site's layout. */
export function FaqCategoryNav() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Categories
        </h4>
        <ul className="mt-4 space-y-1">
          {FAQ_GROUPS.map((group) => (
            <li key={group.id}>
              <a
                href={`#${group.id}`}
                className="block rounded-lg border-l-2 border-transparent px-3 py-2 text-sm text-muted-foreground transition hover:border-accent hover:bg-secondary hover:text-primary"
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
