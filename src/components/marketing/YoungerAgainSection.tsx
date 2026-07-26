import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const FEELINGS = [
  "Walking with more ease",
  "Standing taller",
  "Moving with confidence",
  "More energy in the day",
  "Feeling more independent",
  "Returning after a busy week",
];

export function YoungerAgainSection() {
  return (
    <section
      className="younger-again overflow-hidden py-24 sm:py-30 lg:py-38"
      aria-labelledby="younger-again-title"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The feeling behind the movement</SectionEyebrow>
          <h2
            id="younger-again-title"
            className="font-display text-5xl leading-[.96] tracking-[-.03em] sm:text-6xl lg:text-7xl"
          >
            Why Women Say They Feel Younger Again
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            It is the everyday feeling of confidence, energy, and possibility returning.
          </p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <figure className="relative min-h-[520px] overflow-hidden rounded-[2rem] lg:min-h-[680px]">
            <img
              src="/images/walking-park.webp"
              alt="A woman walking confidently through a green park"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="absolute inset-x-6 bottom-6 rounded-2xl bg-primary/86 p-6 font-display text-3xl leading-tight text-primary-foreground backdrop-blur-md sm:inset-x-10 sm:bottom-10 sm:max-w-md">
              Move with confidence. Feel more alive in your day.
            </figcaption>
          </figure>
          <div className="grid gap-5">
            <figure className="relative min-h-[300px] overflow-hidden rounded-[2rem]">
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
