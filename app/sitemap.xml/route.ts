import { getPosts } from "@/lib/getPosts"; // Import from your helper
import { NextResponse } from "next/server";
import { format } from "date-fns";

const PAGE_SIZE = 100; // Set the number of posts per page

export async function GET() {
  const baseUrl = "https://allan-io-blog.vercel.app";

  // Fetch the first page to get the total number of pages
  const { posts: firstPagePosts, totalPages } = await getPosts(1, PAGE_SIZE);

  const staticUrls = ["", "/blog"];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
  .map(
    (path) => `  
  <url>
    <loc>${baseUrl}${path}</loc>
    <priority>1.0</priority>
  </url>`
  )
  .join("")}`;

  // Add first page posts
  xml += firstPagePosts
    .map(
      (post: { slug: string; date: string }) => `  
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${format(new Date(post.date), "yyyy-MM-dd")}</lastmod>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  // Loop through the rest of the pages and add the posts
  for (let page = 2; page <= totalPages; page++) {
    const { posts } = await getPosts(page, PAGE_SIZE); // Fetch next page's posts

    xml += posts
      .map(
        (post: { slug: string; date: string }) => `  
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${format(new Date(post.date), "yyyy-MM-dd")}</lastmod>
    <priority>0.8</priority>
  </url>`
      )
      .join("");
  }

  // Close the XML structure
  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
