import { NextResponse } from "next/server";

export async function GET() {
  const aiEndpoint =
    process.env.MONGODB_AI_ENDPOINT || "https://ai.mongodb.com";
  const aiKey =
    process.env.MONGODB_AI_KEY ||
    "al-85c617j9SHkasBVbLnT6uACqnX4BYViGXnvKh_UwZVB";

  try {
    const start = Date.now();
    const res = await fetch(`${aiEndpoint}/v1/embeddings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${aiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: "Brandon Reta-Cantu Florida Commercial Funding System Healthcheck",
        model: "voyage-finance-2",
      }),
      signal: AbortSignal.timeout(6000),
    });

    const latencyMs = Date.now() - start;

    if (!res.ok) {
      return NextResponse.json({
        connected: false,
        endpoint: aiEndpoint,
        status: res.status,
      });
    }

    const data = await res.json();
    return NextResponse.json({
      connected: true,
      endpoint: aiEndpoint,
      model: data.model || "voyage-finance-2",
      rerankModel: "rerank-2",
      dimensions: data.data?.[0]?.embedding?.length || 1024,
      latencyMs,
      geoEngine: "OpenStreetMap Overpass + Nominatim + Google Maps Deep-Link (Free)",
    });
  } catch (err: unknown) {
    return NextResponse.json({
      connected: false,
      endpoint: aiEndpoint,
      error: err instanceof Error ? err.message : "Timeout",
    });
  }
}
