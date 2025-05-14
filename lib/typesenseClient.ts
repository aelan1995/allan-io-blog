import Typesense from "typesense";
import "dotenv/config"; // this enables local dev only, not needed in CI but safe

const host = process.env.TYPESENSE_HOST;
const port = process.env.TYPESENSE_PORT;
const protocol = process.env.TYPESENSE_PROTOCOL;
const apiKey = process.env.TYPESENSE_API_KEY;

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
