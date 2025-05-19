import ArticleMain from '@/app/components/article-main';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  
  const post = allPosts.find(p => p._raw.flattenedPath === `posts/${params.slug}`);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title}`,
    description: post.summary,
    authors: [{ name: post.author }], 
    keywords: post.category,        
    openGraph: {
      title: `${post.title}`,
      description: post.summary,
      url: `https://sonarkode.blog/posts/${params.slug}`,
      type: "article",
      authors: [post.author],
    },
    twitter: {
      title: `${post.title} | Sonarkode`,
      description: post.summary,
      creator: '@ferdianfarizaa',
      },
  };
}

export default function PostPage() {
  return <ArticleMain />;
}
