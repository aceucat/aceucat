import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 text-muted-foreground">
        Questions, feedback, or partnership enquiries — email{" "}
        <a
          href="mailto:hello@aceucat.com"
          className="text-foreground underline underline-offset-4 hover:no-underline"
        >
          hello@aceucat.com
        </a>
        .
      </p>
    </div>
  );
}
