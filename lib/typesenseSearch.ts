import Typesense from "typesense";
import { PostMeta } from "./getPosts";

type PostDocument = PostMeta & { content: string };

interface TypesenseHit {
  document: PostDocument;
}

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

    const hits = (searchResults as { hits?: TypesenseHit[] }).hits;

    return (
      hits?.map((hit) => ({
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
