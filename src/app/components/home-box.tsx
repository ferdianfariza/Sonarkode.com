"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";
import { Feather } from "lucide-react";

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
    <div className="container mx-auto gap-15 lg:gap-14 grid grid-cols-1 sm:grid-cols-2 place-items-center">
      {structuredPosts.map((post) => (
        <div
          key={post._id}
          className="w-full flex flex-col justify-between h-fit md:h-[330px]">
          <div className="flex flex-col space-y-4 md:space-y-3">
            <p className="font-mono font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 text-[12px]">
              <span className="font-semibold bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-sm">
                {post.category}
              </span>
            </p>
            <Link
              href={post.url}
              className="font-semibold dark:text-zinc-100 tracking-tight hover:underline hover line-clamp-3 text-xl md:text-2xl leading-8">
              {" "}
              {post.title}
            </Link>

            <p className="text-[15px] text-zinc-700 dark:text-zinc-300 leading-5 mb-5 line-clamp-4">
              {post.summary}
            </p>

            <div className="flex gap-1 items-center text-[12px] font-normal tracking-wide text-zinc-500 dark:text-zinc-400">
              <Feather size="15" />
              <time dateTime={post.date}>
                {format(parseISO(post.date), "LLLL d, yyyy", {
                  locale: enUS,
                })}
              </time>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
