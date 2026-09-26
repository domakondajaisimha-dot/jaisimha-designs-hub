import { FormEvent, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { summarizeCaseStudy } from "@/lib/case-study.functions";

export function CaseStudyGenerator() {
  const summarize = useServerFn(summarizeCaseStudy);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (description.trim().length < 10) return setError("Please add a slightly longer description.");
    setLoading(true);
    setError("");
    setSummary("");
    try {
      const res = await summarize({ data: { name, description } });
      setSummary(res.summary);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="case-study-ai" className="border-y border-foreground/15 bg-background py-20">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:px-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase text-coral">AI-powered</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Turn a project into a <span className="font-editorial italic">case study.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Enter a project name and a short description to get a concise case-study summary.
          </p>
          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <Input placeholder="Project name" value={name} onChange={(e) => setName(e.target.value)} maxLength={120} required />
            <Textarea placeholder="Describe the project: product, goal, what you designed…" value={description} onChange={(e) => setDescription(e.target.value)} maxLength={2000} rows={5} required />
            <Button type="submit" disabled={loading} className="w-fit rounded-full">
              <Sparkles className="h-4 w-4" /> {loading ? "Writing summary…" : "Generate summary"}
            </Button>
          </form>
        </div>
        <div className="rounded-2xl border-2 border-foreground bg-card p-7" aria-live="polite">
          <p className="text-xs font-bold uppercase text-muted-foreground">Case-study summary</p>
          {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
          {!error && !summary && <p className="mt-4 text-muted-foreground">{loading ? "Generating…" : "Your summary will appear here."}</p>}
          {summary && <p className="mt-4 whitespace-pre-line leading-7">{summary}</p>}
        </div>
      </div>
    </section>
  );
}
