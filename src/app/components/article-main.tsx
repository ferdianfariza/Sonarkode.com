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
      <div className="py-8 mx-4 md:mx-auto max-w-2xl">
        <ArticleHeader />
        <div className="px-3 md:px-10">
        <Mdx code={post.body.code} />
        </div>
        <ArticleFooter />
        <ArticleReadMore />
      </div>
      <HomeFooter />
    </div>
  );
}
