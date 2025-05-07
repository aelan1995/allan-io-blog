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
}

export function getPosts(): PostMeta[] {
  const directory = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(directory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const content = fs.readFileSync(path.join(directory, filename), "utf-8");
      const { data } = matter(content);
      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || "",
        coverImage: data.coverImage || "",
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
