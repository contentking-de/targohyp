import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is not set. Email functionality will be disabled.");
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendMagicLinkEmail({
  email,
  url,
}: {
  email: string;
  url: string;
}) {
  if (!resend) {
    // Fallback für Development: Logge den Link in der Konsole
    console.log("🔗 Magic Link für", email, ":", url);
    return { success: true };
  }

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "targohyp@tasketeer.com",
      to: email,
      subject: "Anmeldelink für Targohyp",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #bb133e; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 28px;">Targohyp</h1>
            </div>
            <div style="background-color: #f9fafb; padding: 40px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
              <h2 style="color: #111827; margin-top: 0;">Anmeldelink</h2>
              <p style="color: #6b7280; font-size: 16px;">
                Klicken Sie auf den folgenden Button, um sich anzumelden:
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${url}" style="display: inline-block; background-color: #bb133e; color: white; padding: 14px 28px; text-decoration: none; border-radius: 9999px; font-weight: 600; font-size: 16px;">
                  Jetzt anmelden
                </a>
              </div>
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                Oder kopieren Sie diesen Link in Ihren Browser:<br>
                <a href="${url}" style="color: #bb133e; word-break: break-all;">${url}</a>
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                Dieser Link ist 24 Stunden gültig. Wenn Sie diese E-Mail nicht angefordert haben, können Sie sie ignorieren.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `Anmeldelink für Targohyp\n\nKlicken Sie auf diesen Link, um sich anzumelden:\n${url}\n\nDieser Link ist 24 Stunden gültig.`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending magic link email:", error);
    return { success: false, error };
  }
}

