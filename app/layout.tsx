import "./globals.css";

import { Lato } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <Analytics />
      <body className="text-white">{children}</body>
    </html>
  );
}
