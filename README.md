Here’s an updated and more tailored `README.md` for your `allan-io-blog` project:

---

# 🧠 Allan IO Blog — AI-Powered Blog Automation

This is a [Next.js](https://nextjs.org) blog project that automates blog post generation and publication using AI. It is integrated with a Django REST API backend that generates `.mdx` content daily, stores it in PostgreSQL, and pushes the files into this frontend project. The frontend is deployed via Vercel.

## ✨ Features

- Built with **Next.js App Router**
- AI-generated blog content via **OpenAI API**
- Posts stored in **PostgreSQL**, served as `.mdx` files
- Frontmatter + `export const frontmatter` dual support for MDX
- Uses **Tailwind CSS** for styling
- Responsive and animated using **Framer Motion**
- Posts organized by year and month: `/content/blog/slug.mdx`

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

- `content/blog/YYYY/MM/` — Directory for generated `.mdx` posts
- `app/page.tsx` — Main landing page
- `components/` — Shared UI components
- `lib/getPosts.ts` — Fetches and parses MDX posts
- `public/` — Static assets (images, logos)

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
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

---

Would you like me to include badges (e.g., Vercel status, license) or example blog screenshots in the README too?
