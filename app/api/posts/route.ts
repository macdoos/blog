import { NextResponse } from "next/server";
import { getPosts } from "../../blog/get-posts";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await getPosts());
}
