import Typesense from "typesense";

// ✅ Validate or assert environment variables
const host = process.env.NEXT_PUBLIC_TYPESENSE_HOST;
const port = process.env.NEXT_PUBLIC_TYPESENSE_PORT;
const protocol = process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL;
const apiKey = process.env.NEXT_PUBLIC_TYPESENSE_SEARCH_ONLY_KEY;

if (!host || !port || !protocol || !apiKey) {
  throw new Error("Missing required Typesense environment variables");
}

export const typesenseClient = new Typesense.Client({
  nodes: [
    {
      host,
      port: Number(port),
      protocol,
    },
  ],
  apiKey,
  connectionTimeoutSeconds: 2,
});
