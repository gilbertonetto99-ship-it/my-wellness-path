import { defineMcp } from "@lovable.dev/mcp-js";
import buildWalkingPlanTool from "./tools/build-walking-plan";
import listAssessmentQuestionsTool from "./tools/list-assessment-questions";

export default defineMcp({
  name: "stridewell-mcp",
  title: "StrideWell MCP",
  version: "0.1.0",
  instructions:
    "Tools for StrideWell, a walking-based wellness planner for women 40+. Use `list_assessment_questions` to see the assessment and valid answer codes, then `build_walking_plan` to generate a personalized archetype read, 4-week walking progression, habit stack, and weight projection estimate. Results are lifestyle estimates, not medical advice.",
  tools: [listAssessmentQuestionsTool, buildWalkingPlanTool],
});
