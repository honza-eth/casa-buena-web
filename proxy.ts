import { NextRequest, NextResponse } from "next/server";

const canonicalHost = "casabuena.cz";
const redirectHosts = new Set([
  "struhala.cz",
  "www.struhala.cz",
  "www.casabuena.cz",
]);

export function proxy(request: NextRequest) {
  const host = request.nextUrl.hostname.toLowerCase();

  if (!redirectHosts.has(host)) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.host = canonicalHost;

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: "/:path*",
};
