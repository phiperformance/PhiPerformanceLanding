"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { blogPosts } from "@/data/blog-posts";

export function BlogClient() {
  const { t } = useLang();

  return (
    <>
      <section className="pt-40 pb-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="font-montserrat text-[11px] uppercase tracking-[0.4em] text-gold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.blog.hero.eyebrow}
          </motion.p>
          <motion.h1
            className="font-cardo text-5xl md:text-7xl text-cream leading-tight mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.blog.hero.headline}
          </motion.h1>
          <motion.p
            className="font-montserrat text-sm text-cream/60 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.blog.hero.body}
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 bg-black-deep">
        <div className="max-w-5xl mx-auto">
          {blogPosts.length === 0 ? (
            <motion.div
              className="border border-cream/10 p-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="font-cardo text-8xl text-gold/20 block mb-6 select-none">Φ</span>
              <p className="font-montserrat text-sm text-cream/40 uppercase tracking-widest">
                {t.blog.comingSoon}
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border border-cream/10 p-8 hover:border-gold/40 transition-colors"
                >
                  <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-4">
                    {post.category}
                  </p>
                  <h2 className="font-cardo text-2xl text-cream mb-4 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-montserrat text-xs text-cream/50 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 font-montserrat text-[10px] uppercase tracking-widest text-cream/30">
                    {new Date(post.date).toLocaleDateString("es-AR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {t.blog.readMore} →
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
