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
    <div className="mx-auto grid grid-cols-1 place-items-center text-animation mt-10">
      {structuredPosts.map((post) => (
        <div
  key={post._id}
  className="w-full flex flex-col md:flex-row justify-between gap-10 py-8">
  
  {/* Text Content */}
  <div className="flex-1 flex flex-col space-y-3 justify-center ">
    <div className="flex gap-3 md:flex font-black justify-between text-lg dark:text-amber-50 ">
      {post.category}
      <div className="flex gap-1 items-center font-normal  ">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy", { locale: enUS })}
        </time>
      </div>
    </div>

    <div className="w-auto border-y-2 border-black dark:border-amber-50/50 py-2 ">
      <div className="flex justify-between gap-5">
        <div className="h-auto flex flex-col">

          <Link
            href={post.url}
            className="mt-2 mb-2 hover:text-zinc-500 dark:hover:text-zinc-500 text-2xl md:text-3xl font-semibold md:font-medium leading-9 md:leading-10 tracking-[-0.020em] text-animation line-clamp-3 hover:underline dark:text-amber-50 decoration-zinc-300 dark:decoration-zinc-600">
            {post.title}
          </Link>
          <div className="mb-2 font-medium dark:text-amber-50">
            {"By "}{post.author}
          </div>
        </div>
          {/* Image */}
          {post.image && (
            <div className="w-full md:w-auto h-auto my-2 place-content-center hidden md:inline flex-shrink-0">
              <Link   href={post.url}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={220}
                  height={140}
                  className="w-full h-auto object-cover border-2 border-black dark:border-amber-50 hover:rounded-2xl text-animation"
                  priority
                  />
              </Link> 
            </div>
          )}
      </div>
    </div>
  </div>
</div>

      ))}
    </div>
  );
}
