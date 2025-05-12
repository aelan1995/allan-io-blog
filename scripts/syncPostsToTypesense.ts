const { getAllPostings } = require("../lib/getPostings");
const { typesenseClient } = require("../lib/typesenseClient");

async function syncPosts() {
  const posts = getAllPostings();

  const mapped = posts.map((post: any) => ({
    id: post.slug,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    tags: post.tags?.join(", "),
    author: post.author,
    authorImage: post.authorImage,
    content: post.content,
    date: Math.floor(new Date(post.date).getTime() / 1000),
    date_str: post.date,
  }));

  for (const doc of mapped) {
    try {
      await typesenseClient.collections("posts").documents().upsert(doc);
      console.log(`✅ Upserted: ${doc.title}`);
    } catch (err) {
      console.error(`❌ Failed to upsert: ${doc.title}`, err);
    }
  }

  console.log(`\n✅ Synced ${mapped.length} posts to Typesense.`);
}

syncPosts();
