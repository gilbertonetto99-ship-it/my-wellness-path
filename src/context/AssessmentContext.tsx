import { createContext, useEffect, useContext, useReducer, useMemo, type ReactNode } from "react";

export type QuizGoal = "consistency" | "energy" | "strength" | "comfort" | "mobility";
export type CurrentActivity = "none" | "inconsistent" | "few-times" | "most-days";
export type StartingWalk = "10" | "15" | "20" | "30-plus";
export type PrimaryBarrier =
  "time" | "variable-energy" | "motivation" | "discomfort" | "all-or-nothing";
export type RoutineWindow = "morning" | "midday" | "afternoon" | "evening" | "varies";
export type QuizWalkingLocation = "neighborhood" | "park-trail" | "treadmill" | "indoors" | "mixed";
export type DesiredSupport =
  "clear-plan" | "short-options" | "encouragement" | "progress" | "return-help";
export type Readiness = "ready" | "gentle" | "cautious" | "unsure";

export type AgeRange = "40-44" | "45-49" | "50-54" | "55-59" | "60+";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active";
export type SleepQuality = "poor" | "fair" | "good" | "great";
export type StressLevel = "low" | "moderate" | "high" | "very-high";
export type Obstacle =
  "time" | "motivation" | "knowledge" | "energy" | "joints" | "emotional-eating";
export type WalkingStart = 10 | 20 | 30 | 45;
export type WalkingLocation = "neighborhood" | "treadmill" | "park" | "mall" | "indoor-loops";
export type PastObstacle =
  "too-restrictive" | "lost-motivation" | "no-time" | "no-results" | "life-events" | "injury";
export type Motivation = "energy" | "confidence" | "health" | "family" | "milestone";

export interface AssessmentAnswers {
  goal?: QuizGoal;
  currentActivity?: CurrentActivity;
  startingWalk?: StartingWalk;
  primaryBarrier?: PrimaryBarrier;
  routineWindow?: RoutineWindow;
  quizWalkingLocation?: QuizWalkingLocation;
  desiredSupport?: DesiredSupport;
  readiness?: Readiness;
  // Legacy fields remain temporarily so unmodified downstream routes keep compiling.
  ageRange?: AgeRange;
  activity?: ActivityLevel;
  heightIn?: number; // total inches
  currentWeightLb?: number;
  goalWeightLb?: number;
  busyness?: 1 | 2 | 3 | 4 | 5;
  sleep?: SleepQuality;
  stress?: StressLevel;
  obstacles?: Obstacle[];
  walkingStart?: WalkingStart;
  walkingLocations?: WalkingLocation[];
  pastObstacles?: PastObstacle[];
  motivation?: Motivation;
}

type Action =
  | { type: "SET"; key: keyof AssessmentAnswers; value: unknown }
  | { type: "RESET" }
  | { type: "HYDRATE"; answers: AssessmentAnswers };

const STORAGE_KEY = "move-again:assessment:v1";
const QUIZ_KEYS = [
  "goal",
  "currentActivity",
  "startingWalk",
  "primaryBarrier",
  "routineWindow",
  "quizWalkingLocation",
  "desiredSupport",
  "readiness",
] as const satisfies readonly (keyof AssessmentAnswers)[];

export type QuizAnswerKey = (typeof QUIZ_KEYS)[number];

const ALLOWED_VALUES: Record<QuizAnswerKey, readonly string[]> = {
  goal: ["consistency", "energy", "strength", "comfort", "mobility"],
  currentActivity: ["none", "inconsistent", "few-times", "most-days"],
  startingWalk: ["10", "15", "20", "30-plus"],
  primaryBarrier: ["time", "variable-energy", "motivation", "discomfort", "all-or-nothing"],
  routineWindow: ["morning", "midday", "afternoon", "evening", "varies"],
  quizWalkingLocation: ["neighborhood", "park-trail", "treadmill", "indoors", "mixed"],
  desiredSupport: ["clear-plan", "short-options", "encouragement", "progress", "return-help"],
  readiness: ["ready", "gentle", "cautious", "unsure"],
};

function restoreAnswers(): AssessmentAnswers {
  if (typeof window === "undefined") return {};
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null") as unknown;
    if (
      !stored ||
      typeof stored !== "object" ||
      !("answers" in stored) ||
      (stored as { version?: unknown }).version !== 1
    )
      return {};
    const rawAnswers = (stored as { answers?: unknown }).answers;
    if (!rawAnswers || typeof rawAnswers !== "object") return {};

    const restored: AssessmentAnswers = {};
    for (const key of QUIZ_KEYS) {
      const value = (rawAnswers as Record<string, unknown>)[key];
      if (typeof value === "string" && ALLOWED_VALUES[key].includes(value)) {
        (restored as Record<string, unknown>)[key] = value;
      }
    }
    return restored;
  } catch {
    return {};
  }
}

function reducer(state: AssessmentAnswers, action: Action): AssessmentAnswers {
  switch (action.type) {
    case "SET":
      return { ...state, [action.key]: action.value };
    case "RESET":
      return {};
    case "HYDRATE":
      return action.answers;
    default:
      return state;
  }
}

interface Ctx {
  answers: AssessmentAnswers;
  setAnswer: <K extends keyof AssessmentAnswers>(key: K, value: AssessmentAnswers[K]) => void;
  reset: () => void;
  isHydrated: boolean;
  isComplete: boolean;
}

const AssessmentCtx = createContext<Ctx | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [answers, dispatch] = useReducer(reducer, {});
  const [hydration, setHydration] = useReducer(() => true, false);

  useEffect(() => {
    dispatch({ type: "HYDRATE", answers: restoreAnswers() });
    setHydration();
  }, []);

  useEffect(() => {
    if (!hydration) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, answers }));
    } catch {
      // The quiz remains fully usable when browser storage is unavailable.
    }
  }, [answers, hydration]);

  const isComplete = QUIZ_KEYS.every((key) => answers[key] !== undefined);

  const value = useMemo<Ctx>(
    () => ({
      answers,
      setAnswer: (key, value) => dispatch({ type: "SET", key, value }),
      reset: () => dispatch({ type: "RESET" }),
      isHydrated: hydration,
      isComplete,
    }),
    [answers, hydration, isComplete],
  );

  return <AssessmentCtx.Provider value={value}>{children}</AssessmentCtx.Provider>;
}

export function useAssessment() {
  const ctx = useContext(AssessmentCtx);
  if (!ctx) throw new Error("useAssessment must be used within AssessmentProvider");
  return ctx;
}
