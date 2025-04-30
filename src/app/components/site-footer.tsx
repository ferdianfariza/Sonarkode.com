import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeFooter() {
  return (
    <footer className="py-5 mt-10 w-full border-t border-ui font-mono">
      <div className="mx-auto w-full max-w-[60rem] px-4 lg:px-0 flex flex-col gap-10 md:flex-row-reverse justify-between">
        {/* Left Terminal Info */}
        <div className="hidden md:inline text-zinc-500 dark:text-zinc-400 space-y-1">
          <p className="text-[14px] whitespace-nowrap">
            <span>fariza@ferdian </span>
            <span className="text-yellow-500">SONAR </span>
            <span className="text-blue-500 dark:text-blue-400">~</span>
            <span className="text-blue-500 dark:text-green-500 ">
              {" "}
              (master){" "}
            </span>
            <span className="text-blue-500 dark:text-blue-400 font-bold animate-pulse">
              ▁
            </span>
          </p>
        </div>

        {/* Navigation & Socials */}
        <div className="flex flex-row md:flex-row gap-10">
          {/* Socials */}
          <div className="flex flex-col space-y-3 md:space-y-2">
            <div className="text-[14px] text-zinc-500">Socials /</div>
            {[
              { href: "https://x.com/ferdianfarizaa", label: "X" },
              {
                href: "https://www.instagram.com/ferdianfariza/",
                label: "Instagram",
              },
              {
                href: "https://www.linkedin.com/in/ferdian-nur-fariza-651965273/",
                label: "LinkedIn",
              },
              { href: "https://github.com/ferdianfariza", label: "Github" },
            ].map((social, index) => {
              const isLast = index === 3;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-[14px] hover:text-blue-500 hover:dark:text-blue-400 flex items-center">
                  {isLast ? "└──" : "├──"} {social.label}
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 dark:text-blue-400">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-3 md:space-y-2">
            <div className="text-[14px] text-zinc-500">Navigations /</div>
            <Link
              href="/"
              className="text-[14px] hover:text-blue-500 hover:dark:text-blue-400">
              ├── Home
            </Link>
            <Link
              href="/sponsorship"
              className="text-[14px] hover:text-blue-500 hover:dark:text-blue-400">
              ├── Sponsorship
            </Link>
            <Link
              href="/about"
              className="text-[14px] hover:text-blue-500 hover:dark:text-blue-400">
              └── About{" "}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      {/* Left Terminal Info */}

      <div className="mt-5 px-4 lg:px-0 border-t border-ui pt-4 mx-auto w-full max-w-[60rem] flex flex-col sm:flex-row justify-between text-[14px] text-zinc-500">
        <div>
          Made with {">"}_ by{" "}
          <span className="hover:text-blue-400">
            <Link href="https://www.instagram.com/ferdianfariza/">
              @ferdianfariza
            </Link>
          </span>
        </div>
        <div className="mb-5">© {new Date().getFullYear()} Sonarkode Blog</div>
        <div className="inline md:hidden text-zinc-500 dark:text-zinc-400 space-y-1">
          <p className="text-[14px] whitespace-nowrap">
            <span>fariza@ferdian </span>
            <span className="text-yellow-500">SONAR </span>
            <span className="text-blue-500 dark:text-blue-400">~</span>
            <span className="text-blue-500 dark:text-green-500 ">
              {" "}
              (master){" "}
            </span>
            <span className="text-blue-500 dark:text-blue-400 font-bold animate-pulse">
              ▁
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
