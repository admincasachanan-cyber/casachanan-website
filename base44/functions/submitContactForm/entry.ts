import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, company, interest, message } = await req.json();

    const internalBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
  <div style="background: #1a1a1a; padding: 24px 32px; border-bottom: 3px solid #c0392b;">
    <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 1px;">NEW WEBSITE ENQUIRY</h2>
  </div>
  <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e5e5e5;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; font-weight: bold; color: #666; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Name</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #1a1a1a;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; font-weight: bold; color: #666; text-transform: uppercase; letter-spacing: 1px;">Email</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #1a1a1a;"><a href="mailto:${email}" style="color: #c0392b;">${email}</a></td>
      </tr>
      ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; font-weight: bold; color: #666; text-transform: uppercase; letter-spacing: 1px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #1a1a1a;">${company}</td></tr>` : ''}
      ${interest ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; font-weight: bold; color: #666; text-transform: uppercase; letter-spacing: 1px;">Interest</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #1a1a1a;">${interest}</td></tr>` : ''}
    </table>
    <div style="margin-top: 24px;">
      <div style="font-size: 12px; font-weight: bold; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Message</div>
      <div style="background: #fff; border: 1px solid #e5e5e5; padding: 16px; font-size: 14px; color: #333; line-height: 1.7; white-space: pre-wrap;">${message}</div>
    </div>
  </div>
  <div style="padding: 16px 32px; background: #1a1a1a; text-align: center;">
    <p style="color: #555; font-size: 11px; margin: 0;">Casa Chanan Group · casachanan.com</p>
  </div>
</div>`.trim();

    // Get admin users to send notification to
    const admins = await base44.asServiceRole.entities.User.filter({ role: 'admin' });

    for (const admin of admins) {
      await base44.asServiceRole.integrations.Core.SendEmail({
        from_name: 'Casa Chanan Website',
        to: admin.email,
        subject: `New Enquiry from ${name}${interest ? ` — ${interest}` : ''}`,
        body: internalBody,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});