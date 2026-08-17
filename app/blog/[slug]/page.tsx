import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts, type BlogBlock } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.coverImage ? `${SITE_URL}${post.coverImage}` : undefined,
    keywords: post.keywords,
  });
}

const WORDS_PER_MINUTE = 200;

function readingMinutes(content: BlogBlock[]): number {
  const words = content.reduce((n, b) => {
    const text = b.type === "ul" ? b.items.join(" ") : b.text;
    return n + text.trim().split(/\s+/).length;
  }, 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // `iso` is a plain YYYY-MM-DD, parsed as UTC midnight. Without this it
    // renders as the previous day in AR (UTC-3).
    timeZone: "UTC",
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="font-cardo text-3xl md:text-4xl text-cream mt-16 mb-6">{block.text}</h2>;
    case "h3":
      return <h3 className="font-cardo text-2xl text-cream mt-10 mb-4">{block.text}</h3>;
    case "p":
      return <p className="font-montserrat text-[15px] text-cream/70 leading-[1.9] mb-6">{block.text}</p>;
    case "ul":
      return (
        <ul className="flex flex-col gap-3 mb-6">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold text-sm mt-1 leading-none">—</span>
              <span className="font-montserrat text-[15px] text-cream/70 leading-[1.8]">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-gold pl-6 my-10">
          <p className="font-cardo text-2xl md:text-3xl text-cream leading-snug italic">{block.text}</p>
        </blockquote>
      );
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.coverImage ? `${SITE_URL}${post.coverImage}` : `${SITE_URL}/og-image.jpg`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Phi Performance Marketing",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className="bg-black">
        {/* Breadcrumb */}
        <div className="pt-24 px-6">
          <div className="max-w-3xl mx-auto">
            <nav className="font-montserrat text-[10px] uppercase tracking-widest text-cream/30 flex items-center gap-2">
              <Link href="/" className="hover:text-cream transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-cream transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gold truncate max-w-[50vw]">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <header className="pt-10 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold mb-6">{post.category}</p>
            <h1 className="font-cardo text-4xl md:text-6xl text-cream leading-[1.1] mb-8">{post.title}</h1>
            <div className="flex items-center gap-4 font-montserrat text-[11px] uppercase tracking-widest text-cream/40">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{readingMinutes(post.content)} min de lectura</span>
            </div>
          </div>
        </header>

        {/* Cover */}
        {post.coverImage && (
          <div className="px-6 mb-14">
            <div className="max-w-3xl mx-auto relative aspect-video border border-cream/10 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            <div className="mt-20 pt-10 border-t border-cream/10">
              <Link
                href="/blog"
                className="font-montserrat text-xs uppercase tracking-widest text-cream/40 hover:text-cream transition-colors"
              >
                ← Volver al Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
