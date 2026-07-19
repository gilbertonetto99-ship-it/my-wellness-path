
# StrideWell — Personalized Walking Wellness (V1)

A premium, quiz-first web app for women 40+ that assesses lifestyle, generates a personalized walking plan, and offers a premium program. Frontend-only, session state via React Context. Architecture leaves room for auth, tracking, and AI later.

## Design direction

- Aesthetic: Calm/Apple Health hybrid. Editorial serif display + clean sans body. Generous whitespace, soft off-white background, deep forest/sage primary with warm sand accent. Rounded 2xl cards, soft shadows, no gradients-for-gradient's-sake, no marketing tropes (no countdowns, no fake testimonials, no urgency).
- Typography: Instrument Serif (headings) + Inter (body), loaded via `<link>` in `__root.tsx`.
- Palette (oklch tokens in `src/styles.css`):
  - background: warm off-white
  - foreground: near-black ink
  - primary: deep sage/forest
  - accent: warm sand
  - muted: soft stone
- Motion: subtle. Framer Motion for step transitions (fade + 8px slide), progress bar spring, result reveals. No parallax, no confetti.
- Mobile-first (this is a Meta ad landing), fully responsive to desktop.

## User journey / routes

TanStack Start file routing under `src/routes/`:

```
/                    Welcome — one screen, one CTA "Begin assessment"
/assessment          Quiz shell hosting 12 steps (single route, internal step state)
/analyzing           Faux-analysis screen (~3-4s progressive checklist)
/results             Personalized profile + plan preview + timeline chart
/plan                Full recommended plan detail + habit stack
/offer               Premium program offer, one plan, clear pricing
/checkout            Placeholder checkout (Stripe link stub → /library)
/library             Post-purchase library preview (locked-feeling shell)
```

`__root.tsx` gets real title/description/OG. Home is `/` (replace placeholder). Nav chrome is minimal: just a wordmark + subtle progress indicator during the assessment.

## The assessment (12 questions)

Grouped into three chapters shown as chapter intros between sections (feels like a product, not a form):

**Chapter 1 — About you**
1. Age range (40-44, 45-49, 50-54, 55-59, 60+)
2. Current activity level (sedentary → active, 4 options)
3. Height + current weight (imperial, US default)
4. Goal weight

**Chapter 2 — Your lifestyle**
5. How busy is your typical day? (slider 1–5 with labels)
6. Sleep quality (4 options)
7. Stress level (4 options)
8. Biggest obstacle to consistency (multi-select: time, motivation, knowledge, energy, joint discomfort, emotional eating)

**Chapter 3 — Your walking comfort**
9. How much walking feels realistic to start? (10, 20, 30, 45+ min)
10. Where will you walk? (multi-select: neighborhood, treadmill, park, mall, indoor loops)
11. Past attempts — what got in the way? (multi-select)
12. Motivation — why now? (single choice, emotional framing)

Each step: one question per screen, large touch targets, back button, progress bar, chapter label. Answers stored in `AssessmentContext` (React Context + useReducer, session-only).

## Personalization logic (deterministic, not fake)

Pure functions in `src/lib/personalization.ts` that take answers and produce:

- **Profile summary card**: archetype derived from obstacle + motivation + activity ("The Restart", "The Steady Builder", "The Time-Starved", "The Comeback"), with a one-paragraph read of their situation.
- **Daily walking plan preview**: week-by-week minutes/day for weeks 1–4, scaled from their realistic-start answer and activity level. Rendered as a 7-day chip row for a sample week.
- **Habit stack**: 3–5 habits selected from a pool, filtered by their obstacles (e.g., emotional eating → "Pause 60 seconds before snacks"; sleep issues → "Screens off 30 min before bed"; time-starved → "Walk during one phone call").
- **Projected timeline chart**: BMR/TDEE estimate from height/weight/age band + walking minutes → weekly deficit → 12/24-week weight projection, drawn with Recharts. Clearly labeled as an estimate.

All calculations are transparent, reasonable, and driven by inputs — the same person answering the same way always gets the same result.

## Analyzing screen

`/analyzing` shows a 3-4s progressive checklist ("Reviewing your lifestyle… / Matching walking pace… / Building your habit stack… / Estimating your timeline…") then auto-navigates to `/results`. Uses the time to compute personalization functions, not to fake work.

## Results → Plan → Offer flow

- `/results`: Profile summary at top, then plan preview card, habit stack, timeline chart. One CTA: "See my full plan".
- `/plan`: Full 4-week plan breakdown, habit stack detail, "what's included in the premium program" teaser at bottom. CTA: "Unlock premium program".
- `/offer`: Single premium plan (name TBD, e.g., "StrideWell Program — 12 weeks"). Clear price, what's included (personalized plan, daily walks, habit tracker, library, weekly check-ins — described as future-looking value). One CTA: "Continue".
- `/checkout`: Minimal form UI (name, email, card fields disabled with "Secure checkout coming soon" note) + a primary button that just navigates to `/library`. Structured so we can drop a real Stripe Payment Link href in later — the button is an `<a>` with a placeholder URL constant in `src/config/checkout.ts`.
- `/library`: Preview of the program library (modules as locked cards with icons — walking guide, habit tracker, recipes, mindset). Congratulatory header. This is a shell, not real content.

## Architecture (V1 today, extensible tomorrow)

- `src/context/AssessmentContext.tsx` — useReducer state; typed answers; helpers `setAnswer`, `reset`, selectors.
- `src/lib/personalization.ts` — pure functions; unit-test-friendly. Isolated so a future AI call can replace or augment it without touching UI.
- `src/lib/plan.ts` — plan generation.
- `src/components/assessment/*` — one component per question type (SingleChoice, MultiChoice, Slider, NumberPair, Chapter intro). Question definitions live in a single `questions.ts` config so adding/removing/reordering is trivial.
- `src/components/results/*` — ProfileCard, PlanPreview, HabitStack, TimelineChart.
- `src/routes/*` — thin route files; logic lives in components.
- No Cloud, no Supabase, no auth, no API calls.

Future-ready hooks (not implemented, just anticipated in structure): `AssessmentContext` shape maps cleanly to a future `assessments` table; personalization functions are pure so a `/api/personalize` server function can wrap them; route boundaries already match where auth gates would sit (`_authenticated` layout can wrap `/library` later).

## SEO / metadata

- `__root.tsx`: real title ("StrideWell — Personalized walking wellness for women 40+"), description, OG basics. No og:image at root.
- Each shareable route (`/`, `/offer`) gets its own head() with route-specific title + description.

## Out of scope for V1

Auth, database, real payments, real AI, progress tracking, notifications, weight logging, daily checklists, subscription management. Structure anticipates them; no code for them.

## Technical notes

- Add deps: `framer-motion`, `recharts`.
- Tailwind v4 tokens in `src/styles.css`; fonts via `<link>` in `__root.tsx` (never `@import` remote URLs in styles.css).
- All colors via semantic tokens — no hardcoded `text-white` / `bg-black`.
- Assessment state is session-only; refreshing mid-quiz resets (acceptable for V1; note it in a small "your answers are private and not stored" line on the welcome screen — actually true here).
