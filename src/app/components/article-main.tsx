"use client";
import { useState } from "react"; 
import Mdx from "@/app/components/mdx-components";
import { allPosts } from "contentlayer/generated";
import { useParams } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import ArticleFooter from "@/app/components/article-footer";
import ArticleReadMore from "@/app/components/article-readmore";
import ArticleHeader from "@/app/components/article-header";
import HomeFooter from "@/app/components/site-footer";
import { HeadingContext } from "@/app/components/heading-context"; // ✅ import your context

export default function ArticleMain() {
  type Heading = { id: string; text: string };

  const [headings, setHeadings] = useState<Heading[]>([]); // ✅ correct type
  const addHeading = (heading: Heading) => { // ✅ correct parameter type
    setHeadings((prev) => {
      if (prev.some((h) => h.id === heading.id)) return prev;
      return [...prev, heading];
    });
  };


  const params = useParams();
  const slug = params.slug as string;
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${slug}`
  );

  if (!post?.body.code) {
    return <div>No post here!</div>;
  }
  const stickyTopClass = "top-20";

  return (
    <div>
      <SiteHeader />
      <div className="py-8 mx-4 md:mx-auto max-w-[60rem]">
        <ArticleHeader />
        <div className="grid md:grid-cols-3 gap-10 md:mx-5 lg:mx-0">
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
            <div className="font-bold border-b py-2 border-ui">[on the page]</div>
            {headings.map((h, i) => (
              <a
                key={i}
                href={`#${h.id}`}
                className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark"
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
