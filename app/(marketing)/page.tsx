import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const subtests = [
  {
    name: "Verbal Reasoning",
    blurb:
      "Read fast, infer faster. Train on passage-style questions modelled on the real test.",
  },
  {
    name: "Decision Making",
    blurb:
      "Probabilities, logic puzzles, and syllogisms — broken down step by step.",
  },
  {
    name: "Quantitative Reasoning",
    blurb:
      "Maths under pressure. Drill the patterns examiners actually use.",
  },
  {
    name: "Abstract Reasoning",
    blurb:
      "Pattern-finding at speed. Adaptive sets meet you at your level and push.",
  },
  {
    name: "Situational Judgement",
    blurb:
      "Professional ethics in scenario form. Learn the framework, not just answers.",
  },
];

const steps = [
  {
    n: "01",
    title: "Adaptive drills",
    body: "Question difficulty tracks your accuracy in real time. No more wasted reps on stuff you already nail.",
  },
  {
    n: "02",
    title: "Timed mocks",
    body: "Full-length, exam-format mocks with the same timing pressure you'll face on test day.",
  },
  {
    n: "03",
    title: "AI explanations",
    body: "Every question gets a step-by-step breakdown. Ask follow-ups like you would a tutor.",
  },
];

export default function MarketingHome() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Ace the UCAT.
              <br />
              <span className="text-muted-foreground">
                Without the noise.
              </span>
            </h1>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Adaptive question banks, full mock exams, and AI explanations
              that tell you <em>why</em> — not just the answer. Built for UK
              med and dental school applicants who don&apos;t have time to
              waste.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/dashboard"
                className={buttonVariants({ size: "lg" })}
              >
                Start practising — free
              </Link>
              <Link
                href="#features"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                See how it works
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card. Cancel any time.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Every subtest. Every weakness. Closed.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Five UCAT subtests, five purpose-built training modes.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subtests.map((s) => (
              <Card key={s.name}>
                <CardHeader>
                  <CardTitle>{s.name}</CardTitle>
                  <CardDescription>{s.blurb}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Practise. Diagnose. Improve.
            </h2>
            <p className="mt-4 text-muted-foreground">A loop, not a slog.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="font-mono text-sm text-muted-foreground">
                  {s.n}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Test day isn&apos;t getting closer.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start a free session in under a minute.
            </p>
            <div className="mt-8">
              <Link
                href="/dashboard"
                className={buttonVariants({ size: "lg" })}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
