Here’s your updated `README.md`, now with **Typesense search** and **TanStack Query** integration included:

---

# 🧠 Allan IO Blog — AI-Powered Blog Automation

This is a [Next.js](https://nextjs.org) blog project that automates blog post generation and publication using AI. It integrates with a Django REST API backend that generates `.mdx` content daily, stores it in PostgreSQL, and pushes the files into this frontend project. The frontend is deployed via Vercel.

## ✨ Features

- Built with **Next.js App Router**
- AI-generated blog content via **OpenAI API**
- Posts stored in **PostgreSQL**, served as `.mdx` files
- Frontmatter + `export const frontmatter` dual support for MDX
- Search powered by **Typesense** (instant full-text search)
- Optimized data fetching with **TanStack Query**
- Uses **Tailwind CSS** for styling
- Responsive and animated using **Framer Motion**
- Posts organized by year and month: `/content/blog/YYYY/MM/slug.mdx`

## 🔍 Search

Search is implemented using [Typesense](https://typesense.org) with a daily sync of blog content. Blog posts are indexed for fields like `title`, `content`, and `tags`.

> GitHub Actions run every day at **12:30 AM Philippine Time** to sync content into Typesense automatically.

## 🚀 Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🛠 File Structure

- `content/blog/` — Directory for generated `.mdx` posts
- `app/page.tsx` — Main landing page
- `app/blog/[slug]/page.tsx` — Dynamic MDX post renderer
- `components/` — Shared UI components
- `lib/getPosts.ts` — Fetches and parses MDX posts
- `hooks/useTypesense.ts` — Client hook for Typesense search
- `scripts/syncPostsToTypesense.ts` — Syncs content to Typesense
- `.github/workflows/sync-typesense.yml` — Daily GitHub Action runner

## 📦 Deployment

This project is automatically deployed via [Vercel](https://vercel.com).

To manually deploy:

1. Push updates to your GitHub repo connected to Vercel.
2. Vercel handles CI/CD and builds your static site.

## 🔗 Related Projects

- Backend API: [`allan-io-blog-api`](https://github.com/your-username/allan-io-blog-api) (Django + OpenAI content generator)

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [MDX Docs](https://mdxjs.com)
- [Typesense Docs](https://typesense.org/docs/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

---
