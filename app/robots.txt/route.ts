import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Disallow: /
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

