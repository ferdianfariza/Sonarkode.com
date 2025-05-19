"use client";

import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Hourglass } from "lucide-react";
import { useParams } from "next/navigation";
import Mdx from "@/app/components/mdx-components";
import { type Post, allPosts } from "contentlayer/generated";
import { HeadingContext } from "@/app/components/heading-context";
import { SiteHeader } from "@/app/components/site-header";
import HomeFooter from "@/app/components/site-footer";

interface ArticleMainProps {
  post: Post;
}

export default function ArticleMain2({ post }: ArticleMainProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const addHeading = (heading: { id: string; text: string }) => {
    setHeadings(prev => (prev.some(h => h.id === heading.id) ? prev : [...prev, heading]));
  };

  const params = useParams();
  const currentSlug = typeof params?.slug === 'string' ? params.slug : '';

  const [suggestedPost, setSuggestedPost] = useState<Post | null>(null);
  useEffect(() => {
    const otherPosts = allPosts.filter(
      (p) => p._raw.flattenedPath.replace("posts/", "") !== currentSlug
    );
    if (otherPosts.length > 0) {
      const random = otherPosts[Math.floor(Math.random() * otherPosts.length)];
      setSuggestedPost(random);
    }
  }, [currentSlug]);

  const stickyTopClass = "top-18";

  return (
    <div>
      <SiteHeader />
      <div className="py-8 mx-4 lg:mx-auto max-w-[60rem]">
        {/* Article Header */}
        <article>
          <Link href="/" className="font-mono font-semibold hover:underline">[← home]</Link>
          <div className="mt-10 flex flex-col md:flex-row items-center gap-3 text-black dark:text-amber-50">
            <span className="uppercase text-[14px] font-mono bg-amber-300/50 border border-dashed border-black dark:border-amber-50/30 dark:bg-green-800/50 px-2 rounded-xs">
              {post.category}
            </span>
            <span className="text-[15px] text-zinc-800 dark:text-zinc-200">
              Published{" "}
              <time dateTime={post.date}>
                {format(parseISO(post.date), "LLL d, yyyy", { locale: enUS })}
              </time>
            </span>
          </div>
          <h1 className="dark:text-amber-50 mt-6 mb-4 text-center text-4xl md:text-5xl font-semibold tracking-tighter">
            {post.title}
          </h1>
          <p className="text-center text-neutral-700 dark:text-zinc-300 text-[17px] mb-4 leading-7">{post.summary}</p>
          <div className="flex justify-center items-center gap-5">
            <div className="flex gap-3 font-semibold">Written by Ferdian</div>
            <div className="flex text-[14px] text-neutral-700/70 dark:text-amber-50/50 gap-1 items-center">
              <Hourglass size={20} />
              {post.readtime}
            </div>
          </div>
          {post.image && (
            <div className="w-full my-10">
              <Image
                src={post.image}
                alt={post.title}
                width={1300}
                height={700}
                className="w-full h-auto object-cover border border-zinc-300 dark:border-zinc-700 rounded-md"
                priority
              />
            </div>
          )}
        </article>

        {/* TOC (mobile) */}
        <div className={`inline md:hidden mt-3 space-y-3 ${stickyTopClass}`}>
          <div className="font-bold border-b py-2 border-ui text-xs">[CONTENTS]</div>
          {headings.map((h, i) => (
            <a key={i} href={`#${h.id}`} className="block border-b text-neutral-600 dark:text-zinc-300 text-[14px] hover:font-semibold">
              {h.text}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:mx-5 lg:mx-0">
          <div className="col-span-2">
            <HeadingContext.Provider value={{ addHeading }}>
              <Mdx code={post.body.code} />
            </HeadingContext.Provider>

            {/* Footer */}
            <div className="flex flex-col mt-10">
              <p className="text-sm border-y border-ui py-3 font-mono font-bold text-zinc-800 dark:text-zinc-400 uppercase mb-4">[author]</p>
              <h2 className="text-2xl font-semibold tracking-tight">Written by Ferdian</h2>
              <p className="mt-4 text-[16px] text-foreground/70">
                While I primarily blog for my benefit, I hope that the stuff I write may be of some value to you the reader!
              </p>
              <Link
                href="/about"
                className="flex mt-5 items-center px-3 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-[16px] font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
              >
                More about Ferdian
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Read More */}
            {suggestedPost && (
              <div className="mt-16 w-full mx-auto">
                <p className="text-sm border-y border-ui py-3 font-mono font-bold text-zinc-800 dark:text-zinc-400 uppercase mb-4">[BACA JUGA]</p>
                <h3 className="text-2xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">{suggestedPost.title}</h3>
                <p className="text-[16px] text-zinc-600 dark:text-zinc-300 mb-6">{suggestedPost.summary}</p>
                <Link
                  href={suggestedPost.url}
                  className="inline-flex items-center px-3 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-[16px] font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors rounded-md"
                >
                  Mulai Baca
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          {/* TOC (desktop) */}
          <div className={`hidden md:inline col-span-1 mt-3 space-y-3 sticky self-start ${stickyTopClass}`}>
            <div className="font-bold border-b py-2 border-ui text-sm">[CONTENTS]</div>
            {headings.map((h, i) => (
              <a key={i} href={`#${h.id}`} className="block border-b text-neutral-600 dark:text-zinc-300 text-[17px] hover:font-semibold">
                {h.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}
