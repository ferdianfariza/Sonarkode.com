// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import ArticleMain  from '@/app/components/article-main';


type Params = Promise<{ slug: string }>
 
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find(p => p._raw.flattenedPath === slug);

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
    const post = allPosts.find(p => p._raw.flattenedPath === slug);
    
    if (!post) {
    notFound();
  }
    return <ArticleMain post={post} />;
}
