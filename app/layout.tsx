import "./globals.css";
import { Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://allan-io-blog.vercel.app"),
  title: "Allan IO Blog",
  description: "Explore developer-focused blog posts generated with AI.",
  openGraph: {
    title: "Allan IO Blog",
    description: "Explore developer-focused blog posts generated with AI.",
    url: "/",
    siteName: "Allan IO Blog",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Allan IO Blog Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan IO Blog",
    description: "Explore developer-focused blog posts generated with AI.",
    images: ["/images/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body className="text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
