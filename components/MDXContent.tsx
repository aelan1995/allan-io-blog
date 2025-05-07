"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

interface Props {
  slug: string;
}

export default function MDXContent({ slug }: Props) {
  const [Post, setPost] = useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const mod = await import(`../content/blog/${slug}.mdx`);
        setPost(() => mod.default);
        setFrontmatter(mod.frontmatter || {});
      } catch (err) {
        console.error("Error loading MDX:", err);
        setError("Post not found.");
      }
    };
    loadPost();
  }, [slug]);

  if (error) {
    return <p className="text-center mt-20 text-red-400">{error}</p>;
  }

  if (!frontmatter) {
    return <p className="text-center mt-20 text-gray-400">Loading post...</p>;
  }

  return (
    <>
      <main className="bg-slate-900 text-white min-h-screen font-sans flex flex-col">
        <Navbar />

        {/* Content Section */}
        <section className="flex-grow max-w-3xl mx-auto space-y-12 bg-slate-900 py-10 px-4 w-full border-x border-slate-800">
          <div className="flex p-6 flex-col md:flex-row gap-8 ">
            {/* Column 1: Author */}
            <aside className="w-full md:w-1/6 flex flex-col py-6 items-center text-center ">
              {frontmatter.authorImage && (
                <Image
                  src={frontmatter.authorImage}
                  alt={frontmatter.author}
                  width={100}
                  height={100}
                  className="rounded-full mb-3"
                />
              )}
              {frontmatter.author && (
                <p className="text-lg font-medium">{frontmatter.author}</p>
              )}
            </aside>
            <div className="hidden md:block w-px bg-slate-800 h-full" />

            {/* Column 2: Content */}
            <div className="w-full space-y-4">
              {/* 2. Title & Date */}
              <div>
                <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
                <p className="text-sm text-slate-400">
                  {new Date(frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* 3. Content */}
              {frontmatter.excerpt && (
                <div className="prose prose-invert max-w-none">
                  <p>{frontmatter.excerpt}</p>
                </div>
              )}

              {/* 4. Tags */}
              {frontmatter.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {frontmatter.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-blue-800/20 text-blue-300 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer always at the bottom */}
        <footer className="text-center text-sm text-gray-600 py-6 border-t border-slate-800">
          © 2025 Allan.io
        </footer>
      </main>
    </>
  );
}
