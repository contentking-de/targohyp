import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Maximale Request-Body-Größe: 1MB
const MAX_BODY_SIZE = 1024 * 1024;

/**
 * Validiert den Content-Type Header
 */
export function validateContentType(request: NextRequest, expectedType: string = "application/json"): NextResponse | null {
  const contentType = request.headers.get("content-type");
  
  if (!contentType || !contentType.includes(expectedType)) {
    return NextResponse.json(
      { error: `Content-Type muss ${expectedType} sein.` },
      { status: 400 }
    );
  }
  
  return null;
}

/**
 * Liest und validiert die Request-Body-Größe
 */
export async function readBodyWithLimit(request: NextRequest): Promise<{ data: any; error: NextResponse | null }> {
  const contentLength = request.headers.get("content-length");
  
  if (contentLength && parseInt(contentLength) > MAX_BODY_SIZE) {
    return {
      data: null,
      error: NextResponse.json(
        { error: "Request-Body ist zu groß. Maximum: 1MB." },
        { status: 413 }
      ),
    };
  }

  try {
    const body = await request.text();
    
    if (body.length > MAX_BODY_SIZE) {
      return {
        data: null,
        error: NextResponse.json(
          { error: "Request-Body ist zu groß. Maximum: 1MB." },
          { status: 413 }
        ),
      };
    }

    const data = JSON.parse(body);
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: NextResponse.json(
        { error: "Ungültiges JSON-Format." },
        { status: 400 }
      ),
    };
  }
}

/**
 * Validiert Daten gegen ein Zod-Schema
 */
export function validateSchema<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; error: NextResponse } {
  try {
    const validated = schema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: NextResponse.json(
          {
            error: "Validierungsfehler",
            details: error.issues.map((e) => ({
              path: e.path.join("."),
              message: e.message,
            })),
          },
          { status: 400 }
        ),
      };
    }
    return {
      success: false,
      error: NextResponse.json(
        { error: "Validierungsfehler" },
        { status: 400 }
      ),
    };
  }
}

/**
 * Wrapper für API-Routen mit gemeinsamen Sicherheitsprüfungen
 */
export async function secureApiHandler(
  request: NextRequest,
  handler: (data: any, request: NextRequest) => Promise<NextResponse>,
  options: {
    method?: string;
    schema?: z.ZodSchema;
    requireAuth?: boolean;
  } = {}
) {
  // Prüfe HTTP-Methode
  if (options.method && request.method !== options.method) {
    return NextResponse.json(
      { error: `Methode ${request.method} nicht erlaubt. Erwartet: ${options.method}` },
      { status: 405 }
    );
  }

  // Prüfe Content-Type für POST/PUT/PATCH
  if (["POST", "PUT", "PATCH"].includes(request.method)) {
    const contentTypeError = validateContentType(request);
    if (contentTypeError) {
      return contentTypeError;
    }
  }

  // Lese Body mit Größenlimit
  if (["POST", "PUT", "PATCH"].includes(request.method)) {
    const { data, error } = await readBodyWithLimit(request);
    if (error) {
      return error;
    }

    // Validiere gegen Schema falls vorhanden
    if (options.schema) {
      const validation = validateSchema(options.schema, data);
      if (!validation.success) {
        return validation.error;
      }
      return handler(validation.data, request);
    }

    return handler(data, request);
  }

  return handler(null, request);
}
