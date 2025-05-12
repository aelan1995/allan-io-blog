"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ClientSearchAndPostList from "./ClientSearchAndPostList";
import { PostMeta } from "@/lib/getPosts";

export default function ClientWrapper({
  posts,
  currentPage,
  totalPages,
}: {
  posts: PostMeta[];
  currentPage: number;
  totalPages: number;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ClientSearchAndPostList
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </QueryClientProvider>
  );
}
