"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PostMeta } from "../lib/getPosts";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.015 }}
        >
          <Link href={`/blog/${post.slug}`} className="block group">
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-800/30 transition-shadow duration-300">
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-56 object-cover transition group-hover:opacity-90"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-400 mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="text-slate-300 text-base mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                {Array.isArray(post.tags) && post.tags.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 mt-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                  >
                    {post.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-800/20 text-blue-300 rounded-full"
                        variants={{
                          hidden: { opacity: 0, scale: 0.9 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
