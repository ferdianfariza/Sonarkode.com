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
    <div className="w-full overflow-x-hidden"> 
      <div className="w-auto flex flex-col md:flex-row-reverse gap-4 lg:gap-7 items-start mb-0 sm:mb-0 py-12 lg:py-20 mx-4 md:mx-0 text-animation border-y border-ui">
        {heroPost.image && (
          <div className="w-full md:w-1/2 mb-3">
            <Image
              src={heroPost.image}
              alt={heroPost.title}
              width={1300}
              height={200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Description */}
        <div
          className={`flex flex-col space-y-3 w-full md:w-1/2 ${
            heroPost.image ? "" : "md:col-span-2"
          }`}
        >
          <div className="gap-3 md:flex font-semibold text-blue-600 dark:text-blue-300 text-[12px]">
            <div className="flex gap-1 items-center text-[16px] font-normal text-neutral-400 dark:text-zinc-500">
              Published{" "}
              <time dateTime={heroPost.date}>
                {format(parseISO(heroPost.date), "LLLL d, yyyy", {
                  locale: enUS,
                })}
              </time>
            </div>
          </div>

          <Link
            href={heroPost.url}
            className="font-semibold dark:text-zinc-100 text-xl md:text-3xl leading-snug md:leading-tight tracking-tight hover:underline text-left line-clamp-3 sm:line-clamp-2 lg:line-clamp-2 hover:text-zinc-400 dark:hover:text-zinc-500 text-animation"
          >
            {heroPost.title}
          </Link>

          <p className="text-[16px] text-neutral-600 dark:text-zinc-400 font-medium leading-6 line-clamp-3 sm:line-clamp-3">
            {heroPost.summary}
          </p>
          <Link href={heroPost.url} className="text-[16px] underline text-neutral-600 dark:text-zinc-400 font-medium leading-6 line-clamp-3 sm:line-clamp-3">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
