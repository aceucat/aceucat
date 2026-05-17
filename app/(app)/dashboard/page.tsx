import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Welcome to AceUCAT
      </h1>
      <p className="mt-2 max-w-lg text-muted-foreground">
        Your dashboard is empty for now. Practice modes land next.
      </p>
    </div>
  );
}
