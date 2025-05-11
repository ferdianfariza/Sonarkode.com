"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";
import Image from "next/image";

type PostWithLayout = (typeof allPosts)[number] & { layout: "text" };

export default function HomeBox() {
  const [structuredPosts, setStructuredPosts] = useState<
    PostWithLayout[] | null
  >(null);

  useEffect(() => {
    const posts = allPosts
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
      .slice(1);

    const result: PostWithLayout[] = posts.map((post) => ({
      ...post,
      layout: "text",
    }));

    setStructuredPosts(result);
  }, []);

  if (!structuredPosts) return null;

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-1 place-items-center text-animation">
      {structuredPosts.map((post) => (
        <div
  key={post._id}
  className="w-full flex flex-col md:flex-row justify-between gap-10 py-8 border-b  border-ui">
  
  {/* Text Content */}
  <div className="flex-1 flex flex-col space-y-3 justify-center ">
    <div className="gap-3 md:flex font-semibold text-blue-600 dark:text-blue-300 text-[12px]">
      <div className="flex gap-1 items-center text-[16px] font-normal text-neutral-400 dark:text-zinc-500">
        Published{" "}
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy", { locale: enUS })}
        </time>
      </div>
    </div>

    <div className="space-y-2">
      <Link
        href={post.url}
        className="hover:text-zinc-500 dark:hover:text-zinc-500 text-xl md:text-2xl font-semibold leading-8 tracking-[-0.020em] text-animation line-clamp-2 hover:underline dark:text-zinc-100 decoration-zinc-300 dark:decoration-zinc-600">
        {post.title}
      </Link>
    </div>
  </div>

  {/* Image */}
  {post.image && (
    <div className="w-full md:w-auto h-auto hidden md:inline flex-shrink-0">
      <Image
        src={post.image}
        alt={post.title}
        width={220}
        height={140}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  )}
</div>

      ))}
    </div>
  );
}
