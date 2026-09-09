import { NextResponse } from "next/server";

const DEFAULT_ADMIN_API_URL = "http://localhost:3001/api/public/content";

function getAdminApiUrl() {
  return process.env.COXBIT_ADMIN_API_URL || DEFAULT_ADMIN_API_URL;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const adminUrl = new URL(getAdminApiUrl());

  for (const [key, value] of searchParams.entries()) {
    adminUrl.searchParams.set(key, value);
  }

  try {
    const response = await fetch(adminUrl, { cache: "no-store" });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error || "Failed to load events from coxbit admin." },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to connect to coxbit admin." },
      { status: 502 }
    );
  }
}
