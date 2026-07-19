import type {
  AssessmentAnswers,
  Obstacle,
  PastObstacle,
} from "../context/AssessmentContext";

/* Age midpoints for BMR */
const AGE_MID: Record<string, number> = {
  "40-44": 42,
  "45-49": 47,
  "50-54": 52,
  "55-59": 57,
  "60+": 63,
};

const ACTIVITY_FACTOR: Record<string, number> = {
  sedentary: 1.35,
  light: 1.45,
  moderate: 1.55,
  active: 1.65,
};

export interface Personalization {
  archetype: {
    name: string;
    tagline: string;
    read: string;
  };
  weeklyPlan: WeekPlan[];
  sampleWeek: number[]; // minutes per day, 7 days
  habits: Habit[];
  timeline: TimelinePoint[];
  weeklyLossLb: number;
  goalWeeks: number | null;
  currentWeightLb: number;
  goalWeightLb: number;
}

export interface WeekPlan {
  week: number;
  minutesPerDay: number;
  daysPerWeek: number;
  focus: string;
}

export interface Habit {
  title: string;
  detail: string;
}

export interface TimelinePoint {
  week: number;
  weight: number;
}

const HABIT_POOL: Record<string, Habit> = {
  hydrate: {
    title: "Glass of water before coffee",
    detail: "One glass first thing in the morning to start the day hydrated.",
  },
  pause: {
    title: "60-second pause before snacks",
    detail:
      "A short breath check-in to notice hunger vs. habit before reaching for food.",
  },
  screens: {
    title: "Screens off 30 min before bed",
    detail: "Better sleep begins 30 minutes before your head touches the pillow.",
  },
  phoneWalk: {
    title: "Walk during one phone call",
    detail:
      "Turn one call each day into a moving conversation — no extra time needed.",
  },
  eveningStroll: {
    title: "10-minute evening stroll",
    detail: "A short after-dinner walk to close out the day gently.",
  },
  stretch: {
    title: "5-minute morning stretch",
    detail: "Loosen up hips, calves, and shoulders before the day begins.",
  },
  plate: {
    title: "Half-plate of vegetables at lunch",
    detail: "Fills you up, keeps energy steady, no dieting required.",
  },
  gratitude: {
    title: "Three-line evening note",
    detail: "One thing that went well, one thing you're grateful for, one intention.",
  },
};

function pickHabits(answers: AssessmentAnswers): Habit[] {
  const chosen: Habit[] = [];
  const add = (h: Habit) => {
    if (!chosen.find((c) => c.title === h.title) && chosen.length < 5)
      chosen.push(h);
  };

  const obs = new Set<Obstacle>(answers.obstacles ?? []);
  if (obs.has("emotional-eating")) add(HABIT_POOL.pause);
  if (obs.has("time")) add(HABIT_POOL.phoneWalk);
  if (obs.has("energy")) add(HABIT_POOL.hydrate);
  if (obs.has("motivation")) add(HABIT_POOL.gratitude);
  if (obs.has("knowledge")) add(HABIT_POOL.plate);
  if (obs.has("joints")) add(HABIT_POOL.stretch);

  if (answers.sleep === "poor" || answers.sleep === "fair")
    add(HABIT_POOL.screens);
  if (answers.stress === "high" || answers.stress === "very-high")
    add(HABIT_POOL.eveningStroll);

  // Fill to at least 3
  const fillers = [
    HABIT_POOL.hydrate,
    HABIT_POOL.eveningStroll,
    HABIT_POOL.plate,
    HABIT_POOL.gratitude,
  ];
  for (const f of fillers) {
    if (chosen.length >= 4) break;
    add(f);
  }
  return chosen.slice(0, 5);
}

function pickArchetype(answers: AssessmentAnswers): Personalization["archetype"] {
  const obs = new Set<Obstacle>(answers.obstacles ?? []);
  const past = new Set<PastObstacle>(answers.pastObstacles ?? []);

  if (obs.has("time") || past.has("no-time")) {
    return {
      name: "The Time-Starved",
      tagline: "A busy life doesn't have to be an obstacle.",
      read:
        "Between work, family, and everything in between, finding time for yourself feels almost impossible. Your plan is built around short, protected windows — no gym, no long routines, just walking that fits into the life you already have.",
    };
  }
  if (past.has("lost-motivation") || past.has("no-results")) {
    return {
      name: "The Comeback",
      tagline: "You've been here before — this time is different.",
      read:
        "You've tried programs that promised the world and delivered nothing. Your plan is calm and honest: small, consistent walks and a few gentle habits, so momentum builds instead of burns out.",
    };
  }
  if (answers.activity === "sedentary" || obs.has("joints")) {
    return {
      name: "The Restart",
      tagline: "Beginning where you are, not where you wish you were.",
      read:
        "Your body is ready for something kind and doable. Your plan starts low and steady — walking that respects your joints and rebuilds a base you can trust.",
    };
  }
  return {
    name: "The Steady Builder",
    tagline: "Consistency compounds into real change.",
    read:
      "You already have some movement in your week. Your plan turns that into a rhythm — a little more each week, paired with habits that stack quietly in the background.",
  };
}

function generatePlan(startMin: number): WeekPlan[] {
  return [
    { week: 1, minutesPerDay: startMin, daysPerWeek: 4, focus: "Rebuilding rhythm" },
    { week: 2, minutesPerDay: startMin + 5, daysPerWeek: 5, focus: "Adding a day" },
    {
      week: 3,
      minutesPerDay: startMin + 10,
      daysPerWeek: 5,
      focus: "Finding your pace",
    },
    {
      week: 4,
      minutesPerDay: startMin + 15,
      daysPerWeek: 6,
      focus: "Anchoring the habit",
    },
  ];
}

function sampleWeek(minutesPerDay: number, days: number): number[] {
  const week = Array(7).fill(0);
  // spread walking days across week (Mon, Tue, Thu, Fri, Sat, Sun order roughly)
  const order = [1, 2, 4, 5, 6, 0, 3];
  for (let i = 0; i < days; i++) week[order[i]] = minutesPerDay;
  return week;
}

export function personalize(answers: AssessmentAnswers): Personalization {
  const ageMid = AGE_MID[answers.ageRange ?? "45-49"] ?? 47;
  const weightLb = answers.currentWeightLb ?? 175;
  const goalLb = answers.goalWeightLb ?? weightLb - 20;
  const heightIn = answers.heightIn ?? 64;

  // Convert
  const weightKg = weightLb * 0.453592;
  const heightCm = heightIn * 2.54;

  // Mifflin-St Jeor for female
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageMid - 161;
  const tdee = bmr * (ACTIVITY_FACTOR[answers.activity ?? "light"] ?? 1.45);

  // Estimate walking burn: ~4 kcal/min at moderate pace, scaled by weight
  const startMin = answers.walkingStart ?? 20;
  const weekPlan = generatePlan(startMin);
  const avgMinutes =
    weekPlan.reduce((s, w) => s + w.minutesPerDay * w.daysPerWeek, 0) /
    weekPlan.length /
    7;
  const walkBurnPerDay = (weightKg / 68) * 4 * avgMinutes; // scaled around 68kg baseline
  const modestDietShift = 150; // gentle intake shift, kcal/day
  const dailyDeficit = walkBurnPerDay + modestDietShift;
  const weeklyLossLb = Math.max(
    0.3,
    Math.min(1.8, (dailyDeficit * 7) / 3500)
  );

  // Timeline projection over 24 weeks
  const timeline: TimelinePoint[] = [];
  let w = weightLb;
  for (let i = 0; i <= 24; i++) {
    timeline.push({ week: i, weight: Number(w.toFixed(1)) });
    // taper as approaches goal
    const remaining = Math.max(0, w - goalLb);
    const loss = Math.min(weeklyLossLb, remaining * 0.15 + 0.15);
    w = Math.max(goalLb, w - loss);
  }

  const goalWeeksIdx = timeline.findIndex((p) => p.weight <= goalLb);
  const goalWeeks = goalWeeksIdx > 0 ? goalWeeksIdx : null;

  return {
    archetype: pickArchetype(answers),
    weeklyPlan: weekPlan,
    sampleWeek: sampleWeek(weekPlan[0].minutesPerDay, weekPlan[0].daysPerWeek),
    habits: pickHabits(answers),
    timeline,
    weeklyLossLb: Number(weeklyLossLb.toFixed(2)),
    goalWeeks,
    currentWeightLb: weightLb,
    goalWeightLb: goalLb,
  };
  // tdee reference kept for future refinement; intentionally unused in output
  void tdee;
}
