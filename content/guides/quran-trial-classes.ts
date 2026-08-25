import type { GuideData } from "./types";

/**
 * Route is /quran_trial_classes.html per the plan's exact-URL-preservation requirement.
 * The old site's internal slug was "do-quran-academies-offer-trial-classes" — the canonical
 * here is fixed to the real reachable route, not that dead path.
 */
export const quranTrialClasses: GuideData = {
  slug: "quran_trial_classes",
  path: "/quran_trial_classes",
  metaTitle: "Do Quran Academies Offer Trial Classes? (What to Expect)",
  metaDescription:
    "Yes — most reputable Quran academies offer free trial classes. Learn what's included, how long they last, and what questions to ask.",
  h1: "Do Quran Academies Offer Trial Classes? (What to Expect)",
  meta: "By Al Quran Academy | May 2025 | 8 min read",
  datePublished: "2025-05-03",
  dateModified: "2026-08-26",
  intro:
    "If you are considering enrolling your child — or yourself — in online Quran classes, a free trial is the single most important step in the decision. This guide explains exactly what a Quran trial class includes, how long it lasts, what questions to ask, and the red flags that tell you to look elsewhere.",
  toc: [
    { href: "#do-they-offer-trials", label: "Do Quran academies really offer free trials?" },
    { href: "#what-happens", label: "What happens during a trial class?" },
    { href: "#how-long", label: "How long is a typical free trial?" },
    { href: "#what-to-look-for", label: "What to look for during your trial" },
    { href: "#questions", label: "Questions to ask during the trial" },
    { href: "#red-flags", label: "Red flags to watch out for" },
    { href: "#faq", label: "Frequently asked questions" },
  ],
  blocks: [
    {
      kind: "tip",
      text: "Quick Answer: Yes — most reputable online Quran academies offer a free trial class, typically lasting 1 to 3 days, with no credit card required. The trial lets you meet the teacher, experience a real lesson, and assess quality before committing a single penny.",
    },
    { kind: "h2", id: "do-they-offer-trials", text: "Do Quran Academies Really Offer Free Trials?" },
    { kind: "p", text: "Yes — and it has become standard practice. Almost every established online Quran academy offers some form of free trial class before asking you to pay. This is not a promotional gimmick; it is simply the right way to sell an educational service that relies entirely on the relationship between teacher and student." },
    { kind: "p", text: "The logic is straightforward: a qualified, confident academy knows its teachers deliver results. Offering a free trial costs them one session. In return, they get a family who has seen the quality firsthand and is far more likely to enroll — and stay enrolled for months or years." },
    { kind: "p", text: "Academies that do not offer a free trial are telling you something important: they are either not confident enough in their teaching quality to let you see it before paying, or they operate a volume-based model that does not prioritise individual student experience." },
    {
      kind: "tip",
      text: "Al Quran Academy Free Trial: We offer a free 3-day trial — three full sessions with your assigned teacher. No credit card, no automatic billing, no obligation. Message us on WhatsApp and your child's first class can be scheduled within 24 hours.",
    },
    { kind: "h2", id: "what-happens", text: "What Happens During a Quran Trial Class?" },
    { kind: "p", text: "A well-structured free trial class at a reputable academy follows a clear format. Here is what you should expect from start to finish:" },
    {
      kind: "steps",
      items: [
        { title: "Introduction and welcome (5 minutes)", text: "The teacher introduces themselves, shares a brief background, and takes time to learn about the student — their age, current level, goals, and any previous Quran learning experience. For children, the teacher will often begin with something warm and engaging to build comfort immediately." },
        { title: "Level assessment (5–10 minutes)", text: "The teacher asks the student to recite a short passage — or for complete beginners, to identify a few Arabic letters. This is not a test to pass or fail; it is simply how the teacher calibrates the lesson to the right starting point. A complete beginner will get a very different first lesson than a student who already reads fluently but wants to improve Tajweed." },
        { title: "Mini lesson (15–20 minutes)", text: "This is the core of the trial. The teacher delivers a real, focused lesson — not a sales presentation. Depending on the course, this might include teaching the first few letters of Noorani Qaida for a complete beginner, demonstrating a specific Tajweed rule and having the student practice it, or beginning a memorisation passage for a Hifz student. This is where you see the teacher's actual ability." },
        { title: "Curriculum overview and parent Q&A (5 minutes)", text: "At the end of the session the teacher explains the full course structure — how lessons are planned, how progress is tracked, what the student will achieve over the next few months. Parents get the chance to ask questions about scheduling, teacher availability, and how to support learning at home." },
      ],
    },
    { kind: "h2", id: "how-long", text: "How Long Is a Typical Quran Academy Free Trial?" },
    { kind: "p", text: "Trial lengths vary between academies. Here is the current standard across the industry:" },
    {
      kind: "table",
      headers: ["Trial Length", "What It Includes", "Common At"],
      rows: [
        ["1 class (1 day)", "Single 30-minute live session", "Most budget academies"],
        ["3 days", "Three full sessions — enough to see real teaching and build rapport", "Al Quran Academy and mid-to-premium academies"],
        ["7 days", "One full week of classes — uncommon, usually for larger operations", "A small number of larger platforms"],
      ],
    },
    { kind: "p", text: "A 3-day trial is the gold standard. One session is rarely enough to judge a teacher fairly — the student may be nervous, the connection may have a glitch, or the teacher may simply have chosen a less engaging topic that day. Three sessions give you a genuine picture of the teaching quality, patience, and rapport-building." },
    { kind: "h2", id: "what-to-look-for", text: "What to Look for During Your Trial Class" },
    { kind: "p", text: "Most parents focus on whether their child seemed to \"like\" the session. That matters — but it is not the whole picture. Here is a more complete evaluation framework:" },
    { kind: "h3", text: "Teacher quality indicators" },
    {
      kind: "compare",
      good: {
        title: "Green flags — look for these",
        items: [
          "Corrects pronunciation errors immediately and gently",
          "Explains why a letter is pronounced a certain way, not just how",
          "Adapts the pace when the student struggles — slows down, tries a different explanation",
          "Uses encouragement when the student gets something right",
          "Asks questions to check understanding",
          "Communicates clearly in English without confusion",
          "Arrives on time and the session runs its full duration",
        ],
      },
      bad: {
        title: "Red flags — walk away if you see these",
        items: [
          "Moves too fast without checking the student understands",
          "Shows visible frustration when the student makes a mistake",
          "Spends more time talking about the academy than actually teaching",
          "Cannot answer basic questions about the curriculum",
          "Audio or video quality is consistently poor with no attempt to fix it",
          "Pressures you to sign up before the trial is even finished",
        ],
      },
    },
    { kind: "h3", text: "Child-specific signs to observe" },
    { kind: "p", text: "For children aged 5–12, the most important signal is not what they say after — it is what they look like during the session. Watch for:" },
    {
      kind: "list",
      items: [
        "Are they leaning toward the screen or leaning away from it?",
        "Do they answer the teacher's questions willingly?",
        "Do they seem relaxed, or stiff and anxious?",
        "Did they smile or laugh at any point?",
        "Did they ask the teacher a question of their own?",
      ],
    },
    { kind: "p", text: "A child who is physically engaged and occasionally smiling during a 30-minute session is in the right hands. A child who is visibly waiting for it to end needs a different teacher." },
    { kind: "h2", id: "questions", text: "Questions to Ask During or After the Trial" },
    { kind: "p", text: "The trial class is also your opportunity to gather information directly from the teacher. Do not hesitate to ask:" },
    {
      kind: "list",
      items: [
        "\"Based on today, what level would you place my child at, and what is the plan from here?\" — A good teacher answers this specifically, not vaguely.",
        "\"How do you track progress between sessions?\" — Look for mention of lesson notes, monthly reports, or a clear revision system.",
        "\"What should my child practice between classes?\" — A qualified teacher always gives homework, even from the first session.",
        "\"What happens if we need to reschedule a class?\" — You want flexibility, not penalties.",
        "\"How long until my child can read the Quran independently?\" — The answer will vary, but a confident estimate based on the student's level is a positive sign.",
      ],
    },
    { kind: "h2", id: "red-flags", text: "Red Flags: When the Free Trial Itself Is a Problem" },
    {
      kind: "warning",
      text: "No credit card required — or it should not be. Some academies ask for payment details \"to reserve your slot\" even for a free trial. This is an automatic-billing setup that charges you if you forget to cancel. Genuine free trials at reputable academies require no financial information whatsoever.",
    },
    { kind: "p", text: "Other warning signs around the trial process itself:" },
    {
      kind: "list",
      items: [
        "The trial teacher is different from your assigned teacher — Some academies put their best teacher on trials, then assign a different one once you pay. Ask specifically: \"Will the teacher for the trial be my permanent teacher?\"",
        "The trial is a video call with the admin team, not a teacher — This is a sales call, not a trial class. Do not confuse the two.",
        "You are told the trial is \"worth $X\" and you are getting it free — This is pressure marketing, not confidence in teaching quality.",
        "No structured lesson takes place — If the 30 minutes passes with introductions and Q&A but no actual teaching, you have seen nothing of value.",
      ],
    },
    { kind: "h2", text: "Al Quran Academy's Free Trial: What We Offer" },
    { kind: "p", text: "At Al Quran Academy, our free trial works like this:" },
    {
      kind: "list",
      items: [
        "3 full days — three complete 30-minute live sessions with your assigned teacher",
        "No credit card required — ever, until you choose to enroll",
        "No automatic billing — the trial simply ends; we follow up by WhatsApp to hear your feedback",
        "Same teacher as your permanent teacher — no bait-and-switch",
        "Male or female teacher — your preference honoured from day one",
        "First class within 24 hours — message us on WhatsApp and we schedule immediately",
      ],
    },
    { kind: "p", text: "We have been doing this since 2012 — serving 50+ students across 15+ countries with a 4.9-star average rating. Our free trial is not a promotional tactic. It is how we have always operated, because we are confident you will see the quality for yourself." },
    {
      kind: "checklist",
      title: "Post-Trial Checklist — Before You Enroll",
      items: [
        "Did the teacher explain things clearly in English throughout?",
        "Were mistakes corrected gently and with patience?",
        "Did the student seem comfortable and engaged during the session?",
        "Was the lesson structured — not just a conversation?",
        "Did the teacher give you a clear plan for where to go from here?",
        "Was the session the full 30 minutes, starting and ending on time?",
        "Did the academy confirm no credit card was required for the trial?",
        "Are you confident this is the same teacher you will have after enrolling?",
      ],
    },
    { kind: "h2", text: "Final Thoughts" },
    { kind: "p", text: "A free trial class is the most important step you will take before enrolling your child — or yourself — in any online Quran academy. It removes all financial risk, reveals the real quality of the teaching, and gives your child the chance to build their first rapport with the teacher before any commitment is made." },
    { kind: "p", text: "Do not skip it. Do not let an academy persuade you to enroll without one. And use the checklist and questions in this guide to make the most of every minute of your trial session." },
    { kind: "p", text: "At Al Quran Academy, we have been offering our free 3-day trial since 2012 — because we know that families who experience our teaching quality enroll with confidence, stay for the long term, and refer their friends and family. That is the best marketing there is." },
  ],
  faqs: [
    {
      question: "Do Quran academies offer free trial classes?",
      answer:
        "Yes. The vast majority of reputable online Quran academies offer at least one free trial class — and the best ones offer 3 days of free sessions. This is now industry standard. If an academy does not offer any trial, treat it as a significant warning sign about their confidence in teaching quality.",
    },
    {
      question: "How long is a Quran academy free trial?",
      answer:
        "Most free trials last 1 to 3 days and include one full 30-minute session per day. Some academies offer a single trial class; others, like Al Quran Academy, offer a full 3-day trial. A handful offer 7 days. Three days is the optimal length — enough to properly assess the teacher without over-committing either party's time.",
    },
    {
      question: "What happens during a Quran trial class?",
      answer:
        "A well-structured trial class includes a brief introduction, a level assessment (the student recites a short passage so the teacher can calibrate the curriculum), a focused 15–20 minute mini-lesson, and a Q&A for parents at the end. You should leave knowing the teacher's style, your child's starting level, and a clear plan for progress.",
    },
    {
      question: "Is the Quran trial class really free — no credit card needed?",
      answer:
        "At reputable academies like Al Quran Academy, yes — completely free with no credit card required at any stage of the trial. Be cautious of academies that ask for payment details to \"reserve your slot\" — this is often a setup for automatic billing if you do not cancel in time.",
    },
    {
      question: "Can I request a female Quran teacher for the trial class?",
      answer:
        "Yes. A good academy will have qualified female teachers available and will match your preference from the very first trial session. This is important for Muslim sisters and for families who prefer a female teacher for their daughters. Al Quran Academy offers both male and female teachers with no additional charge and no waiting period.",
    },
    {
      question: "What if I am not satisfied after the trial?",
      answer:
        "Simply do not enroll — there is no obligation. At Al Quran Academy, if you try the 3-day trial and feel the teacher was not the right fit, just let us know via WhatsApp. We can either match you with a different teacher for a second trial or part ways with no hard feelings. Your satisfaction matters more to us than a single enrollment.",
    },
    {
      question: "Can adults take a trial Quran class too?",
      answer:
        "Absolutely. Free trial classes are available for learners of all ages — children, teenagers, and adults alike. The level assessment at the start of the trial ensures the lesson is calibrated for your specific starting point, whether you are a complete beginner or an adult looking to refine Tajweed you already know.",
    },
  ],
  ctaTitle: "Start Your Free 3-Day Trial Today",
  ctaText:
    "Three full sessions. Certified teacher. Your gender preference. Your time zone. No credit card, no commitment — just Quran learning at its best.",
};
