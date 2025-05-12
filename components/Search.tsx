"use client";

import { useState, useEffect } from "react";

export default function Search({
  onQueryChange,
}: {
  onQueryChange: (query: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onQueryChange(inputValue.trim());
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue, onQueryChange]);

  return (
    <section className="max-w-3xl mx-auto p-4">
      <div className="w-full sm:w-fit">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full sm:w-96 px-4 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 transition"
          placeholder="🔍 Search blog posts..."
        />
      </div>
    </section>
  );
}
