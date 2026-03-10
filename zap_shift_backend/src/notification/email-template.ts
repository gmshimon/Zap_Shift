export const riderApprovedEmailTemplate = ({
  name,
  loginUrl,
}: {
  name: string;
  loginUrl: string;
}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rider Application Approved</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f7fb; padding:40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.08);">
            
            <tr>
              <td style="background:#16a34a; padding:28px 32px; text-align:center;">
                <h1 style="margin:0; font-size:28px; color:#ffffff;">Application Approved</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px; font-size:16px;">Hello ${name},</p>

                <p style="margin:0 0 16px; font-size:16px; line-height:1.7;">
                  Good news. Your rider application has been <strong>approved</strong>.
                </p>

                <p style="margin:0 0 16px; font-size:16px; line-height:1.7;">
                  You can now access the rider features in the system and start operating once your account is ready.
                </p>

                <p style="margin:0 0 24px; font-size:16px; line-height:1.7;">
                  Please log in to your account to view your rider dashboard and assigned tasks.
                </p>

                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 24px;">
                  <tr>
                    <td align="center" style="border-radius:8px; background:#16a34a;">
                      <a href="${loginUrl}" style="display:inline-block; padding:14px 24px; font-size:16px; color:#ffffff; text-decoration:none; font-weight:bold;">
                        Login to Your Account
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 12px; font-size:15px; color:#4b5563; line-height:1.7;">
                  If you did not submit this application, please contact support immediately.
                </p>

                <p style="margin:24px 0 0; font-size:16px;">
                  Regards,<br />
                  <strong>ZapShift Team</strong>
                </p>
              </td>
            </tr>

            <tr>
              <td style="background:#f9fafb; padding:18px 32px; text-align:center; font-size:13px; color:#6b7280;">
                © ${new Date().getFullYear()} ZapShift. All rights reserved.
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

export const riderRejectedEmailTemplate = ({
  name,
  supportEmail,
}: {
  name: string;
  supportEmail: string;
}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rider Application Update</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f7fb; padding:40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.08);">
            
            <tr>
              <td style="background:#dc2626; padding:28px 32px; text-align:center;">
                <h1 style="margin:0; font-size:28px; color:#ffffff;">Application Update</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px; font-size:16px;">Hello ${name},</p>

                <p style="margin:0 0 16px; font-size:16px; line-height:1.7;">
                  Thank you for your interest in becoming a rider with ZapShift.
                </p>

                <p style="margin:0 0 16px; font-size:16px; line-height:1.7;">
                  After reviewing your application, we are sorry to inform you that it has been <strong>rejected</strong> at this time.
                </p>

                <p style="margin:0 0 24px; font-size:16px; line-height:1.7;">
                  This decision may be due to incomplete information, verification issues, or current operational requirements.
                </p>

                <div style="margin:0 0 24px; padding:16px; background:#fff7ed; border:1px solid #fdba74; border-radius:8px; color:#9a3412; font-size:15px; line-height:1.6;">
                  You may contact our support team if you believe this was a mistake or if you would like to apply again in the future.
                </div>

                <p style="margin:0 0 12px; font-size:15px; line-height:1.7;">
                  Support: <a href="mailto:${supportEmail}" style="color:#2563eb; text-decoration:none;">${supportEmail}</a>
                </p>

                <p style="margin:24px 0 0; font-size:16px;">
                  Regards,<br />
                  <strong>ZapShift Team</strong>
                </p>
              </td>
            </tr>

            <tr>
              <td style="background:#f9fafb; padding:18px 32px; text-align:center; font-size:13px; color:#6b7280;">
                © ${new Date().getFullYear()} ZapShift. All rights reserved.
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

export const riderAccountCreatedEmailTemplate = ({
  name,
  email,
  temporaryPassword,
  loginUrl,
}: {
  name: string;
  email: string;
  temporaryPassword: string;
  loginUrl: string;
}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Rider Account Has Been Created</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f7fb; padding:40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.08);">
            
            <tr>
              <td style="background:#2563eb; padding:28px 32px; text-align:center;">
                <h1 style="margin:0; font-size:28px; color:#ffffff;">Your Rider Account Is Ready</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px; font-size:16px;">Hello ${name},</p>

                <p style="margin:0 0 16px; font-size:16px; line-height:1.7;">
                  Your rider application has been <strong>approved</strong>, and we have created a new account for you.
                </p>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  Use the credentials below to log in:
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 24px; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
                  <tr>
                    <td style="padding:14px 16px; background:#f9fafb; width:160px; font-weight:bold;">Email</td>
                    <td style="padding:14px 16px;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px; background:#f9fafb; font-weight:bold;">Temporary Password</td>
                    <td style="padding:14px 16px;">${temporaryPassword}</td>
                  </tr>
                </table>

                <div style="margin:0 0 24px; padding:16px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; color:#1d4ed8; font-size:15px; line-height:1.6;">
                  For security reasons, you should change your password immediately after your first login.
                </div>

                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 24px;">
                  <tr>
                    <td align="center" style="border-radius:8px; background:#2563eb;">
                      <a href="${loginUrl}" style="display:inline-block; padding:14px 24px; font-size:16px; color:#ffffff; text-decoration:none; font-weight:bold;">
                        Login Now
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:24px 0 0; font-size:16px;">
                  Regards,<br />
                  <strong>ZapShift Team</strong>
                </p>
              </td>
            </tr>

            <tr>
              <td style="background:#f9fafb; padding:18px 32px; text-align:center; font-size:13px; color:#6b7280;">
                © ${new Date().getFullYear()} ZapShift. All rights reserved.
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
