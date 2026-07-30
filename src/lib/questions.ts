import type {
  AgeRange,
  ActivityLevel,
  Motivation,
  Obstacle,
  PastObstacle,
  SleepQuality,
  StressLevel,
  WalkingLocation,
  WalkingStart,
  AssessmentAnswers,
  QuizAnswerKey,
} from "../context/AssessmentContext";

export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizQuestionDefinition {
  id: string;
  key: QuizAnswerKey;
  prompt: string;
  purpose: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestionDefinition[] = [
  {
    id: "goal",
    key: "goal",
    prompt: "What would you most like to improve over the next 12 weeks?",
    purpose: "Choose the one that matters most to you right now.",
    options: [
      { value: "consistency", label: "More consistent" },
      { value: "energy", label: "More energetic" },
      { value: "strength", label: "Stronger and more capable" },
      { value: "comfort", label: "More comfortable in my body" },
      { value: "mobility", label: "More mobile and active" },
    ],
  },
  {
    id: "current-activity",
    key: "currentActivity",
    prompt: "How often are you intentionally walking or moving right now?",
    purpose: "There is no right answer—this simply helps us find your starting point.",
    options: [
      { value: "none", label: "Almost none" },
      { value: "inconsistent", label: "A little, but not consistently" },
      { value: "few-times", label: "A few times a week" },
      { value: "most-days", label: "Most days" },
    ],
  },
  {
    id: "primary-barrier",
    key: "primaryBarrier",
    prompt: "What most often gets in the way?",
    purpose: "Choose the pattern that sounds most familiar.",
    options: [
      { value: "time", label: "I run out of time" },
      { value: "variable-energy", label: "My energy changes from day to day" },
      { value: "motivation", label: "I lose motivation" },
      { value: "discomfort", label: "Discomfort makes me cautious" },
      { value: "all-or-nothing", label: "I miss a day and lose momentum" },
    ],
  },
  {
    id: "starting-walk",
    key: "startingWalk",
    prompt: "How much walking feels realistic on a normal day?",
    purpose: "Pick an amount you could imagine repeating this week.",
    options: [
      { value: "10", label: "10 minutes" },
      { value: "15", label: "15 minutes" },
      { value: "20", label: "20 minutes" },
      { value: "30-plus", label: "30 minutes or more" },
    ],
  },
  {
    id: "routine-window",
    key: "routineWindow",
    prompt: "When would a walk fit most naturally into your real life?",
    purpose: "Think about your usual week, not an ideal one.",
    options: [
      { value: "morning", label: "Morning" },
      { value: "midday", label: "Lunch or midday" },
      { value: "afternoon", label: "Late afternoon" },
      { value: "evening", label: "Evening" },
      { value: "varies", label: "It changes every day" },
    ],
  },
  {
    id: "walking-location",
    key: "quizWalkingLocation",
    prompt: "Where are you most likely to walk?",
    purpose: "Choose the setting that feels easiest to use regularly.",
    options: [
      { value: "neighborhood", label: "Neighborhood" },
      { value: "park-trail", label: "Park or trail" },
      { value: "treadmill", label: "Treadmill" },
      { value: "indoors", label: "Indoor walking" },
      { value: "mixed", label: "A mix of places" },
    ],
  },
  {
    id: "desired-support",
    key: "desiredSupport",
    prompt: "What kind of support would help you keep going?",
    purpose: "Choose the support you would value most once you begin.",
    options: [
      { value: "clear-plan", label: "Knowing exactly what to do" },
      { value: "short-options", label: "Short options for busy days" },
      { value: "encouragement", label: "Encouragement and reminders" },
      { value: "progress", label: "A way to track progress" },
      { value: "return-help", label: "Help returning after missed days" },
    ],
  },
  {
    id: "readiness",
    key: "readiness",
    prompt: "How ready do you feel to begin with one realistic week?",
    purpose: "Your answer helps us match the tone and pace of your recommendation.",
    options: [
      { value: "ready", label: "I am ready now" },
      { value: "gentle", label: "I want to start gently" },
      { value: "cautious", label: "I am interested but cautious" },
      { value: "unsure", label: "I am not sure yet" },
    ],
  },
];

export function isQuizAnswered(
  question: QuizQuestionDefinition,
  answers: AssessmentAnswers,
): boolean {
  const value = answers[question.key];
  return typeof value === "string" && question.options.some((option) => option.value === value);
}

export type QuestionKind =
  "single" | "multi" | "slider" | "measurements" | "weight-goal" | "chapter";

export interface Question {
  id: string;
  kind: QuestionKind;
  chapter: 1 | 2 | 3;
  chapterTitle: string;
  prompt: string;
  helper?: string;
  key?: keyof AssessmentAnswers;
  options?: { value: string | number; label: string; description?: string }[];
  min?: number;
  max?: number;
  minLabel?: string;
  maxLabel?: string;
}

export const CHAPTERS: Record<1 | 2 | 3, { title: string; intro: string }> = {
  1: {
    title: "Chapter 1 · About you",
    intro: "A few gentle questions so your plan fits the person, not the average.",
  },
  2: {
    title: "Chapter 2 · Your lifestyle",
    intro: "How your days actually feel matters more than any calorie count.",
  },
  3: {
    title: "Chapter 3 · Your walking",
    intro: "Walking is the foundation. Let's shape it around what's realistic for you.",
  },
};

export const QUESTIONS: Question[] = [
  {
    id: "age",
    kind: "single",
    chapter: 1,
    chapterTitle: CHAPTERS[1].title,
    prompt: "Which age range best describes you?",
    key: "ageRange",
    options: (["40-44", "45-49", "50-54", "55-59", "60+"] as AgeRange[]).map((v) => ({
      value: v,
      label: v,
    })),
  },
  {
    id: "activity",
    kind: "single",
    chapter: 1,
    chapterTitle: CHAPTERS[1].title,
    prompt: "How would you describe your current activity level?",
    key: "activity",
    options: [
      {
        value: "sedentary" satisfies ActivityLevel,
        label: "Mostly sedentary",
        description: "Sitting for most of the day, minimal movement.",
      },
      {
        value: "light" satisfies ActivityLevel,
        label: "Lightly active",
        description: "Some walking or light activity a few times a week.",
      },
      {
        value: "moderate" satisfies ActivityLevel,
        label: "Moderately active",
        description: "Regular walking or workouts most weeks.",
      },
      {
        value: "active" satisfies ActivityLevel,
        label: "Active",
        description: "Consistent daily movement or exercise.",
      },
    ],
  },
  {
    id: "measurements",
    kind: "measurements",
    chapter: 1,
    chapterTitle: CHAPTERS[1].title,
    prompt: "Your height and current weight",
    helper: "Used only to personalize your walking plan. Nothing is stored.",
  },
  {
    id: "goal",
    kind: "weight-goal",
    chapter: 1,
    chapterTitle: CHAPTERS[1].title,
    prompt: "What's a weight you'd feel good at?",
    helper: "A gentle goal, not a strict target.",
  },
  {
    id: "busyness",
    kind: "slider",
    chapter: 2,
    chapterTitle: CHAPTERS[2].title,
    prompt: "How busy is your typical day?",
    key: "busyness",
    min: 1,
    max: 5,
    minLabel: "Relaxed",
    maxLabel: "Nonstop",
  },
  {
    id: "sleep",
    kind: "single",
    chapter: 2,
    chapterTitle: CHAPTERS[2].title,
    prompt: "How is your sleep, most nights?",
    key: "sleep",
    options: [
      { value: "poor" satisfies SleepQuality, label: "Poor" },
      { value: "fair" satisfies SleepQuality, label: "Fair" },
      { value: "good" satisfies SleepQuality, label: "Good" },
      { value: "great" satisfies SleepQuality, label: "Great" },
    ],
  },
  {
    id: "stress",
    kind: "single",
    chapter: 2,
    chapterTitle: CHAPTERS[2].title,
    prompt: "How would you rate your stress lately?",
    key: "stress",
    options: [
      { value: "low" satisfies StressLevel, label: "Low" },
      { value: "moderate" satisfies StressLevel, label: "Moderate" },
      { value: "high" satisfies StressLevel, label: "High" },
      { value: "very-high" satisfies StressLevel, label: "Very high" },
    ],
  },
  {
    id: "obstacles",
    kind: "multi",
    chapter: 2,
    chapterTitle: CHAPTERS[2].title,
    prompt: "What tends to get in the way of consistency?",
    helper: "Pick all that feel true.",
    key: "obstacles",
    options: [
      { value: "time" satisfies Obstacle, label: "Not enough time" },
      { value: "motivation" satisfies Obstacle, label: "Motivation dips" },
      { value: "knowledge" satisfies Obstacle, label: "Not sure what to do" },
      { value: "energy" satisfies Obstacle, label: "Low energy" },
      { value: "joints" satisfies Obstacle, label: "Joint discomfort" },
      { value: "emotional-eating" satisfies Obstacle, label: "Emotional eating" },
    ],
  },
  {
    id: "walking-start",
    kind: "single",
    chapter: 3,
    chapterTitle: CHAPTERS[3].title,
    prompt: "How much walking feels realistic to start with, daily?",
    key: "walkingStart",
    options: ([10, 20, 30, 45] as WalkingStart[]).map((v) => ({
      value: v,
      label: `${v} minutes`,
      description:
        v === 10
          ? "Gentle start — a short walk fits into any day."
          : v === 20
            ? "A solid base — around 2,000–2,500 steps."
            : v === 30
              ? "Focused — a real habit block."
              : "Ambitious — a full walking practice.",
    })),
  },
  {
    id: "walking-locations",
    kind: "multi",
    chapter: 3,
    chapterTitle: CHAPTERS[3].title,
    prompt: "Where are you likely to walk?",
    helper: "Choose any that fit your life.",
    key: "walkingLocations",
    options: [
      { value: "neighborhood" satisfies WalkingLocation, label: "My neighborhood" },
      { value: "treadmill" satisfies WalkingLocation, label: "A treadmill at home" },
      { value: "park" satisfies WalkingLocation, label: "A park or trail" },
      { value: "mall" satisfies WalkingLocation, label: "Indoor mall walking" },
      { value: "indoor-loops" satisfies WalkingLocation, label: "Indoor loops (any)" },
    ],
  },
  {
    id: "past-obstacles",
    kind: "multi",
    chapter: 3,
    chapterTitle: CHAPTERS[3].title,
    prompt: "When past attempts didn't stick, what got in the way?",
    helper: "Honesty here shapes the plan.",
    key: "pastObstacles",
    options: [
      { value: "too-restrictive" satisfies PastObstacle, label: "Too restrictive" },
      { value: "lost-motivation" satisfies PastObstacle, label: "Lost motivation" },
      { value: "no-time" satisfies PastObstacle, label: "Life got busy" },
      { value: "no-results" satisfies PastObstacle, label: "Didn't see results" },
      { value: "life-events" satisfies PastObstacle, label: "Big life events" },
      { value: "injury" satisfies PastObstacle, label: "Injury or discomfort" },
    ],
  },
  {
    id: "motivation",
    kind: "single",
    chapter: 3,
    chapterTitle: CHAPTERS[3].title,
    prompt: "What's underneath this — why now?",
    key: "motivation",
    options: [
      {
        value: "energy" satisfies Motivation,
        label: "I want my energy back",
      },
      {
        value: "confidence" satisfies Motivation,
        label: "I want to feel like myself again",
      },
      {
        value: "health" satisfies Motivation,
        label: "I want to stay healthy for the long run",
      },
      {
        value: "family" satisfies Motivation,
        label: "I want to keep up with my family",
      },
      {
        value: "milestone" satisfies Motivation,
        label: "There's a moment I'm preparing for",
      },
    ],
  },
];

export function isAnswered(q: Question, answers: AssessmentAnswers): boolean {
  if (q.kind === "measurements") {
    return !!answers.heightIn && !!answers.currentWeightLb;
  }
  if (q.kind === "weight-goal") {
    return !!answers.goalWeightLb;
  }
  if (!q.key) return false;
  const v = answers[q.key];
  if (Array.isArray(v)) return v.length > 0;
  return v !== undefined && v !== null;
}
