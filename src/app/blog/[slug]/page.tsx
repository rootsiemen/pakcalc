import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost } from "../../../lib/posts";
import { pageMeta, SITE_URL } from "../../lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "PakCalc", url: SITE_URL },
    publisher: { "@type": "Organization", name: "PakCalc", url: SITE_URL },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <a
        href="/blog"
        className="text-sm font-medium text-emerald-700 hover:underline"
      >
        ← All guides
      </a>
      <p className="mt-4 text-xs font-medium text-zinc-500">{post.date}</p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
        {post.title}
      </h1>
      <article
        className="mt-6 space-y-4 text-zinc-700 leading-relaxed
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-zinc-900 [&_h2]:pt-4
          [&_p]:text-[15px]
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:text-[15px]
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_ol]:text-[15px]
          [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse
          [&_th]:bg-zinc-100 [&_th]:text-left [&_th]:font-semibold [&_th]:px-3 [&_th]:py-2 [&_th]:border [&_th]:border-zinc-200
          [&_td]:px-3 [&_td]:py-2 [&_td]:border [&_td]:border-zinc-200
          [&_a]:text-emerald-700 [&_a]:font-medium [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <p className="font-bold text-zinc-900">
          Skip the math — get your exact number
        </p>
        <p className="mt-1 text-sm text-zinc-600">
          Use the free tool with a full line-by-line breakup.
        </p>
        <a
          href={post.toolHref}
          className="mt-4 inline-block rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Open the {post.toolLabel} →
        </a>
      </div>
    </div>
  );
}
