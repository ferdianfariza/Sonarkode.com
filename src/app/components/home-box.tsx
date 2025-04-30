"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

type PostWithLayout = (typeof allPosts)[number] & { layout: "text" };

export default function HomeBox() {
  const [structuredPosts, setStructuredPosts] = useState<
    PostWithLayout[] | null
  >(null);

  useEffect(() => {
    const posts = allPosts
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
      .slice(4);

    const result: PostWithLayout[] = posts.map((post) => ({
      ...post,
      layout: "text",
    }));

    setStructuredPosts(result);
  }, []);

  if (!structuredPosts) return null;

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-11 lg:gap-9 transition-all duration-300 ease-in-out">
      {structuredPosts.map((post) => (
        <div
          key={post._id}
          className="w-full flex flex-col justify-between h-fit md:h-[330px] transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-3">
            <p className="text-[12px] font-mono font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300">
              <span className="bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-sm font-semibold">
                {post.category}
              </span>
            </p>

            <div className="mt-1 space-y-2">
              <Link
                href={post.url}
                className="text-xl md:text-2xl font-semibold leading-8 tracking-tight transition-all duration-700 ease-in-out line-clamp-3 hover:underline dark:text-zinc-100 decoration-zinc-300 dark:decoration-zinc-600">
                {post.title}
              </Link>

              <div className="flex items-center gap-1 pb-3 text-[12px] font-mono font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                <time dateTime={post.date}>
                  {format(parseISO(post.date), "LLLL d, yyyy", {
                    locale: enUS,
                  })}
                </time>
              </div>
            </div>

            <p className="mb-5 text-[15px] leading-6 text-zinc-700 dark:text-zinc-300 line-clamp-4">
              {post.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
