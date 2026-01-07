import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
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

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

