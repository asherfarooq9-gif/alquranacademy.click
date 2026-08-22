interface PageHeroProps {
  title: React.ReactNode;
  description?: string;
  pills?: string[];
}

/** Shared gradient page hero used by /pricing, /faq, and the 5 guide pages. */
export function PageHero({ title, description, pills }: PageHeroProps) {
  return (
    <section className="bg-primary px-6 py-16 text-center sm:py-20">
      <h1 className="mx-auto max-w-2xl font-heading text-4xl leading-tight text-white sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-base text-white/75">{description}</p>
      )}
      {pills && pills.length > 0 && (
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-white/10 px-4 py-1.5 text-xs text-white/85 ring-1 ring-white/20"
            >
              ✓ {pill}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
