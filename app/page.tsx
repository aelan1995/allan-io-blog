"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/getPostsClient"; // 👈 must be a client-friendly version
import ClientWrapper from "@/components/ClientWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PostMeta } from "@/lib/getPosts";

export default function Home() {
  const params = useSearchParams();
  const pageParam = params.get("page") ?? "1";
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const currentPage = parseInt(pageParam, 10);
    getPosts(currentPage, 2).then((res) => {
      setPosts(res.posts);
      setTotalPages(res.totalPages);
    });
  }, [pageParam]);

  const currentPage = parseInt(pageParam, 10);

  return (
    <main className="bg-slate-900 text-white min-h-screen font-sans flex flex-col">
      <Navbar />
      <ClientWrapper
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <Footer />
    </main>
  );
}
