import { getPosts as getPostsServer } from "@/lib/getPosts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") ?? "2", 10);

  const { posts, totalPages } = getPostsServer(page, pageSize);

  return NextResponse.json({ posts, totalPages });
}
