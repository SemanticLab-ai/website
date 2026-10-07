import { z } from "zod";

export const stages = [
  "Exploring where to focus",
  "Testing a defined opportunity",
  "Ready to shape or build",
  "Evolving an existing product or system",
] as const;

export const horizons = [
  "Now to three months",
  "Three to six months",
  "Beyond six months",
  "Timing is still open",
] as const;

export const strategyEngagementSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.email().max(254),
  organisation: z.string().trim().min(1).max(120),
  role: z.string().trim().max(100),
  stage: z.enum(stages),
  horizon: z.enum(horizons),
  opportunity: z.string().trim().min(10).max(3000),
  outcome: z.string().trim().min(10).max(3000),
  context: z.string().trim().max(2000),
});

export type StrategyEngagementInput = z.infer<typeof strategyEngagementSchema>;

export type StrategyActionData = {
  status: "error" | "sent" | "preview";
  message: string;
  fieldErrors?: Record<string, string>;
};

export function formString(formData: FormData | URLSearchParams, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export function createStrategyEmail(input: StrategyEngagementInput, reference: string) {
  const text = [
    "Strategy Engagement request",
    `Reference: ${reference}`,
    "",
    `Name: ${input.name}`,
    `Work email: ${input.email}`,
    `Organisation: ${input.organisation}`,
    `Role: ${input.role || "Not provided"}`,
    `Current stage: ${input.stage}`,
    `Decision horizon: ${input.horizon}`,
    "",
    "Opportunity or challenge:",
    input.opportunity,
    "",
    "What would a useful outcome look like?",
    input.outcome,
    "",
    "Additional context:",
    input.context || "Not provided",
  ].join("\n");

  const subjectName = (input.organisation || input.name).replace(/[\r\n]+/g, " ");
  return {
    subject: `Strategy Engagement request - ${subjectName}`,
    text,
    html: `<h1>Strategy Engagement request</h1><pre style="white-space:pre-wrap;font:inherit">${escapeHtml(text)}</pre>`,
  };
}
