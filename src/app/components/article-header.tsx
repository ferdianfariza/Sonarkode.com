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
        <p className="font-mono font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-300 text-[13px]">
          <span className="font-semibold bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-sm">
            {post.category}
          </span>
        </p>

        {/* Title */}
        <h1 className="mt-4 mb-9 leading-9 md:leading-10 text-[1.9rem] md:text-4xl text-animation font-semibold tracking-tight">
          {post.title}
        </h1>

        {/* Summary */}
        <p className="font-normal text-[16px] mb-9 leading-6">
          <span className="font-semibold text-blue-500  dark:text-blue-400">
            Quick Summary -{">"}{" "}
          </span>
          {post.summary}
        </p>

        {/* Description */}
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-7 mb-3">
          <div>
            <p className="text-zinc-500 dark:text-zinc-500 font-normal text-[14px] mb-2">
              Posted by
            </p>
            <div className="flex gap-3">
              <AvatarText />
            </div>
          </div>
          <div className="hidden md:inline">
            <p className="text-zinc-500 dark:text-zinc-500 font-normal text-[14px] mb-2">
              Date Uploaded
            </p>
            <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-[15px] mb-2 capitaliz py-1">
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
