import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import BlogRenderer from "../../../components/BlogRenderer";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const dir = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: Params) {
  return {
    title: params.slug.replace(/-/g, " "),
  };
}

export default async function Page({ params }: Params) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  try {
    await fs.access(filePath);
  } catch {
    return notFound();
  }

  return <BlogRenderer slug={slug} />;
}
