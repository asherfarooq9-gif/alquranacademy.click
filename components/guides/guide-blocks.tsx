import type { GuideBlock } from "@/content/guides/types";

/** Renders one GuideBlock. Kept as a single switch — the block model already keeps
 *  each guide page's data declarative; splitting this further would just scatter
 *  ~15 near-trivial JSX snippets across files with no reuse elsewhere. */
export function GuideBlockView({ block }: { block: GuideBlock }) {
  switch (block.kind) {
    case "intro":
      return (
        <p className="rounded-lg border-l-4 border-accent bg-secondary px-6 py-5 text-lg text-foreground">
          {block.text}
        </p>
      );
    case "p":
      return <p className="leading-relaxed text-foreground/90">{block.text}</p>;
    case "h2":
      return (
        <h2
          id={block.id}
          className="scroll-mt-24 border-l-4 border-accent pl-4 font-heading text-2xl text-foreground"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="font-heading text-xl text-primary">{block.text}</h3>;
    case "tip":
      return (
        <p className="rounded-lg border-l-4 border-primary bg-secondary px-5 py-4 text-sm text-foreground">
          <strong className="text-primary">💡 Tip: </strong>
          {block.text}
        </p>
      );
    case "warning":
      return (
        <p className="rounded-lg border-l-4 border-destructive bg-destructive/5 px-5 py-4 text-sm text-foreground">
          <strong className="text-destructive">⚠️ Note: </strong>
          {block.text}
        </p>
      );
    case "list":
      return block.ordered ? (
        <ol className="list-decimal space-y-2 pl-6 text-foreground/90">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc space-y-2 pl-6 text-foreground/90">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl ring-1 ring-border">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                {block.headers.map((header) => (
                  <th key={header} className="px-4 py-3 text-left font-medium">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, index) => (
                <tr
                  key={row.join("-")}
                  className={`border-b border-border last:border-none ${index % 2 === 1 ? "bg-muted/50" : ""}`}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 align-top text-foreground/90">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div className="space-y-4">
          {block.items.map((card) => (
            <div key={card.title} className="rounded-xl border-l-4 border-primary bg-card p-6 ring-1 ring-border">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                {card.label}
              </span>
              <h3 className="mt-1 font-heading text-lg text-primary">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">{card.text}</p>
              {card.note && (
                <p className="mt-3 border-t border-dashed border-border pt-3 text-xs font-semibold text-primary">
                  ✓ {card.note}
                </p>
              )}
            </div>
          ))}
        </div>
      );
    case "steps":
      return (
        <div className="space-y-4">
          {block.items.map((step, index) => (
            <div key={step.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              <div>
                <h3 className="font-heading text-base text-primary">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "journey":
      return (
        <div className="space-y-6 border-l-2 border-accent/40 pl-6">
          {block.items.map((step, index) => (
            <div key={step.title} className="relative">
              <span className="absolute -left-[31px] flex size-8 items-center justify-center rounded-full border-2 border-accent bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </span>
              <strong className="block text-sm text-primary">{step.title}</strong>
              <span className="mt-1 block text-sm text-muted-foreground">{step.text}</span>
            </div>
          ))}
        </div>
      );
    case "compare":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-primary/30 bg-secondary p-5">
            <h4 className="text-sm font-bold text-primary">{block.good.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              {block.good.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5">
            <h4 className="text-sm font-bold text-destructive">{block.bad.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              {block.bad.items.map((item) => (
                <li key={item}>✕ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "testimonial":
      return (
        <blockquote className="rounded-xl bg-secondary px-6 py-6 text-base italic text-foreground">
          &ldquo;{block.quote}&rdquo;
          <footer className="mt-3 text-sm not-italic text-muted-foreground">
            — {block.attribution}
          </footer>
        </blockquote>
      );
    case "checklist":
      return (
        <div className="rounded-xl bg-secondary p-6">
          <h3 className="font-heading text-lg text-primary">{block.title}</h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground/90">
            {block.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">☐</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    case "highlight":
      return (
        <div className="rounded-xl bg-primary p-7">
          <h3 className="font-heading text-lg text-accent">{block.title}</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            {block.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      );
    case "redFlags":
      return (
        <div className="space-y-3">
          {block.items.map((flag) => (
            <p key={flag.title} className="rounded-lg border-l-4 border-destructive bg-destructive/5 px-5 py-4 text-sm text-foreground">
              <strong className="text-destructive">🚩 {flag.title} — </strong>
              {flag.text}
            </p>
          ))}
        </div>
      );
    default:
      return null;
  }
}
