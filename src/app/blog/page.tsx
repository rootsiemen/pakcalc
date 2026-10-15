import type { Metadata } from "next";
import { posts } from "../../lib/posts";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/blog",
  title: "PakCalc Blog — Pakistan Tax & Money Guides",
  description:
    "Guides to Pakistan income tax slabs, PTA mobile tax, zakat nisab and more — practical explainers updated for 2026-27.",
});

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">PakCalc Blog</h1>
      <p className="mt-3 text-zinc-600">
        Practical guides to Pakistan's taxes and money rules — income tax slabs,
        PTA mobile tax, zakat nisab — updated for 2026-27.
      </p>
      <div className="mt-8 space-y-6">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition"
          >
            <p className="text-xs font-medium text-zinc-500">{p.date}</p>
            <h2 className="mt-1 text-xl font-bold">{p.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{p.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-emerald-700">
              Read guide →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
