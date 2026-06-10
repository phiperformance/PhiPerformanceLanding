import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

function hash(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

interface TrackPayload {
  event_name: string;
  event_id: string;
  event_source_url?: string;
  email?: string;
  phone?: string;
  custom_data?: Record<string, unknown>;
}

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ error: "Meta CAPI not configured" }, { status: 500 });
  }

  const body: TrackPayload = await req.json();

  if (!body.event_name || !body.event_id) {
    return NextResponse.json({ error: "Missing event_name or event_id" }, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent") ?? undefined;
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? undefined;

  const userData: Record<string, string[]> = {};
  if (body.email) userData.em = [hash(body.email)];
  if (body.phone) userData.ph = [hash(body.phone.replace(/\D/g, ""))];

  const payload = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.event_id,
        action_source: "website",
        event_source_url: body.event_source_url,
        user_data: {
          ...userData,
          client_ip_address: clientIp,
          client_user_agent: userAgent,
        },
        custom_data: body.custom_data,
      },
    ],
  };

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    return NextResponse.json({ error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
