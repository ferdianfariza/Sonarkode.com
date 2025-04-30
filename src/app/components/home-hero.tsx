import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const heroPost = posts[0];

  if (!heroPost) {
    return (
      <div className="w-full flex justify-center items-center h-64 mt-3 text-zinc-500">
        No featured post available.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full md:grid md:grid-cols-2 gap-2 lg:gap-12 md:items-start mb-15 sm:mb-4">
        {heroPost.image && (
          <div className="relative w-full aspect-video rounded-none sm:rounded-sm overflow-hidden border-b border-ui md:border md:border-zinc-800 mb-7 md:mb-0">
            <Image
              src={heroPost.image}
              alt={heroPost.title}
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className={`flex flex-col space-y-3 w-full px-4 lg:px-0 ${
            heroPost.image ? "" : "md:col-span-2"
          }`}>
          <p className="hidden md:flex font-mono font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 text-[12px]">
            <span className="font-semibold bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-sm">
              {heroPost.category}
            </span>
          </p>

          <Link
            href={heroPost.url}
            className="font-semibold dark:text-zinc-100 text-xl md:text-3xl leading-snug md:leading-tight tracking-tight hover:underline text-left line-clamp-3 sm:line-clamp-2 lg:line-clamp-3">
            {heroPost.title}
          </Link>

          <p className="text-[15px] text-zinc-700 dark:text-zinc-300 leading-6 line-clamp-3 sm:line-clamp-2 lg:line-clamp-3">
            {" "}
            {heroPost.summary}
          </p>
          <div className="flex gap-2">
            <p className="flex md:hidden font-mono font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 text-[12px]">
              <span className="font-semibold bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-sm">
                {heroPost.category}
              </span>
            </p>
            <div className="flex gap-1 items-center text-[12px] uppercase font-mono font-semibold tracking-wider text-zinc-600 dark:text-zinc-400">
              <time dateTime={heroPost.date}>
                {format(parseISO(heroPost.date), "LLLL d, yyyy", {
                  locale: enUS,
                })}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
