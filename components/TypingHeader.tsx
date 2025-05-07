"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingHeader() {
  return (
    <span className="text-xl text-white-400 font-mono">
      <Typewriter
        words={["Developer Blog Posts", "Next.js Projects", "Tech Notes"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1500}
      />
    </span>
  );
}
