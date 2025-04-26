import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";
import { Feather } from "lucide-react";

export default function HomeHero() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const heroPost = posts[0];

  if (!heroPost) {
    // Added some basic centering and margin for the fallback
    return (
      <div className="w-full flex justify-center items-center h-64 mt-3 text-zinc-500">
        No featured post available.
      </div>
    );
  }

  return (
    <div className="w-full mt-3">
      {/*
        Grid Container:
        - Default: block layout (implicitly stacks children)
        - md+: Becomes a 2-column grid with a gap
      */}
      <div className="w-full md:grid md:grid-cols-2 md:gap-12 md:items-start">
        {/* --- Grid Item 1: Image Column --- */}
        {/* Takes up the first grid column on md+ */}
        {heroPost.image && (
          // This wrapper takes the full width of the grid column
          // relative + aspect-ratio needed for Image with fill
          <div className="relative w-full aspect-video overflow-hidden rounded-sm border mb-4 md:mb-0">
            <Image
              src={heroPost.image}
              alt={heroPost.title}
              fill // Use fill to cover the relative parent
              sizes="(max-width: 768px) 100vw, 50vw" // Mobile: 100%, Desktop: 50%
              className="object-cover" // Cover the area, cropping as needed
              priority // Good practice for LCP images
            />
          </div>
        )}

        {/* --- Grid Item 2: Text Column --- */}
        {/* Takes up the second grid column on md+ (or first if no image) */}
        {/* flex flex-col structures the content *within* this grid cell */}
        {/* w-full ensures it tries to use the column width */}
        {/* No margin needed on md+ because grid gap handles spacing */}
        <div
          className={`flex flex-col space-y-3 w-full ${
            heroPost.image ? "" : "md:col-span-2"
          }`}>
          {/* If no image, make text span both columns */}

          <p className="font-mono font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 text-[12px]">
            <span className="font-semibold bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-sm">
              {heroPost.category}
            </span>
          </p>

          <Link
            href={heroPost.url}
            className="font-semibold dark:text-zinc-100 text-xl md:text-3xl leading-snug md:leading-tight tracking-tight hover:underline text-left line-clamp-3">
            {heroPost.title}
          </Link>

          <p className="text-[15px] text-zinc-700 dark:text-zinc-300 leading-5 mb-5 line-clamp-3">
            {" "}
            {/* Adjusted text size/leading */}
            {heroPost.summary}
          </p>

          <div className="flex gap-1 items-center text-[12px] font-normal tracking-wide text-zinc-500 dark:text-zinc-400">
            {" "}
            {/* Smaller text/icon */}
            <Feather size="14" />
            <time dateTime={heroPost.date}>
              {format(parseISO(heroPost.date), "LLLL d, yyyy", {
                locale: enUS,
              })}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
