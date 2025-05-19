import ArticleMain from '@/app/components/article-main';
import { allPosts } from 'contentlayer/generated'; // Assuming 'Post' is the generated type for a post
import type { Metadata } from "next";
import { notFound } from 'next/navigation'; // For handling 404

// Props type for your page component
interface PostPageProps {
  params: {
    slug: string;
  };
  // searchParams?: { [key: string]: string | string[] | undefined }; // If you ever need searchParams
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
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
      url: `https://sonarkode.blog/posts/${params.slug}`, // Make sure this domain is correct
      type: "article",
      authors: [post.author],
      // images: [post.image || '/default-og-image.png'], // Good to have an OG image
    },
    twitter: {
      card: 'summary_large_image', // Often preferred for articles
      title: `${post.title} | Sonarkode`,
      description: post.summary,
      creator: '@ferdianfarizaa',
      // images: [post.image || '/default-twitter-image.png'], // Good to have a Twitter image
    },
  };
}

// Optional: Generate static paths for all posts for better performance
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace('posts/', ''),
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(p => p._raw.flattenedPath === `posts/${params.slug}`);

  if (!post) {
    notFound(); // Triggers the not-found.tsx page or a default 404
  }

  // You need to pass the actual post data to ArticleMain
  // ArticleMain will need to be updated to accept a 'post' prop
  return <ArticleMain post={post} />;
}