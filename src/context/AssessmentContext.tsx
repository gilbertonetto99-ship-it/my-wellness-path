import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  type ReactNode,
} from "react";

export type AgeRange = "40-44" | "45-49" | "50-54" | "55-59" | "60+";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active";
export type SleepQuality = "poor" | "fair" | "good" | "great";
export type StressLevel = "low" | "moderate" | "high" | "very-high";
export type Obstacle =
  | "time"
  | "motivation"
  | "knowledge"
  | "energy"
  | "joints"
  | "emotional-eating";
export type WalkingStart = 10 | 20 | 30 | 45;
export type WalkingLocation =
  | "neighborhood"
  | "treadmill"
  | "park"
  | "mall"
  | "indoor-loops";
export type PastObstacle =
  | "too-restrictive"
  | "lost-motivation"
  | "no-time"
  | "no-results"
  | "life-events"
  | "injury";
export type Motivation =
  | "energy"
  | "confidence"
  | "health"
  | "family"
  | "milestone";

export interface AssessmentAnswers {
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
  | { type: "RESET" };

function reducer(state: AssessmentAnswers, action: Action): AssessmentAnswers {
  switch (action.type) {
    case "SET":
      return { ...state, [action.key]: action.value };
    case "RESET":
      return {};
    default:
      return state;
  }
}

interface Ctx {
  answers: AssessmentAnswers;
  setAnswer: <K extends keyof AssessmentAnswers>(
    key: K,
    value: AssessmentAnswers[K]
  ) => void;
  reset: () => void;
}

const AssessmentCtx = createContext<Ctx | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [answers, dispatch] = useReducer(reducer, {});

  const value = useMemo<Ctx>(
    () => ({
      answers,
      setAnswer: (key, value) => dispatch({ type: "SET", key, value }),
      reset: () => dispatch({ type: "RESET" }),
    }),
    [answers]
  );

  return <AssessmentCtx.Provider value={value}>{children}</AssessmentCtx.Provider>;
}

export function useAssessment() {
  const ctx = useContext(AssessmentCtx);
  if (!ctx) throw new Error("useAssessment must be used within AssessmentProvider");
  return ctx;
}
