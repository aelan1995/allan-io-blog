import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient"; // directly import it

export default function HomePage() {
  return (
    <main className="bg-slate-900 text-white min-h-screen font-sans flex flex-col">
      <Navbar />
      <Suspense fallback={<div>Loading posts...</div>}>
        <HomeClient />
      </Suspense>
      <Footer />
    </main>
  );
}
