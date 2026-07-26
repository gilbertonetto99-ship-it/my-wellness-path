import { ChevronDown } from "lucide-react";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { SectionEyebrow } from "../marketing/SectionEyebrow";

const FAQS = [
  {
    question: "Is this a subscription?",
    answer: "No. Move Again is presented as a one-time purchase for the complete 12-week system.",
  },
  {
    question: "What fitness level is it for?",
    answer:
      "Move Again is designed around adjustable starting points. You choose a realistic walking duration, and the system emphasizes gradual, repeatable movement rather than advanced fitness performance.",
  },
  {
    question: "Do I need a treadmill?",
    answer:
      "No. The walking structure can be used in a neighborhood, park, indoor space, or on a treadmill, depending on what is practical for you.",
  },
  {
    question: "Do I need equipment?",
    answer:
      "Walking does not require special equipment beyond appropriate footwear. Any equipment expectations for individual strength sessions are explained with the relevant session.",
  },
  {
    question: "What if discomfort makes me cautious?",
    answer:
      "Begin conservatively and adjust or stop when needed. Move Again is educational wellness content, not medical guidance; consult a qualified health professional when you have concerns about which activities are appropriate for you.",
  },
  {
    question: "How much time will I need?",
    answer:
      "Walking sessions begin from the duration you feel ready for, with shorter backup options for busy days. The focus is a workable weekly rhythm, not a single rigid daily requirement.",
  },
  {
    question: "What happens if I miss a week?",
    answer:
      "The system includes reentry guidance so you can return with a smaller next step instead of trying to catch up or beginning the entire program again.",
  },
  {
    question: "How do I access the materials?",
    answer:
      "Move Again is a digital program. Access instructions are provided after a completed purchase so you can use the materials on a phone, tablet, or computer.",
  },
  {
    question: "Can I use it on my phone?",
    answer:
      "Yes. The program is intended to be accessible on a modern mobile browser, with downloadable materials available for printing when useful.",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. Move Again provides educational wellness content and does not diagnose, treat, or replace advice from a qualified health professional.",
  },
];

export function OfferFAQ() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" aria-labelledby="faq-title">
      <MarketingContainer>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionEyebrow>Questions before you begin</SectionEyebrow>
            <h2
              id="faq-title"
              className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl"
            >
              Clear Answers, Before You Decide.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {FAQS.map((item) => (
              <details key={item.question} className="group">
                <summary className="marketing-focus flex cursor-pointer list-none items-center justify-between gap-5 rounded-lg py-5 text-left text-base font-semibold text-foreground sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-muted-foreground sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
