"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

type PostWithLayout = (typeof allPosts)[number] & { layout: "text" };

export default function HomeBox() {
  const [structuredPosts, setStructuredPosts] = useState<PostWithLayout[] | null>(null);

  useEffect(() => {
    const posts = allPosts
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
      .slice(0);

    const result: PostWithLayout[] = posts.map((post) => ({
      ...post,
      layout: "text",
    }));

    setStructuredPosts(result);
  }, []);

  if (!structuredPosts) return null;

  return (
    <div className="mx-auto mt-10 grid grid-cols-1 place-items-center text-animation">

        {/* Title and Category */}
        <div className="flex md:hidden w-full border-b border-ui">
          <div className="pb-2 font-mono text-xs">
            / TITLEs
          </div>
        </div>

      <div className="hidden md:grid w-full grid-cols-8 gap-8 ">

        {/* Date */}
        <div className="col-span-1 w-full space-y-5">
          <div className="border-b border-ui pb-2 font-mono text-xs">
            / DATE
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:inline col-span-2 h-full w-full space-y-5">
          <div className="border-b border-ui pb-2 font-mono text-xs">
            / IMAGE
          </div>
        </div>

        {/* Title and Category */}
        <div className="hidden md:inline md:col-span-5 w-full space-y-5">
          <div className="border-b border-ui pb-2 font-mono text-xs">
            / TITLE
          </div>
        </div>

      </div>

     {structuredPosts.map((post) => (
      <div
        key={post._id}
        className="flex w-full flex-col border-b border-dashed border-ui group hover:bg-amber-200/20 dark:hover:bg-green-800/50"
      >
        <Link href={post.url} className="grid w-full grid-cols-1 gap-8 py-7 md:grid-cols-8">

          {/* Date */}
          <div className="hidden md:block col-span-1 w-full space-y-5">
            <div className="flex font-mono text-sm">
              <time dateTime={post.date}>
                {format(parseISO(post.date), "yyyy.M.d")}
              </time>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block col-span-2 space-y-5">
            <div className="w-full border border-ui bg-amber-200/20 p-1 dark:bg-green-800/50 group-hover:bg-amber-400">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs mb-1">[ FIG. 31 ]</p>
                <p className="font-mono text-xs mb-1">[ X ]</p>
              </div>
              {post.image && (
                <div className="mb-2 h-auto place-content-center">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={220}
                    height={140}
                    className="text-animation w-full border border-black object-cover dark:border-amber-50"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
              
          

          {/* Title and Category */}
          <div className="col-span-5 w-full space-y-3">
            <h1 className="text-2xl font-medium tracking-tight">{post.title}</h1>
            <div className="inline-block border-dashed border border-ui rounded-sm px-1 py-0.5 font-mono text-xs">
              {post.category}
            </div>
            <div className="inline-block rounded-sm py-0.5 text-xs">
              {post.summary}
            </div>
            <div className="inline-block rounded-sm py-0.5 text-xs">
              Read more...
            </div>

          </div>

        </Link>
      </div>
    ))}

    </div>
  );
}
