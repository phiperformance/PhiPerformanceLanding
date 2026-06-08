import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="pt-40 pb-24 px-6 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-cardo text-5xl text-cream">{post.title}</h1>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}
