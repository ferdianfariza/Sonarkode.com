"use client";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useParams } from "next/navigation";
import AvatarText from "@/app/components/avatar-text";
import Link from "next/link";
import { enUS } from "date-fns/locale";

export default function ArticleHeader() {
  const params = useParams(); // ensure params dengan useParams
  const slug = params.slug as string; // ensure slug as a string
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post?.body.code) {
    return <div>No post here!</div>;
  }

  return (
    <article>
      {/* Home button */}
      <Link href="/" className="block mb-15 text-xs font-normal text-zinc-400">
        {"<"}- Back to Home
      </Link>

      {/* Header */}
      <div>
        {/* Category */}
        <p className="font-semibold tracking-widest text-xs text-blue-500  dark:text-blue-400 uppercase">
          {post.category}
        </p>

        {/* Title */}
        <h1 className="mt-4 mb-9 text-[1.9rem] md:text-4xl font-semibold tracking-tight">
          {post.title}
        </h1>

        {/* Summary */}
        <p className="font-normal text-[16px] mb-5 leading-6">
          <span className="font-semibold text-blue-500  dark:text-blue-400">
            Quick Summary -{">"}{" "}
          </span>
          {post.summary}
        </p>

        {/* Description */}
        <div className="flex flex-col md:flex-row gap-10 mb-3">
          <div>
            <p className="text-zinc-500 dark:text-zinc-500 font-normal text-[14px] mb-2">
              Posted by
            </p>
            <div className="flex gap-3">
              <AvatarText />
            </div>
          </div>
          <div>
            <p className="text-zinc-500 dark:text-zinc-500 font-normal text-[14px] mb-2">
              Date Uploaded
            </p>
            <p className="text-zinc-800 dark:text-zinc-200 font-normal text-xs mb-2 capitalize">
              <span>🗓️ Last Updated on </span>
              <span>
                <time dateTime={post.date}>
                  {format(parseISO(post.date), "LLLL d, yyyy", {
                    locale: enUS,
                  })}
                </time>
              </span>
            </p>
          </div>
        </div>
        <hr className="mt-1 border-ui" />
      </div>
    </article>
  );
}
