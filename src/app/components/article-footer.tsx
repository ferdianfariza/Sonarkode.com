
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleFooter() {


  return (
    <div className="flex flex-col items-left mt-10">
      {/* Avatar */}
      {/* <Avatar className="w-20 h-20 border-2">
        <AvatarImage src={author.avatarUrl} alt={`Avatar of ${author.name}`} />
        <AvatarFallback>{fallbackInitials}</AvatarFallback>
      </Avatar> */}
      <p className="text-sm border-y border-ui py-3 font-mono font-bold text-zinc-800 dark:text-zinc-400 uppercase mb-4">
          [author]
        </p>
      <div className="flex flex-row items-left md:items-center gap-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">
          Written by Ferdian
        </h2>
      </div>

      <p className="mt-4 text-left md:items-center text-[16px] text-foreground/70">
       While I primarily blog for my benefit, I hope that the stuff I write may be of some value to you the reader!
      </p>
       <Link
          href="/about"
          className="flex mt-5 items-center px-3 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-[16px] font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 transition-colors">
          More about Ferdian
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
    </div>
  );
}
