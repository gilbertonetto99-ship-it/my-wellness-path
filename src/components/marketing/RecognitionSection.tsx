import { BatteryMedium, CalendarDays, RefreshCcw } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const RECOGNITION_POINTS = [
  {
    icon: CalendarDays,
    title: "Your schedule is already full.",
    copy: "Long workouts and rigid calendars rarely leave room for the life you are already managing.",
  },
  {
    icon: BatteryMedium,
    title: "Your energy is not the same every day.",
    copy: "A useful routine needs options for both higher-energy days and days when less is more.",
  },
  {
    icon: RefreshCcw,
    title: "Rigid plans fall apart when real life happens.",
    copy: "Missing a day should not mean losing the whole week or waiting for another Monday.",
  },
];

export function RecognitionSection() {
  return (
    <section className="bg-muted/70 py-20 sm:py-24 lg:py-30" aria-labelledby="recognition-title">
      <MarketingContainer>
        <div className="max-w-3xl">
          <SectionEyebrow>You are not the problem</SectionEyebrow>
          <h2
            id="recognition-title"
            className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
          >
            If Fitness Plans Keep Asking Too Much, Too Soon, You Are Not the Problem.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A plan can only work when it respects the time, energy, and responsibilities that shape
            your actual week.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {RECOGNITION_POINTS.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="marketing-card p-6 sm:p-7">
              <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-foreground">{title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </MarketingContainer>
    </section>
  );
}
