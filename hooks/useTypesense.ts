// hooks/useTypesense.ts
import Typesense from "typesense";
import { PostMeta } from "../lib/getPosts";

// Initialize Typesense client
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

// Define the search function
export const useTypesense = async (query: string): Promise<PostMeta[]> => {
  try {
    const searchResults = await client.collections("posts").documents().search({
      q: query,
      query_by: "title,content", // You can adjust the query parameters
    });

    // Check if 'hits' is defined and map the results to the PostMeta structure
    if (searchResults && searchResults.hits) {
      return searchResults.hits.map((hit: any) => ({
        slug: hit.document.slug,
        title: hit.document.title,
        date: hit.document.date,
        excerpt: hit.document.excerpt,
        coverImage: hit.document.coverImage,
        tags: hit.document.tags,
        author: hit.document.author,
        authorImage: hit.document.authorImage,
        content: hit.document.content,
      }));
    }

    // Return an empty array if no hits found
    return [];
  } catch (error) {
    console.error("Error fetching search results from Typesense:", error);
    return [];
  }
};
