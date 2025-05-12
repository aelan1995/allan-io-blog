// lib/getPosts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  title: string;
  date: string;
  excerpt?: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
}

export function getPosts(
  page: number,
  pageSize: number
): {
  posts: PostMeta[];
  totalPages: number;
} {
  const directory = path.join(process.cwd(), "content/blog");
  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"));

  const allPosts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const fileContent = fs.readFileSync(
      path.join(directory, filename),
      "utf-8"
    );
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || "Untitled",
      date: String(data.date || ""), // ✅ ensure it's a string
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || "",
      tags: data.tags || [],
      author: data.author || "",
      authorImage: data.authorImage || "",
    };
  });

  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPages = Math.ceil(sortedPosts.length / pageSize);
  const start = (page - 1) * pageSize;
  const paginated = sortedPosts.slice(start, start + pageSize);

  return {
    posts: paginated,
    totalPages,
  };
}
