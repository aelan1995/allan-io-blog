"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getPostsClient } from "@/lib/getPostsClient";
import ClientWrapper from "@/components/ClientWrapper";
import { PostMeta } from "@/lib/getPosts";

export default function HomeClient() {
  const params = useSearchParams();
  const pageParam = params.get("page") ?? "1";
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = parseInt(pageParam, 10);

  useEffect(() => {
    getPostsClient(currentPage, 2)
      .then((res) => {
        setPosts(res.posts);
        setTotalPages(res.totalPages);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, [pageParam]);

  return (
    <ClientWrapper
      posts={posts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
