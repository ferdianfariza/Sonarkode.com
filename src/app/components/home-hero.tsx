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
    <div className="w-auto overflow-x-hidden  border-y-1 border-ui mx-3 md:mx-0"> 
        <div className="flex gap-3 mt-3 md:flex font-black justify-between text-lg dark:text-amber-50 ">
            {heroPost.category}
            <div className="flex gap-1 items-center font-normal ">
              <time dateTime={heroPost.date}>
                {format(parseISO(heroPost.date), "LLLL d, yyyy", { locale: enUS })}
              </time>
            </div>
          </div>
      <div className="w-auto flex flex-col md:flex-row-reverse gap-4 lg:gap-7 items-start py-6 lg:py-10  text-animation">
        {heroPost.image && (
          <div className="w-full md:w-1/2 mb-3">
            <Image
              src={heroPost.image}
              alt={heroPost.title}
              width={1300}
              height={200}
              className="w-full h-auto object-cover border-1 border-black dark:border-amber-50"
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
          

          <Link
            href={heroPost.url}
            className="hover:text-zinc-500 dark:hover:text-zinc-500 text-2xl md:text-3xl font-bold leading-9 md:leading-10 tracking-[-0.020em] text-animation line-clamp-3 hover:underline dark:text-amber-50 decoration-zinc-300 dark:decoration-zinc-600"
          >
            {heroPost.title}
          </Link>

          <p className="text-[16px]  dark:text-amber-50/60 font-medium leading-6 line-clamp-3 sm:line-clamp-3">
            {heroPost.summary}
          </p>
          <Link href={heroPost.url} className="text-[16px] underline  dark:text-amber-50/70 font-medium leading-6 line-clamp-3 sm:line-clamp-3">
            Read More
          </Link>
          
        </div>
      </div>
    </div>
  );
}
