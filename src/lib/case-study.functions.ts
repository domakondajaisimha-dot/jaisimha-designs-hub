import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const summarizeCaseStudy = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({ name: z.string().trim().min(1).max(120), description: z.string().trim().min(10).max(2000) })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { generateCaseStudySummary } = await import("./case-study.server");
    return { summary: await generateCaseStudySummary(data.name, data.description) };
  });
