import { FacebookClient } from "@/lib/facebook";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const client = new FacebookClient(session.accessToken as string);
    const groups = await client.getGroups();
    return NextResponse.json(groups);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch groups" },
      { status: 500 }
    );
  }
}
