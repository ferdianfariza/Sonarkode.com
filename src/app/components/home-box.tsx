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
    <div className="mx-auto gap-15 lg:gap-14 grid grid-cols-1 md:grid-cols-2 place-items-center transition-all duration-300 ease-in-out">
      {structuredPosts.map((post) => (
        <div
          key={post._id}
          className="w-full flex flex-col justify-between h-fit md:h-[330px] transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-3">
            <p className="font-mono font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 text-[12px]">
              <span className="font-semibold bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-sm">
                {post.category}
              </span>
            </p>
            <div className="space-y-2 mt-1">
              <Link
                href={post.url}
                className="font-semibold dark:text-zinc-100 tracking-tight hover:underline hover line-clamp-3 text-xl md:text-2xl leading-8">
                {" "}
                {post.title}
              </Link>
              <div className="flex gap-1 pb-3 items-center text-[12px] uppercase font-mono font-semibold tracking-wider text-zinc-600 dark:text-zinc-400">
                <time dateTime={post.date}>
                  {format(parseISO(post.date), "LLLL d, yyyy", {
                    locale: enUS,
                  })}
                </time>
              </div>
            </div>

            <p className="text-[15px] text-zinc-700 dark:text-zinc-300 leading-6 line-clamp-4 mb-5">
              {post.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
