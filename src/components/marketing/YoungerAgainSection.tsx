import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const FEELINGS = [
  "Knowing what to do this week",
  "Choosing a realistic pace for today",
  "Planning walks around real commitments",
  "Seeing progress without chasing perfection",
  "Using a shorter option when energy changes",
  "Returning after a busy week without starting over",
];

export function YoungerAgainSection() {
  return (
    <section
      className="younger-again overflow-hidden py-20 sm:py-26 lg:py-32"
      aria-labelledby="younger-again-title"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The feeling behind the movement</SectionEyebrow>
          <h2
            id="younger-again-title"
            className="font-display text-4xl leading-[.98] tracking-[-.03em] sm:text-6xl lg:text-7xl"
          >
            What Consistency Can Look Like in Real Life
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            A routine becomes easier to maintain when the next step is clear, realistic, and
            flexible enough for the week you actually have.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[1.2fr_.8fr]">
          <figure className="relative min-h-[420px] overflow-hidden rounded-[2rem] sm:min-h-[520px] lg:min-h-[680px]">
            <img
              src="/images/walking-park.webp"
              alt="A woman walking confidently through a green park"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-primary/86 p-5 font-display text-2xl leading-tight text-primary-foreground backdrop-blur-md sm:inset-x-10 sm:bottom-10 sm:max-w-md sm:p-6 sm:text-3xl">
              Build a routine that still works when real life changes.
            </figcaption>
          </figure>
          <div className="grid gap-5">
            <figure className="relative min-h-[240px] overflow-hidden rounded-[2rem] sm:min-h-[300px]">
              <img
                src="/images/walking-friends.webp"
                alt="Women enjoying movement and connection together"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
            </figure>
            <div className="rounded-[2rem] border border-border bg-card p-7 sm:p-9">
              <ul className="grid divide-y divide-border">
                {FEELINGS.map((feeling) => (
                  <li key={feeling} className="py-3.5 font-medium">
                    {feeling}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Lifestyle experiences vary. No physical or medical outcome is guaranteed.
              </p>
            </div>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
