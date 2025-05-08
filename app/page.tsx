import { getPosts } from "../lib/getPosts";
import PostList from "../components/PostList";
import Navbar from "../components/Navbar";

export default async function Home() {
  const posts = getPosts();

  return (
    <main className="bg-slate-900 text-white min-h-screen font-sans flex flex-col">
      {/* Navbar Test*/}
      <Navbar />

      {/* Blog Posts */}
      <div className="flex-grow">
        <PostList posts={posts} />
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-6 border-t border-slate-800">
        © 2025 Allan.io
      </footer>
    </main>
  );
}
