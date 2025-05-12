"use client";

import { useState } from "react";
import Search from "./Search";
import PostList from "./PostList";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useTypesense } from "../hooks/useTypesense";
import type { PostMeta } from "@/lib/getPosts";

interface Props {
  posts: PostMeta[];
  currentPage: number;
  totalPages: number;
}

export default function ClientSearchAndPostList({
  posts,
  totalPages,
  currentPage,
}: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: filteredPosts = [],
    isLoading,
    error,
  } = useQuery<PostMeta[], Error>({
    queryKey: ["searchPosts", searchQuery],
    queryFn: () => useTypesense(searchQuery),
    enabled: searchQuery.trim().length > 0,
  });

  const showSearchResults = searchQuery.trim().length > 0;

  return (
    <>
      <Search onQueryChange={setSearchQuery} />

      {showSearchResults ? (
        <>
          {isLoading && <p className="text-center text-gray-400">Loading...</p>}
          {error && <p className="text-center text-red-400">Search error</p>}
          {!isLoading && filteredPosts.length === 0 && (
            <div className="max-w-xl mx-auto my-8 p-6 rounded-xl bg-slate-800 border border-slate-700 text-center text-gray-300 shadow-md">
              No posts found
            </div>
          )}
          {filteredPosts.length > 0 && <PostList posts={filteredPosts} />}
        </>
      ) : (
        <>
          <PostList posts={posts} />
          <nav className="flex justify-center items-center space-x-2 mb-6">
            {Array.from({ length: totalPages }, (_, i) => {
              const page = i + 1;
              const isActive = page === currentPage;
              return (
                <Link
                  key={page}
                  href={`/?page=${page}`}
                  className={`px-4 py-2 rounded-lg border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-700"
                      : "text-blue-400 border-slate-700 hover:bg-slate-800"
                  } transition`}
                >
                  {page}
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </>
  );
}
