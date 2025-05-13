export {};
const { typesenseClient } = require("../lib/typesenseClient");

async function createCollection() {
  try {
    const schema = {
      name: "posts",
      fields: [
        { name: "id", type: "string" },
        { name: "slug", type: "string" },
        { name: "title", type: "string" },
        { name: "excerpt", type: "string", optional: true },
        { name: "coverImage", type: "string", optional: true },
        { name: "tags", type: "string", optional: true },
        { name: "author", type: "string", optional: true },
        { name: "authorImage", type: "string", optional: true },
        { name: "date", type: "int32" }, // ✅ required for sorting
        { name: "date_str", type: "string", optional: true },
        { name: "content", type: "string", optional: true },
      ],
      default_sorting_field: "date",
    };

    const result = await typesenseClient.collections().create(schema);
    console.log("✅ Collection created:", result.name);
  } catch (error) {
    if (error instanceof Error && error.message.includes("already exists")) {
      console.log("⚠️ Collection already exists — skipping creation.");
    } else {
      console.error("❌ Failed to create collection:", error);
    }
  }
}

createCollection();
