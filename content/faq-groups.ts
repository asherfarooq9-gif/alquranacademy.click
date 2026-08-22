export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  icon: string;
  title: string;
  items: FaqItem[];
}

/** 13 Q&A across 6 categories, verbatim from the old site's faq.html. */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "trial",
    icon: "🎁",
    title: "Free Trial",
    items: [
      {
        question: "Is there a free trial?",
        answer:
          "Yes — we offer a free 3-day trial. No credit card, no upfront payment required. You experience the classes, meet your teacher, and only pay once you are completely satisfied.",
      },
      {
        question: "Do I need to pay anything to start the trial?",
        answer:
          "No. The trial is completely free. We only ask for payment after the 3 days — once you have seen the quality of our classes and are fully happy with your teacher.",
      },
      {
        question: "What happens after the free trial?",
        answer:
          "After your 3-day trial, if you are happy you simply send the monthly fee via Bank Transfer or Western Union and your classes continue without any interruption. If you are not satisfied, you walk away — no charges, no questions asked.",
      },
    ],
  },
  {
    id: "courses",
    icon: "📖",
    title: "Courses",
    items: [
      {
        question: "What courses do you offer?",
        answer:
          "We offer six courses: Quran with Tajweed, Tafseer, Qaida Reading, Hifz (Quran memorization), Duas, and Kalimas. All courses are available for kids and adults.",
      },
      {
        question: "What is the right course for a complete beginner?",
        answer:
          "Complete beginners — both children and adults — start with Qaida Reading. This teaches Arabic letters and pronunciation from scratch. Once completed, students move to Quran with Tajweed. Our teacher will assess your level in the first class and recommend the right starting point.",
      },
      {
        question: "Can my child learn Duas and Kalimas separately?",
        answer:
          "Yes. Duas and Kalimas can be taught as a standalone course or alongside Quran reading. Many parents enrol young children in Duas and Kalimas first to build their Islamic foundation before starting Quran classes.",
      },
      {
        question: "What age groups do you teach?",
        answer:
          "We teach students of all ages — from young children to adults and elderly learners. There is no minimum or maximum age. Our teachers adapt their method to suit every age group.",
      },
    ],
  },
  {
    id: "classes",
    icon: "💻",
    title: "Classes",
    items: [
      {
        question: "Are classes 1-on-1 or in a group?",
        answer:
          "All classes are strictly 1-on-1. Your child will always have the teacher's complete attention. We do not offer group classes — every student learns individually at their own pace.",
      },
      {
        question: "What platform do you use for classes?",
        answer:
          "All classes are conducted via Microsoft Teams. It is free to download and works on any smartphone, tablet, or laptop. No special equipment is needed.",
      },
      {
        question: "What languages do teachers teach in?",
        answer:
          "Our teachers teach in English and Urdu. Students from UK, USA, Canada, Australia and Europe are fully accommodated in English.",
      },
      {
        question: "Can I reschedule a missed class?",
        answer:
          "Yes. Simply contact your teacher to arrange a makeup class at a time that suits you. We understand that life gets busy — flexibility is important to us.",
      },
      {
        question: "Can I choose my class timing?",
        answer:
          "Yes. We accommodate all time zones. When you contact us on WhatsApp, we will find a regular time slot that fits your schedule — whether you are in the UK, USA, Canada, Australia or Europe.",
      },
    ],
  },
  {
    id: "teachers",
    icon: "👩‍🏫",
    title: "Teachers",
    items: [
      {
        question: "Do you have female teachers?",
        answer:
          "Yes. We have both male and female teachers available. Simply request a female teacher when you contact us on WhatsApp and we will arrange this for you.",
      },
      {
        question: "What if I am not happy with my teacher?",
        answer:
          "Your satisfaction is our priority. If you feel the teaching method does not suit you or your child, we will ask the teacher to adjust their approach. If you are still not happy, we will arrange a completely different teacher for you — no extra cost.",
      },
    ],
  },
  {
    id: "payment",
    icon: "💳",
    title: "Payment",
    items: [
      {
        question: "When do I pay?",
        answer:
          "You only pay after completing the free 3-day trial — once you are completely satisfied with your teacher and classes. There is no upfront payment of any kind.",
      },
      {
        question: "How do I pay?",
        answer:
          "We accept payment via Bank Transfer and Western Union. Contact us on WhatsApp after your trial and we will share the payment details for your country.",
      },
      {
        question: "Is there a discount for siblings or families?",
        answer:
          "Yes. We offer family and sibling discounts. Contact us on WhatsApp and we will arrange a plan that works for your whole family.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. There are no long-term contracts. You can cancel at any time by messaging us on WhatsApp. No cancellation fees, no questions asked.",
      },
    ],
  },
  {
    id: "countries",
    icon: "🌍",
    title: "Countries",
    items: [
      {
        question: "Which countries do you accept students from?",
        answer:
          "We currently serve students from USA, UK, Canada, Australia and all European countries. We welcome students from any country in the world — as long as payment can be arranged, we are happy to teach you.",
      },
      {
        question: "I am not in the UK or USA — can I still join?",
        answer:
          "Absolutely. We have students from over 15 countries worldwide. Contact us on WhatsApp with your country and we will check timing and payment options for you.",
      },
    ],
  },
];
