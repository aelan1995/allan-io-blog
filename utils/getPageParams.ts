import { headers } from "next/headers";

export async function getPageParam(): Promise<number> {
  const headersList = await headers(); // ✅ await here

  const raw = headersList.get("x-next-url")?.split("?")[1] ?? "";
  const params = new URLSearchParams(raw);

  return parseInt(params.get("page") ?? "1", 10);
}
