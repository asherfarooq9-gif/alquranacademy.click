/**
 * Footer link columns. Dead links audited out of the old site: `#teachers` (no such
 * section), bare `href="#"` items (Privacy/Terms/Refund — no pages exist), and the
 * non-functional newsletter form. "Free Trial FAQ" -> /faq, "Pricing & Plans" -> /pricing.
 */
const COLUMNS = [
  {
    title: "Courses",
    links: [
      { href: "/#services", label: "Quran Reading (Nazra)" },
      { href: "/#services", label: "Hifz Program" },
      { href: "/#services", label: "Tajweed Rules" },
      { href: "/#services", label: "Tafsir Studies" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#about", label: "About Us" },
      { href: "/#method", label: "Our Method" },
      { href: "/#testimonials", label: "Student Reviews" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/pricing", label: "Pricing & Plans" },
      { href: "/faq", label: "Free Trial FAQ" },
      { href: "/quran_trial_classes", label: "How Trials Work" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/best-quran-academy-for-beginners", label: "Best Academy for Beginners" },
      { href: "/find-certified-quran-teacher-online", label: "Find a Certified Teacher" },
      { href: "/online-quran-academy-cost", label: "Pricing Guide" },
      { href: "/quran-teacher-qualifications", label: "Teacher Qualifications" },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {COLUMNS.map((column) => (
        <div key={column.title}>
          <h4 className="text-sm font-semibold text-white">{column.title}</h4>
          <ul className="mt-4 space-y-2.5">
            {column.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/60 transition hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
