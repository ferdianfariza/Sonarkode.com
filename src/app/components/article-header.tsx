"use client";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useParams } from "next/navigation";
import AvatarText from "@/app/components/avatar-text";
import Link from "next/link";
import { enUS } from "date-fns/locale";
import Image from "next/image";

export default function ArticleHeader() {
  const params = useParams();
  const slug = params.slug as string;
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${slug}`
  );

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
        <p className="font-mono font-semibold text-center uppercase tracking-widest text-blue-700 dark:text-blue-300 text-[13px]">
          <span className="font-semibold bg-blue-200 dark:bg-blue-900 px-2 py-0.5 rounded-sm">
            {post.category}
          </span>
        </p>

        {/* Title */}
        <h1 className="mt-6 mb-6 leading-9 text-center md:leading-13 text-[1.9rem] md:text-5xl text-animation font-semibold tracking-tighter">
          {post.title}
        </h1>

        {/* Summary */}
        <p className="font-normal text-[17px] mb-6 leading-6 text-center text-neutral-600 dark:text-zinc-300">
          {post.summary}
        </p>
        {/* Description */}
        <div className="flex gap-5 md:gap-7 place-content-center">
          <div>
          
            <div className="flex gap-3">
              <AvatarText />
            </div>
          </div>
          <div className="flex">
            
            <div className="text-[15px] py-1">
              <div className="text-zinc-800 dark:text-zinc-200 font-regular">
                Uploaded on
              </div>
              <div className="text-zinc-800 dark:text-zinc-200 font-semibold">
                <time dateTime={post.date}>
                  {format(parseISO(post.date), "LLLL d, yyyy", {
                    locale: enUS,
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
     {post.image && (
  <div className="w-full my-10 md:my-20">
    <Image
      src={post.image}
      alt={post.title}
      width={1300}
      height={700}
      className="w-full h-auto object-cover border border-zinc-300 dark:border-zinc-700"
      priority
    />
  </div>
)}


      </div>
    </article>
  );
}
