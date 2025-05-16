"use client";
import Mdx from "@/app/components/mdx-components";
import { allPosts } from "contentlayer/generated";
import { useParams } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import ArticleFooter from "@/app/components/article-footer";
import ArticleReadMore from "@/app/components/article-readmore";
import ArticleHeader from "@/app/components/article-header";
import HomeFooter from "@/app/components/site-footer";

export default function ArticleMain() {
  const params = useParams();
  const slug = params.slug as string;
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${slug}`
  );

  if (!post?.body.code) {
    return <div>No post here!</div>;
  }

  return (
    <div>
      <SiteHeader />
      <div className="py-8 mx-4 md:mx-auto max-w-[60rem]">
        <ArticleHeader />
        <div className="grid md:grid-cols-3 gap-10 ">
          <div className="col-span-2">

          <Mdx code={post.body.code} />
          </div>
          <div className="col-span-1 mt-3 space-y-3">
              <div className="font-bold border-b py-2 border-ui">
                [on the page]
              </div>
              <div className="font-semibold">
                On the Page
              </div>
              <div className="font-semibold">
                On the Page
              </div>
              <div className="font-semibold">
                On the Page
              </div>
          </div>
        </div>
        <ArticleFooter />
        <ArticleReadMore />
      </div>
      <HomeFooter />
    </div>
  );
}
