import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import BlogRenderer from "../../../components/BlogRenderer";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}

// ✅ define Page separately
async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  try {
    await fs.access(filePath);
  } catch {
    return notFound();
  }

  return <BlogRenderer slug={slug} />;
}

export default BlogPostPage;
