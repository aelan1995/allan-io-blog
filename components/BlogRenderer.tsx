"use client";

import dynamic from "next/dynamic";

interface Props {
  slug: string;
}

const LazyMDXContent = dynamic(() => import("./MDXContent"), {
  ssr: false,
}) as React.ComponentType<{ slug: string }>;

export default function BlogRenderer({ slug }: Props) {
  return <LazyMDXContent slug={slug} />;
}
