import { NextRequest, NextResponse } from "next/server";

interface RateLimitOptions {
  interval: number; // Zeitfenster in Millisekunden
  maxRequests: number; // Maximale Anzahl von Requests
}

// In-Memory Store für Rate Limiting (für Production sollte Redis verwendet werden)
const requestStore = new Map<string, { count: number; resetTime: number }>();

function getClientIdentifier(request: NextRequest): string {
  // Verwende IP-Adresse aus Forwarded-For Header oder anderen Headers
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  
  // Fallback: Verwende CF-Connecting-IP (Cloudflare) oder andere Header
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) {
    return cfIp;
  }
  
  // Letzter Fallback: Verwende Remote-Address Header oder "unknown"
  const remoteAddr = request.headers.get("x-real-ip");
  return remoteAddr || "unknown";
}

function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [key, value] of requestStore.entries()) {
    if (value.resetTime < now) {
      requestStore.delete(key);
    }
  }
}

export function rateLimit(
  request: NextRequest,
  options: RateLimitOptions
): { success: boolean; remaining: number; resetTime: number } | null {
  const identifier = getClientIdentifier(request);
  const now = Date.now();

  // Cleanup alle 5 Minuten
  if (Math.random() < 0.01) {
    cleanupExpiredEntries();
  }

  const record = requestStore.get(identifier);

  if (!record || record.resetTime < now) {
    // Neuer Zeitraum
    requestStore.set(identifier, {
      count: 1,
      resetTime: now + options.interval,
    });
    return { success: true, remaining: options.maxRequests - 1, resetTime: now + options.interval };
  }

  if (record.count >= options.maxRequests) {
    // Rate Limit überschritten
    return { success: false, remaining: 0, resetTime: record.resetTime };
  }

  // Erhöhe Counter
  record.count++;
  requestStore.set(identifier, record);
  return { success: true, remaining: options.maxRequests - record.count, resetTime: record.resetTime };
}

export function createRateLimitMiddleware(options: RateLimitOptions) {
  return (request: NextRequest): NextResponse | null => {
    const result = rateLimit(request, options);

    if (!result || !result.success) {
      const response = NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
        { status: 429 }
      );
      response.headers.set("Retry-After", String(Math.ceil((result?.resetTime || Date.now() + 60000 - Date.now()) / 1000)));
      response.headers.set("X-RateLimit-Limit", String(options.maxRequests));
      response.headers.set("X-RateLimit-Remaining", String(result?.remaining || 0));
      response.headers.set("X-RateLimit-Reset", String(result?.resetTime || Date.now() + 60000));
      return response;
    }

    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", String(options.maxRequests));
    response.headers.set("X-RateLimit-Remaining", String(result.remaining));
    response.headers.set("X-RateLimit-Reset", String(result.resetTime));
    return null; // null bedeutet: Request weiterleiten
  };
}
