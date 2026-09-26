import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function generateCaseStudySummary(name: string, description: string) {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) throw new Error("AI is not configured.");
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
  });
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    system:
      "You are a portfolio copywriter for a product and graphic designer. Write a concise case-study summary (90-130 words) with three short labeled parts: Challenge, Approach, Outcome. Use plain text, no markdown symbols. Never invent client names, numbers, or results not implied by the input.",
    prompt: `Project name: ${name}\nDescription: ${description}`,
    providerOptions: {
      openai: {
        store: false,
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        include: ["reasoning.encrypted_content"],
      },
    },
  });
  try {
    return (await result.text).trim();
  } catch (err) {
    const status = (err as { statusCode?: number }).statusCode;
    if (status === 429) throw new Error("Too many requests right now. Please try again shortly.");
    if (status === 402) throw new Error("AI credits are used up. Please try again later.");
    throw new Error("Couldn't generate a summary. Please try again.");
  }
}
