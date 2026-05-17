import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Subdomain split (per ADR-001):
 *   aceucat.com       → app/(marketing)/*
 *   app.aceucat.com   → app/(app)/*
 *
 * The marketing route group owns `/`. The app group owns `/dashboard`
 * and everything below it. On the app subdomain we rewrite the root
 * to `/dashboard` so users hitting app.aceucat.com land in the app.
 *
 * Locally (host = localhost), the proxy is a no-op — visit `/` for
 * marketing and `/dashboard` for the app directly.
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const url = request.nextUrl;

  if (host.startsWith("app.") && url.pathname === "/") {
    url.pathname = "/dashboard";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on every path except Next internals and static assets
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)$).*)",
  ],
};
