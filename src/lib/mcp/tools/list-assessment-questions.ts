import { defineTool } from "@lovable.dev/mcp-js";
import { QUIZ_QUESTIONS } from "../../questions";

export default defineTool({
  name: "list_assessment_questions",
  title: "List assessment questions",
  description:
    "List the walking-wellness assessment questions with their answer options and value codes. Call this before build_walking_plan to learn the valid answer values.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const questions = QUIZ_QUESTIONS.map((q) => ({
      key: q.key,
      prompt: q.prompt,
      guidance: q.purpose,
      options: q.options.map((o) => ({ value: o.value, label: o.label })),
    }));

    return {
      content: [{ type: "text" as const, text: JSON.stringify(questions, null, 2) }],
      structuredContent: { questions },
    };
  },
});
