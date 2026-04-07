import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const username =
    request.nextUrl.searchParams.get("username")?.trim() || "codeDeSyntax";

  const sourceUrl = `https://profile-summary-for-github.com/api/user/${encodeURIComponent(username)}`;

  try {
    const response = await fetch(sourceUrl, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch profile summary", status: response.status },
        { status: 502 },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while loading profile summary" },
      { status: 500 },
    );
  }
}
