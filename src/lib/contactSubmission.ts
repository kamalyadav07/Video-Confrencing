export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  requirements: string;
};

type SubmitLeadResult = {
  mode: "google-sheet" | "api" | "mailto";
};

const FALLBACK_EMAIL = "kamalyadav1559@gmail.com";
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

function openMailtoDraft(payload: ContactPayload, source: string) {
  const subject = encodeURIComponent(
    `New Landing Page Enquiry - ${source} - ${payload.firstName} ${payload.lastName}`.trim(),
  );

  const body = encodeURIComponent(
    [
      "New enquiry received from the Compton landing page.",
      "",
      `Source: ${source}`,
      `First Name: ${payload.firstName}`,
      `Last Name: ${payload.lastName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Company: ${payload.company}`,
      "",
      "Requirements:",
      payload.requirements,
    ].join("\n"),
  );

  window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
}

export async function submitLead(payload: ContactPayload, source: string): Promise<SubmitLeadResult> {
  if (GOOGLE_SCRIPT_URL) {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...payload,
          source,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit to Google Sheet");
      }

      return { mode: "google-sheet" };
    } catch {
      // Fall through to backend/mail fallback so submissions still have a path.
    }
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        source,
      }),
    });

    const result = (await response.json().catch(() => null)) as { error?: string } | null;

    if (!response.ok) {
      throw new Error(result?.error ?? "Failed to submit contact request");
    }

    return { mode: "api" };
  } catch {
    openMailtoDraft(payload, source);
    return { mode: "mailto" };
  }
}
