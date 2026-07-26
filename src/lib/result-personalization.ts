import type { AssessmentAnswers } from "../context/AssessmentContext";

export interface StartingStyle {
  name: "Gentle Rebuilder" | "Steady Momentum Builder" | "Active Rhythm Builder";
  tagline: string;
  description: string;
  daysPerWeek: 3 | 4;
}

export interface WeekDayPreview {
  day: string;
  activity: string;
  detail: string;
  active: boolean;
}

export interface ResultPersonalization {
  goalHeadline: string;
  goalCopy: string;
  readinessMessage: string;
  startingStyle: StartingStyle;
  barrier: { title: string; copy: string };
  startingWalk: { value: string; detail: string };
  routineWindow: { value: string; detail: string };
  consistencyStrategy: { value: string; detail: string };
  locationNote: string;
  minimumDay: string;
  week: WeekDayPreview[];
}

const GOAL_MESSAGES = {
  consistency: {
    headline: "Your best next step is a routine built for consistency—not intensity.",
    copy: "Your answers point toward a simple weekly rhythm you can return to, even when the week is not perfect.",
  },
  energy: {
    headline: "Your best next step is movement that works with your energy—not against it.",
    copy: "A realistic walking rhythm gives you room to choose a full walk or a smaller option based on the day you are having.",
  },
  strength: {
    headline: "Your best next step is a steady foundation you can build on.",
    copy: "Starting with repeatable walks can help you establish the rhythm needed to add simple strength over time.",
  },
  comfort: {
    headline: "Your best next step is movement that feels approachable enough to continue.",
    copy: "A calmer starting pace lets you focus on showing up consistently instead of pushing for an all-or-nothing reset.",
  },
  mobility: {
    headline: "Your best next step is regular movement that fits naturally into your week.",
    copy: "A clear walking rhythm can make it easier to create more opportunities to move throughout everyday life.",
  },
} as const;

const BARRIER_MESSAGES = {
  time: {
    title: "Protect one realistic window",
    copy: "Your biggest barrier is not willingness—it is finding a workable window before the day fills up. Your plan should begin with time you can actually protect.",
  },
  "variable-energy": {
    title: "Match the plan to the day",
    copy: "Your energy changes, so your routine needs more than one valid option. A shorter walk can keep the rhythm intact on lower-energy days.",
  },
  motivation: {
    title: "Make the next step obvious",
    copy: "Motivation is easier to rely on when the decision is small and clear. Your opportunity is to know what to do before the moment arrives.",
  },
  discomfort: {
    title: "Begin with a cautious, adjustable pace",
    copy: "Feeling cautious is useful information. Your starting point should be gradual, easy to adjust, and never dependent on pushing through discomfort.",
  },
  "all-or-nothing": {
    title: "Keep a smaller version of the plan",
    copy: "Your biggest opportunity is learning how to keep a smaller version of the plan on imperfect days, instead of treating one missed walk as a lost week.",
  },
} as const;

function getStartingStyle(answers: AssessmentAnswers): StartingStyle {
  const gentle =
    answers.currentActivity === "none" ||
    answers.startingWalk === "10" ||
    answers.readiness === "cautious" ||
    answers.readiness === "unsure";

  if (gentle) {
    return {
      name: "Gentle Rebuilder",
      tagline: "Start small enough to build trust in the routine.",
      description:
        "You are looking for a starting point that feels safe to try, not another plan that asks you to prove yourself. A lower-pressure first week gives you space to learn what feels sustainable before adding more.",
      daysPerWeek: 3,
    };
  }

  const active =
    answers.currentActivity === "most-days" &&
    (answers.startingWalk === "20" || answers.startingWalk === "30-plus") &&
    answers.readiness === "ready";

  if (active) {
    return {
      name: "Active Rhythm Builder",
      tagline: "Turn the movement you already have into a clear rhythm.",
      description:
        "You already have useful movement in your life, but you want it to feel more intentional and dependable. Your starting week focuses on giving that movement a clearer structure you can continue.",
      daysPerWeek: 4,
    };
  }

  return {
    name: "Steady Momentum Builder",
    tagline: "Build around a pace that feels realistic to repeat.",
    description:
      "You are ready for a routine, but you do not want it to take over your life. Your starting week balances clear walking days with enough flexibility to keep the rhythm workable.",
    daysPerWeek: 4,
  };
}

function getStartingWalk(answers: AssessmentAnswers) {
  const values = {
    "10": {
      value: "10 minutes",
      detail: "A short, intentional walk that keeps the starting point approachable.",
    },
    "15": {
      value: "15 minutes",
      detail: "A manageable walking block with enough room to fit into a busy day.",
    },
    "20": {
      value: "20 minutes",
      detail: "A steady walking block that can anchor a regular weekly rhythm.",
    },
    "30-plus": {
      value: "30+ minutes",
      detail: "A longer walking block that builds on the activity you already feel ready for.",
    },
  } as const;
  return values[answers.startingWalk ?? "15"];
}

function getRoutineWindow(answers: AssessmentAnswers) {
  const values = {
    morning: {
      value: "Morning",
      detail: "Protect the walk before the rest of the day has a chance to fill the space.",
    },
    midday: {
      value: "Lunch or midday",
      detail: "Use a natural break in the day as the cue to step away and move.",
    },
    afternoon: {
      value: "Late afternoon",
      detail: "Let the walk create a clear transition between the busiest parts of your day.",
    },
    evening: {
      value: "Evening",
      detail: "Use the walk as a calm way to close the day and create a repeatable cue.",
    },
    varies: {
      value: "A flexible daily window",
      detail: "Choose each walking window during a short weekly planning check-in.",
    },
  } as const;
  return values[answers.routineWindow ?? "varies"];
}

function getConsistencyStrategy(answers: AssessmentAnswers) {
  const values = {
    "clear-plan": {
      value: "Decide before the day begins",
      detail: "Use a simple weekly plan so the next walk is already clear.",
    },
    "short-options": {
      value: "Keep a shorter backup",
      detail: "Pair every regular walk with a minimum-day option for busy days.",
    },
    encouragement: {
      value: "Use a supportive weekly cue",
      detail: "Add one calm reminder that points back to your reason for starting.",
    },
    progress: {
      value: "Track completed walks",
      detail: "Measure the actions you repeat rather than chasing a perfect streak.",
    },
    "return-help": {
      value: "Plan the return in advance",
      detail: "Use a simple reentry walk after missed days instead of trying to catch up.",
    },
  } as const;
  return values[answers.desiredSupport ?? "clear-plan"];
}

function getLocationNote(answers: AssessmentAnswers): string {
  const values = {
    neighborhood: "Your neighborhood gives you a low-friction option close to home.",
    "park-trail":
      "A park or trail can make the walk feel like protected time away from the usual routine.",
    treadmill:
      "A treadmill gives you a consistent option that does not depend on weather or daylight.",
    indoors: "Indoor walking gives you a dependable option for weather, comfort, and busy days.",
    mixed: "A mix of locations gives you useful flexibility when weather or schedules change.",
  } as const;
  return values[answers.quizWalkingLocation ?? "mixed"];
}

function getReadinessMessage(answers: AssessmentAnswers): string {
  const values = {
    ready:
      "You feel ready to begin, so your plan can focus on turning that readiness into a clear first week.",
    gentle:
      "You want to begin gently, so your plan should prioritize ease, clarity, and repeatability.",
    cautious:
      "You are interested but cautious, so your plan should give you room to adjust without pressure.",
    unsure:
      "You do not need complete certainty to begin—only a first step that feels reasonable to try.",
  } as const;
  return values[answers.readiness ?? "gentle"];
}

function buildWeek(style: StartingStyle, walkValue: string): WeekDayPreview[] {
  return [
    { day: "Mon", activity: "Walk", detail: walkValue, active: true },
    { day: "Tue", activity: "Flexible rest", detail: "No catch-up needed", active: false },
    { day: "Wed", activity: "Walk", detail: walkValue, active: true },
    { day: "Thu", activity: "Optional mobility", detail: "A few gentle minutes", active: false },
    { day: "Fri", activity: "Walk", detail: walkValue, active: true },
    style.daysPerWeek === 4
      ? { day: "Sat", activity: "Walk", detail: walkValue, active: true }
      : { day: "Sat", activity: "Flexible rest", detail: "Choose what feels right", active: false },
    { day: "Sun", activity: "Weekly reset", detail: "Choose next week’s windows", active: false },
  ];
}

export function createResultPersonalization(answers: AssessmentAnswers): ResultPersonalization {
  const goal = GOAL_MESSAGES[answers.goal ?? "consistency"];
  const style = getStartingStyle(answers);
  const startingWalk = getStartingWalk(answers);
  const minimumMinutes = answers.startingWalk === "10" ? "5 minutes" : "10 minutes";

  return {
    goalHeadline: goal.headline,
    goalCopy: goal.copy,
    readinessMessage: getReadinessMessage(answers),
    startingStyle: style,
    barrier: BARRIER_MESSAGES[answers.primaryBarrier ?? "all-or-nothing"],
    startingWalk,
    routineWindow: getRoutineWindow(answers),
    consistencyStrategy: getConsistencyStrategy(answers),
    locationNote: getLocationNote(answers),
    minimumDay: `${minimumMinutes} at an easy, comfortable pace`,
    week: buildWeek(style, startingWalk.value),
  };
}
