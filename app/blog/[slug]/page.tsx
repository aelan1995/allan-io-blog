// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import BlogRenderer from "@/components/BlogRenderer";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  try {
    await fs.access(filePath); // Check if file exists
  } catch {
    return notFound(); // Return a 404 if file doesn't exist
  }

  return <BlogRenderer slug={slug} />;
}
