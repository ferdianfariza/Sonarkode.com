"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

type PostWithLayout = (typeof allPosts)[number] & { layout: "image" | "text" };

export default function HomeBox() {
  const [structuredPosts, setStructuredPosts] = useState<
    PostWithLayout[] | null
  >(null);

  useEffect(() => {
    const posts = allPosts
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
      .slice(4);

    const result = posts.map((post, index) => {
      const preferredLayout =
        Math.floor(index / 2) % 2 === 0 ? "image" : "text";
      const layout: "image" | "text" =
        preferredLayout === "image" && post.image ? "image" : "text";
      return { ...post, layout };
    });

    setStructuredPosts(result);
  }, []);

  if (!structuredPosts) return null;

  return (
    <div className="container mx-auto gap-8 lg:gap-12 grid grid-cols-1 sm:grid-cols-2 place-items-center">
      {structuredPosts.map((post) => (
        <div
          key={post._id}
          className="w-full flex flex-col justify-between h-auto md:h-[580px] border-b border-ui">
          <div className="flex flex-col space-y-3">
            {post.layout === "image" && (
              <Image
                src={post.image || "/fallback-image.jpg"}
                alt={post.title}
                width={0} // Necessary for Next.js when using CSS for layout
                height={0} // Necessary for Next.js when using CSS for layout
                sizes="(min-width: 640px) 50vw, 100vw" // Adjust based on your grid layout for better optimization
                // (e.g., 50vw on screens wider than sm breakpoint if it's a 2-col grid)
                className="w-full max-h-[250px] object-cover rounded-sm border" // Correct Tailwind class for max height
              />
            )}
            <p className="font-mono font-medium uppercase tracking-widest text-blue-500   dark:text-blue-400  text-[12px]">
              <span className="font-semibold">{post.category}</span>
              <span className="hidden sm:inline"> - {post.readtime}</span>
            </p>
            <Link
              href={post.url}
              className={`font-semibold dark:text-zinc-100 tracking-tight hover:underline ${
                post.layout === "text"
                  ? "line-clamp-5 text-2xl md:text-3xl leading-10"
                  : "text-xl  line-clamp-3 leading-8"
              }`}>
              {post.title}
            </Link>
            <p
              className={`text-[15px] text-zinc-600 dark:text-zinc-400 leading-5  ${
                post.layout === "text" ? "line-clamp-5" : "line-clamp-3"
              }`}>
              {post.summary}
            </p>
          </div>

          <p className="text-[12px] font-mono font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400 mt-4 mb-3">
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLL d, yyyy", {
                locale: enUS,
              }).toUpperCase()}
            </time>
            <span className="hidden sm:inline ">
              {" • "} {post.author}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
