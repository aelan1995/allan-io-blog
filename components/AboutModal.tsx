"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AboutModalTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Link */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 border border-slate-700 rounded-full text-lg font-bold text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition duration-200"
      >
        About Me
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              className="bg-slate-900 border border-slate-700 text-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <div className="flex flex-col items-center text-center">
                <Image
                  src="/logos/logo_pic.png"
                  alt="Allan.io"
                  width={100}
                  height={100}
                  className="rounded-full border border-slate-600 mb-4"
                />
                <h2 className="text-xl font-semibold">Allan Punzalan</h2>
                <p className="text-slate-400 mt-2 text-lg">
                  Fullstack Developer focused on automation, web scraping, and
                  AI-driven workflows. I build scalable solutions for digital
                  productivity.
                </p>

                {/* View Website Button */}
                <a
                  href="https://allan-io.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-4 py-2 rounded transition"
                >
                  View My Website
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
