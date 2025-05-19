// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import ArticleMain  from '@/app/components/article-main';


type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allPosts.find(p => p._raw.flattenedPath === `posts/${params.slug}`);

  if (!post) {
    return { title: 'Post Not Found | Sonarkode' };
  }

  return {
    title: `${post.title} | Sonarkode`,
    description: post.summary,
    authors: post.author ? [{ name: post.author }] : undefined,
    keywords: post.category,
    openGraph: {
      title: post.title,
      url: `https://sonarkode.blog/posts/${params.slug}`,
      type: 'article',
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Sonarkode`,
      creator: '@ferdianfarizaa',
    },
  };
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace('posts/', ''),
  }));
}

export default function PostPage({ params }: Props) {
  const post = allPosts.find(p => p._raw.flattenedPath === `posts/${params.slug}`);
  if (!post || !post.body.code) {
    notFound();
  }

  return <ArticleMain post={post} />;
}
