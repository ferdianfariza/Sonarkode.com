"use client";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useParams } from "next/navigation";
import AvatarText from "@/app/components/avatar-text";
import Link from "next/link";
import { enUS } from "date-fns/locale";
import Image from "next/image";
import { Hourglass } from 'lucide-react';

  
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

        
      {/* Header */}
      <div>
        {/* Category */}
        <Link href="/" className="w-auto h-auto font-mono font-semibold hover:underline active:underline">{"<-"}home</Link>
        <div className="mt-10 flex flex-col md:flex-row w-full mx-auto place-content-center text-left  text-black dark:text-amber-50 gap-3 items-center">
          <span className="uppercase h-fit text-[14px] tracking-widest font-medium font-mono bg-amber-300/50 border border-dashed border-black dark:border-amber-50/30 dark:bg-green-800/50 px-2 rounded-xs">
            {post.category}
          </span>
          
        </div>

        {/* Title */}
        <h1 className="dark:text-amber-50 mt-6 mb-4 leading-11 text-center md:leading-13 text-4xl md:text-5xl text-animation font-semibold tracking-tighter md:px-15">
          {post.title}
        </h1>

        {/* Summary */}
        <p className="font-normal text-[17px] mb-4 leading-7 md:leading-6 line-clamp-3 text-center text-neutral-700 dark:text-zinc-300 md:px-50">
          {post.summary}
        </p>
        {/* Description */}
        <div className="flex gap-5 md:gap-4 place-content-center">
          <span className="text-[15px] py-1">
              <div className="text-zinc-800 dark:text-zinc-200 font-normal font-sans">
                {"Published "}
                 <time dateTime={post.date}>
                  {format(parseISO(post.date), "LLL d, yyyy", {
                    locale: enUS,
                  })}
                </time>
              </div>
            </span>
        </div>

        {/* Image */}
     {post.image && (
        <div className="w-full my-10 md:my-10">
          <Image
            src={post.image}
            alt={post.title}
            width={1300}
            height={700}
            className="w-full h-auto object-cover border border-zinc-300 dark:border-zinc-700 rounded-md"
            priority
          />
        </div>
      )}
      <div className="flex mx-auto place-items-center w-full items-center justify-center gap-5 mb-8">
        <div className="flex gap-3">
          <AvatarText />
        </div>
        <div className="flex text-[14px] text-neutral-700/70 dark:text-amber-50/50 gap-1 items-center">
          <Hourglass size="20"/>
          {post.readtime}
        </div>
      </div>

      </div>
    </article>
  );
}
