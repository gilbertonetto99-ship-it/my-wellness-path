import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { personalize } from "../../personalization";
import type {
  ActivityLevel,
  AssessmentAnswers,
  Obstacle,
  PastObstacle,
  WalkingStart,
} from "../../../context/AssessmentContext";

const ACTIVITY_MAP: Record<string, ActivityLevel> = {
  none: "sedentary",
  inconsistent: "light",
  "few-times": "moderate",
  "most-days": "active",
};

const START_MAP: Record<string, WalkingStart> = {
  "10": 10,
  "15": 20,
  "20": 20,
  "30-plus": 30,
};

const BARRIER_OBSTACLES: Record<string, Obstacle[]> = {
  time: ["time"],
  "variable-energy": ["energy"],
  motivation: ["motivation"],
  discomfort: ["joints"],
  "all-or-nothing": ["motivation", "knowledge"],
};

const BARRIER_PAST: Record<string, PastObstacle[]> = {
  time: ["no-time"],
  "variable-energy": ["lost-motivation"],
  motivation: ["lost-motivation"],
  discomfort: ["injury"],
  "all-or-nothing": ["too-restrictive"],
};

export default defineTool({
  name: "build_walking_plan",
  title: "Build a personalized walking plan",
  description:
    "Generate StrideWell's personalized result from assessment answers: profile archetype, 4-week walking progression, habit stack, and a 24-week weight projection estimate. Use list_assessment_questions for valid answer codes. Estimates only, not medical advice.",
  inputSchema: {
    currentActivity: z
      .enum(["none", "inconsistent", "few-times", "most-days"])
      .describe("How much the person currently moves in a typical week."),
    startingWalk: z
      .enum(["10", "15", "20", "30-plus"])
      .describe("Minutes of walking per day that feel realistic to start with."),
    primaryBarrier: z
      .enum(["time", "variable-energy", "motivation", "discomfort", "all-or-nothing"])
      .describe("The main thing that has gotten in the way before."),
    ageRange: z
      .enum(["40-44", "45-49", "50-54", "55-59", "60+"])
      .optional()
      .describe("Age band. Defaults to 45-49 when omitted."),
    heightInches: z
      .number()
      .optional()
      .describe("Total height in inches, e.g. 65. Defaults to 64."),
    currentWeightLb: z
      .number()
      .optional()
      .describe("Current weight in pounds. Defaults to 175."),
    goalWeightLb: z
      .number()
      .optional()
      .describe("Goal weight in pounds. Defaults to 20 lb below current weight."),
    sleep: z
      .enum(["poor", "fair", "good", "great"])
      .optional()
      .describe("Typical sleep quality; influences the habit stack."),
    stress: z
      .enum(["low", "moderate", "high", "very-high"])
      .optional()
      .describe("Typical stress level; influences the habit stack."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (input) => {
    const answers: AssessmentAnswers = {
      activity: ACTIVITY_MAP[input.currentActivity],
      walkingStart: START_MAP[input.startingWalk],
      obstacles: BARRIER_OBSTACLES[input.primaryBarrier],
      pastObstacles: BARRIER_PAST[input.primaryBarrier],
      ageRange: input.ageRange,
      heightIn: input.heightInches,
      currentWeightLb: input.currentWeightLb,
      goalWeightLb: input.goalWeightLb,
      sleep: input.sleep,
      stress: input.stress,
    };

    const result = personalize(answers);
    const summary = {
      archetype: result.archetype,
      weeklyPlan: result.weeklyPlan,
      sampleWeekMinutesPerDay: result.sampleWeek,
      habits: result.habits,
      estimatedWeeklyLossLb: result.weeklyLossLb,
      estimatedWeeksToGoal: result.goalWeeks,
      currentWeightLb: result.currentWeightLb,
      goalWeightLb: result.goalWeightLb,
      projection: result.timeline,
      disclaimer:
        "Lifestyle estimate based on the answers provided. Not medical advice.",
    };

    return {
      content: [{ type: "text" as const, text: JSON.stringify(summary, null, 2) }],
      structuredContent: summary,
    };
  },
});
