import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { compareDesc, format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

// Helper Component (remains the same)
const PostFeatureItem = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col justify-between flex-1">
      <Link
        href={post.url}
        className="font-semibold dark:text-zinc-100 text-base md:text-sm tracking-tight hover:underline block"
      >
        <span className="w-full line-clamp-2">{post.title}</span>
      </Link>
      <p className="text-[12px] font-mono  font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400 mt-2">
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLL d, yyyy', { locale: enUS }).toUpperCase()}
        </time>
      </p>
    </div>
  );
};


export default function HomeFeatured() {
  // Sort and get posts (assuming they exist)
  const sortedPosts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const post2 = sortedPosts[1];
  const post3 = sortedPosts[2];
  const post4 = sortedPosts[3];

  return (
    <section className="w-full max-w-screen-xl mx-auto px-0">
      <hr className="w-full border-zinc-200 dark:border-zinc-800 mb-5 mx-auto" />

      <div className="w-auto flex flex-col md:flex-row md:items-stretch">

        {/* --- Column 1: Post 2 --- */}
        <div className="flex-1 min-w-0 py-3 md:py-0 flex flex-col">
          <PostFeatureItem post={post2} />
        </div>

        {/* --- Separator 1 --- */}
        <>
          {/* Vertical Separator (md+) */}
          <Separator
          orientation="vertical"
          className="hidden md:block h-auto min-h-[80px] mx-4 border-zinc-300 dark:border-zinc-800"
        />
        <Separator
          orientation="horizontal"
          className="block md:hidden w-full my-6"
        />
        </>

        {/* --- Column 2: Post 3 --- */}
        <div className="flex-1 min-w-0 py-3 md:py-0 flex flex-col">
          <PostFeatureItem post={post3} />
        </div>

        {/* --- Separator 2 --- */}
        <>
        <Separator
          orientation="vertical"
          className="hidden md:block h-auto min-h-[80px] mx-4 border-zinc-300 dark:border-zinc-800"
        />
        <Separator
          orientation="horizontal"
          className="block md:hidden w-full my-6"
        />
        </>

        {/* --- Column 3: Post 4 --- */}
        <div className="flex-1 min-w-0 py-3 md:py-0 flex flex-col">
          <PostFeatureItem post={post4} />
        </div>

      </div>

      <hr className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-5 mx-auto" />
    </section>
  );
}