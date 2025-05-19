import ArticleMain from '@/app/components/article-main'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allPosts.find(p => p._raw.flattenedPath === `posts/${params.slug}`)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
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
  }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace('posts/', ''),
  }))
}

export default function PostPage({ params }: Props) {
  const post = allPosts.find(p => p._raw.flattenedPath === `posts/${params.slug}`)

  if (!post) {
    notFound()
  }

  return <ArticleMain post={post} />
}
