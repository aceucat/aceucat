import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
      </p>
      <div className="prose prose-invert mt-8 max-w-none text-sm text-muted-foreground">
        <p>
          Placeholder. Full privacy policy will live here before launch. We
          collect the minimum data needed to run the service and never sell it.
        </p>
      </div>
    </div>
  );
}
