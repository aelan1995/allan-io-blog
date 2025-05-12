import Typesense from "typesense";
import { PostMeta } from "./getPosts"; // adjust if needed

const client = new Typesense.Client({
  nodes: [
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_HOST!,
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_SEARCH_ONLY_KEY!,
  connectionTimeoutSeconds: 2,
});

export async function typesenseSearch(query: string): Promise<PostMeta[]> {
  try {
    const searchResults = await client.collections("posts").documents().search({
      q: query,
      query_by: "title,content,tags",
    });

    return (
      searchResults.hits?.map((hit: any) => ({
        slug: hit.document.slug,
        title: hit.document.title,
        date: hit.document.date,
        excerpt: hit.document.excerpt,
        coverImage: hit.document.coverImage,
        tags: hit.document.tags,
        author: hit.document.author,
        authorImage: hit.document.authorImage,
        content: hit.document.content,
      })) ?? []
    );
  } catch (error) {
    console.error("❌ Typesense search error:", error);
    return [];
  }
}
