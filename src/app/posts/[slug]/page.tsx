
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import ArticleMain  from '@/app/components/article-main';

type Params = Promise<{ slug: string }>

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { slug } = await params;
  const sluger = `posts/${slug}`;
  const post = allPosts.find(p => p._raw.flattenedPath === sluger);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.summary,
  };

}

export default async function PostPage({
    params,
}: {
    params: Params;
}) {
    const  {slug}  = await params;
    const sluger = `posts/${slug}`;
    const post = allPosts.find(p => p._raw.flattenedPath === sluger);
    
    if (!post) {
    notFound();
  }
    return <ArticleMain post={post} />;
}
