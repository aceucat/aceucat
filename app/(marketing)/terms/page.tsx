import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
      </p>
      <div className="prose prose-invert mt-8 max-w-none text-sm text-muted-foreground">
        <p>
          Placeholder. Full terms will live here before launch. By using
          AceUCAT you agree not to use the service to do anything illegal or to
          interfere with other users.
        </p>
      </div>
    </div>
  );
}
