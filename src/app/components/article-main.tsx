"use client";
import { useState } from "react"; 
import Mdx from "@/app/components/mdx-components";
import { type Post, allPosts } from "contentlayer/generated";
import { useParams } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import ArticleFooter from "@/app/components/article-footer";
import ArticleReadMore from "@/app/components/article-readmore";
import ArticleHeader from "@/app/components/article-header";
import HomeFooter from "@/app/components/site-footer";
import { HeadingContext } from "@/app/components/heading-context"; 

interface MainProps{
  post: Post;
}

export default function ArticleMain({ post }: MainProps) {
  type Heading = { id: string; text: string };

  const [headings, setHeadings] = useState<Heading[]>([]); 
  const addHeading = (heading: Heading) => {
    setHeadings((prev) => {
      if (prev.some((h) => h.id === heading.id)) return prev;
      return [...prev, heading];
    });
  };


  if (!post?.body.code) {
    return <div>No post here!</div>;
  }
  const stickyTopClass = "top-18";

  return (
    <div>
      <SiteHeader />
      <div className="py-8 mx-4 lg:mx-auto max-w-[60rem]">
        <ArticleHeader />
         <div
            className={`inline  md:hidden col-span-1 mt-3 space-y-3 ${stickyTopClass}`}
            style={{
            }}
          >
            <div className="font-bold border-b py-2 border-ui text-xs">[CONTENTS]</div>
            {headings.map((h, i) => (
              <a
                key={i}
                href={`#${h.id}`}
                className="block border-b text-neutral-600 dark:text-zinc-300 text-[14px] active:font-semibold hover:font-semibold text-animation hover:text-neutral-800 dark:hover:text-zinc-100"
              >
                {h.text}
              </a>
            ))}
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:mx-5 lg:mx-0">
          <div className="col-span-2">
            <HeadingContext.Provider value={{ addHeading }}>
              <Mdx code={post.body.code} />
            </HeadingContext.Provider>
            <ArticleFooter />
            <ArticleReadMore />
          </div>
         <div
            className={`hidden md:inline col-span-1 mt-3 space-y-3 sticky self-start ${stickyTopClass}`}
            style={{
            }}
          >
            <div className="font-bold border-b py-2 border-ui text-sm">[CONTENTS]</div>
            {headings.map((h, i) => (
              <a
                key={i}
                href={`#${h.id}`}
                className="block border-b text-neutral-600 dark:text-zinc-300 text-[17px] active:font-semibold hover:font-semibold text-animation hover:text-neutral-800 dark:hover:text-zinc-100"
              >
                {h.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}