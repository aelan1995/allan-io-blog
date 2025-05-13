// app/api/posts/route.ts
import { getPosts } from "@/lib/getPosts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") ?? "2", 10);

  // Await the result of getPosts
  const { posts, totalPages } = await getPosts(page, pageSize);

  return NextResponse.json({ posts, totalPages });
}
