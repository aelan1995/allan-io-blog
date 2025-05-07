"use client";

import { useEffect, useState } from "react";

// MDX loader dynamic fallback
export default function MDXRenderer({ slug }: { slug: string }) {
  const [Post, setPost] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`../content/blog/${slug}.mdx`)
      .then((mod) => setPost(() => mod.default))
      .catch(() => setPost(() => null));
  }, [slug]);

  if (!Post)
    return <p className="text-center text-red-400">Post failed to load.</p>;

  return (
    <div className="bg-slate-900 max-w-3xl mx-auto px-4 py-10">
      <Post />
    </div>
  );
}
