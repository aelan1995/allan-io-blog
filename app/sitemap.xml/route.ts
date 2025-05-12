import { getPosts } from "@/lib/getPosts";
import { NextResponse } from "next/server";
import { format } from "date-fns";

export async function GET() {
  const baseUrl = "https://allan-io-blog.vercel.app";

  // Provide pagination arguments to getPosts and destructure the returned object
  const { posts } = getPosts(1, 100); // Assuming you want to fetch the first 100 posts

  const staticUrls = ["", "/blog"];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
  .map(
    (path) => `  
  <url>
    <loc>${baseUrl}${path}</loc>
    <priority>1.0</priority>
  </url>`
  )
  .join("")}
${posts
  .map(
    (post: { slug: string; date: string }) => `  
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${format(new Date(post.date), "yyyy-MM-dd")}</lastmod>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
