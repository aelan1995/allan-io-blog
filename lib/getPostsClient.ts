// lib/getPostsClient.ts
import { PostMeta } from "./getPosts";

// Client-side function to fetch posts
export const getPostsClient = async (
  page: number,
  pageSize: number
): Promise<{ posts: PostMeta[]; totalPages: number }> => {
  try {
    const res = await fetch(`/api/posts?page=${page}&pageSize=${pageSize}`);
    const data = await res.json();
    return {
      posts: data.posts,
      totalPages: data.totalPages,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { posts: [], totalPages: 1 }; // Return fallback if there is an error
  }
};
