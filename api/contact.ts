type ContactRequestBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  requirements?: string;
  source?: string;
};

type RequestLike = {
  method?: string;
  body?: ContactRequestBody | string;
};

type ResponseLike = {
  status: (code: number) => ResponseLike;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "kamalyadav1559@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseBody(body: RequestLike["body"]): ContactRequestBody {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as ContactRequestBody;
    } catch {
      return {};
    }
  }
  return body;
}

export default async function handler(req: RequestLike, res: ResponseLike) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!RESEND_API_KEY || !FROM_EMAIL) {
    res.status(500).json({
      error: "Server email configuration is incomplete. Add RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    });
    return;
  }

  const body = parseBody(req.body);
  const payload = {
    firstName: asString(body.firstName),
    lastName: asString(body.lastName),
    email: asString(body.email),
    phone: asString(body.phone),
    company: asString(body.company),
    requirements: asString(body.requirements),
    source: asString(body.source) || "Landing Page",
  };

  if (
    !payload.firstName ||
    !payload.lastName ||
    !payload.email ||
    !payload.phone ||
    !payload.company ||
    !payload.requirements
  ) {
    res.status(400).json({ error: "Missing required form fields" });
    return;
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const text = [
    "New enquiry received from the Compton landing page.",
    "",
    `Source: ${payload.source}`,
    `Submitted At: ${submittedAt}`,
    `First Name: ${payload.firstName}`,
    `Last Name: ${payload.lastName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Company: ${payload.company}`,
    "",
    "Requirements:",
    payload.requirements,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 16px;">New Landing Page Enquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tbody>
          <tr><td style="padding: 8px; font-weight: 700;">Source</td><td style="padding: 8px;">${escapeHtml(payload.source)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Submitted At</td><td style="padding: 8px;">${escapeHtml(submittedAt)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">First Name</td><td style="padding: 8px;">${escapeHtml(payload.firstName)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Last Name</td><td style="padding: 8px;">${escapeHtml(payload.lastName)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Email</td><td style="padding: 8px;">${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Phone</td><td style="padding: 8px;">${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Company</td><td style="padding: 8px;">${escapeHtml(payload.company)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700; vertical-align: top;">Requirements</td><td style="padding: 8px; white-space: pre-wrap;">${escapeHtml(payload.requirements)}</td></tr>
        </tbody>
      </table>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: payload.email,
      subject: `New Landing Page Enquiry - ${payload.source} - ${payload.firstName} ${payload.lastName}`.trim(),
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const resendError = (await resendResponse.text().catch(() => "")) || "Unknown email provider error";
    res.status(502).json({ error: resendError });
    return;
  }

  res.status(200).json({ ok: true });
}
