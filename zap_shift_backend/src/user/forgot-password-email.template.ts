// src/auth/templates/forgot-password-email.template.ts
export const forgotPasswordEmailTemplate = ({
  name,
  resetUrl,
  expiryMinutes,
}: {
  name: string;
  resetUrl: string;
  expiryMinutes: number;
}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Reset your password</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, sans-serif; color:#1a1a1a;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f7fb; padding:40px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
              
              <tr>
                <td style="background:#111827; padding:24px 32px; text-align:center;">
                  <h1 style="margin:0; color:#ffffff; font-size:24px;">Password Reset Request</h1>
                </td>
              </tr>

              <tr>
                <td style="padding:32px;">
                  <p style="margin:0 0 16px; font-size:16px;">Hello ${name},</p>

                  <p style="margin:0 0 16px; font-size:15px; line-height:1.6;">
                    We received a request to reset your password. Click the button below to choose a new password.
                  </p>

                  <table role="presentation" cellspacing="0" cellpadding="0" style="margin:24px 0;">
                    <tr>
                      <td align="center" style="border-radius:8px; background:#2563eb;">
                        <a href="${resetUrl}" target="_blank"
                          style="display:inline-block; padding:14px 24px; font-size:15px; color:#ffffff; text-decoration:none; font-weight:bold;">
                          Reset Password
                        </a>
                      </td>
                    </tr>
                  </table>

                  <p style="margin:0 0 16px; font-size:14px; line-height:1.6; color:#4b5563;">
                    This link will expire in <strong>${expiryMinutes} minutes</strong>.
                  </p>

                  <p style="margin:0 0 16px; font-size:14px; line-height:1.6; color:#4b5563;">
                    If you did not request a password reset, you can safely ignore this email. Your password will remain unchanged.
                  </p>

                  <p style="margin:24px 0 8px; font-size:14px; color:#6b7280;">
                    If the button does not work, copy and paste this link into your browser:
                  </p>

                  <p style="margin:0; word-break:break-all; font-size:13px; color:#2563eb;">
                    ${resetUrl}
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:20px 32px; background:#f9fafb; border-top:1px solid #e5e7eb;">
                  <p style="margin:0; font-size:12px; color:#6b7280; text-align:center;">
                    This is an automated message. Please do not reply to this email.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};
