const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getAllPostings() {
  const directory = path.join(process.cwd(), "content/blog");

  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const content = fs.readFileSync(path.join(directory, filename), "utf-8");
    const { data } = matter(content);

    return {
      slug,
      title: data.title || "Untitled",
      date: String(data.date || ""),
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || "",
      tags: data.tags || [],
      author: data.author || "",
      authorImage: data.authorImage || "",
      content: data.content || "", // include full content for Typesense
    };
  });

  return posts;
}

module.exports = { getAllPostings };
