// lib/typesenseClient.ts
const Typesense = require("typesense");
require("dotenv").config();

const client = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST,
      port: Number(process.env.TYPESENSE_PORT),
      protocol: process.env.TYPESENSE_PROTOCOL,
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 5,
});

module.exports = { typesenseClient: client }; // ✅ alias it during export
