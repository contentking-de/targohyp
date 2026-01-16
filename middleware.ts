import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // HTTPS-Redirect in Production
  if (
    process.env.NODE_ENV === "production" &&
    request.headers.get("x-forwarded-proto") !== "https"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // Dynamischer Import, um zu vermeiden, dass der Email Provider beim Build importiert wird
  const { auth } = await import("@/app/api/auth/[...nextauth]/route");
  const session = await auth();

  // Geschützte Routen
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!session) {
      const signInUrl = new URL("/auth/signin", request.url);
      signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Security Headers für API-Routen
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const response = NextResponse.next();
    
    // CORS-Header setzen (nur für eigene Domains)
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_APP_URL,
      "https://www.targohyp.de",
      "https://targohyp.de",
    ].filter(Boolean);

    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set("Access-Control-Allow-Origin", origin);
    }
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.headers.set("Access-Control-Max-Age", "86400");

    // OPTIONS-Request für Preflight
    if (request.method === "OPTIONS") {
      return new NextResponse(null, { status: 204, headers: response.headers });
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/:path*",
  ],
};

