import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeHero() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const heroPost = posts[0];

  if (!heroPost) {
    return <div>No featured post available.</div>;
  }

  return (
    <div className="w-full flex flex-col h-auto space-y-6 mt-3">
      <div className="flex md:flex-row flex-col grow">
        {heroPost.image && (
          <Image
            src={heroPost.image}
            alt={heroPost.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto md:min-w-[550px] object-cover rounded-sm border"
          />
        )}
        <div className="flex flex-col space-y-4 ml-0 md:ml-10">
          <p className="font-mono font-medium uppercase text-left text-blue-500   dark:text-blue-400  tracking-widest text-[12px] mt-6 md:mt-0">
            <span className="font-semibold">
              {heroPost.category}
            </span>{" "}
            - {heroPost.readtime}
          </p>

          <Link
            href={heroPost.url}
            className="font-semibold dark:text-zinc-100 text-3xl leading-10 tracking-tight hover:underline text-left line-clamp-3"
          >
            {heroPost.title}
          </Link>

          <p className="text-[16px]  leading-6 text-zinc-700 dark:text-zinc-300 line-clamp-3 text-left max-w-[800px]">
            {heroPost.summary}
          </p>

          <div className="text-[12px] font-mono font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400 text-left mt-auto">
            <time dateTime={heroPost.date}>
              {format(parseISO(heroPost.date), 'LLLL d, yyyy', { locale: enUS }).toUpperCase()}
            </time>
            {' • '} {heroPost.author}
          </div>
        </div>
      </div>
    </div>
  );
}
