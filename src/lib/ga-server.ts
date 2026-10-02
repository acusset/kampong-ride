import { cookies } from "next/headers";

const GA_ENDPOINT = "https://www.google-analytics.com/mp/collect";

// `_ga` looks like "GA1.1.1234567890.1700000000"; the client ID is the last two parts.
function parseClientId(gaCookie: string | undefined) {
  const parts = gaCookie?.split(".");
  return parts && parts.length >= 4 ? parts.slice(-2).join(".") : undefined;
}

/**
 * Sends an event to GA4 via the Measurement Protocol. Runs server-side so it
 * can't be blocked by ad blockers and only fires after a confirmed DB insert.
 * No-ops unless NEXT_PUBLIC_GA_ID and GA_API_SECRET are set.
 */
export async function sendGAServerEvent(
  name: string,
  params: Record<string, string | number | boolean> = {},
) {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  const apiSecret = process.env.GA_API_SECRET;
  if (!measurementId || !apiSecret) return;

  try {
    const cookieStore = await cookies();
    const clientId =
      parseClientId(cookieStore.get("_ga")?.value) ?? crypto.randomUUID();

    await fetch(
      `${GA_ENDPOINT}?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: "POST",
        body: JSON.stringify({
          client_id: clientId,
          events: [{ name, params }],
        }),
      },
    );
  } catch (error) {
    console.error("Error when sending GA event:", error);
  }
}
