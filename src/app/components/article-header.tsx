"use client";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useParams } from "next/navigation";
import AvatarText from "@/app/components/avatar-text";
import Link from "next/link";

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
      <Link href="/" className="block mb-15 text-xs font-normal text-gray-400">
        {"<"}- Back to Home
      </Link>

      {/* Header */}
      <div className="space-y-6">
        {/* Category */}
        <p className="font-semibold tracking-widest text-xs mb-5 text-blue-500  dark:text-blue-400 uppercase">
          {post.category}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
          {post.title}
        </h1>

        {/* Summary */}
        <p className="font-normal text-[16px]">
          <span className="font-semibold text-blue-500  dark:text-blue-400 leading-5">
            Quick Summary -{">"}{" "}
          </span>
          {post.summary}
        </p>

        {/* Description */}
        <div className="flex flex-col md:flex-row gap-10 mb-5">
          <div>
            <p className="text-gray-400 font-normal text-[16px] mb-2">
              Posted by
            </p>
            <AvatarText />
          </div>

          <div>
            <p className="text-gray-400 font-normal text-[16px] mb-2">
              Date Uploaded
            </p>
            <p className="font-normal text-[16px] my-1">
              <time dateTime={post.date}>
                🗓️ Last Updated on {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
