import { PostMeta } from "./getPosts";

export async function getPosts(
  page: number,
  pageSize: number
): Promise<{
  posts: PostMeta[];
  totalPages: number;
}> {
  const res = await fetch(`/api/posts?page=${page}&pageSize=${pageSize}`);
  return await res.json();
}
