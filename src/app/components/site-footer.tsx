import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';


export default function HomeFooter() {
   const navClass =
    "font-semibold text-xl inline-block px-1 rounded-sm border-2 border-background " +
    "hover:border-black hover:border-dashed hover:bg-amber-300 dark:hover:bg-green-800 dark:hover:border-amber-50 " +
    "active:border-black active:border-dashed active:bg-amber-300 dark:active:bg-green-800 dark:active:border-amber-50";

  const socialClass =
    "flex items-center gap-1 px-1 rounded-sm border-2 border-background " +
    "hover:border-b-2 hover:border-black hover:border-dashed hover:bg-amber-300 dark:hover:bg-green-800 dark:hover:border-amber-50 " +
    "active:border-b-2 active:border-black active:border-dashed active:bg-amber-300 dark:active:bg-green-800 dark:active:border-amber-50";
  return (
    <footer>
      <div className="w-full max-w-[60rem] mx-auto px-3 md:px-0 grid grid-cols-1 md:grid-cols-3">
        {/* Left Column: SONARKODE */}
        <div className="flex flex-col gap-6 border-b-2 border-ui pb-7 col-span-2">
          <h1 className="font-mono text-sm border-y-2 border-black dark:border-white py-3">
            [SONARKODE]
          </h1>
          <p className="font-medium text-sm dark:text-amber-50 pr-0 md:pr-50 leading-6">
            Sonarkode was founded in 2024. What began as a small side project to
            explore modern tech stacks has since evolved into a growing platform.
            Sonarkode is built for developers who value meaningful communication
            and continuous learning.
          </p>
        </div>

        {/* Right Column: NAVIGATIONS + SOCIALS */}
        <div className="grid grid-cols-2 md:flex-row justify-end gap-0 border-b-2 border-ui">
          {/* NAVIGATIONS */}
          <div>
            <h1 className="font-mono text-sm border-b-2 md:border-y-2 border-ui py-3 text-left md:text-right">
              [NAVIGATIONS]
            </h1>
            <ul className="text-left md:text-right space-y-2 pt-4 pr-4 lg:pr-0">
              <li className={navClass}>
                <Link href="/">Home</Link>
              </li>
              <li className={navClass}>
                <Link href="/sponsorship">Sponsorship</Link>
              </li>
              <li className={navClass}>
                <Link href="/about">About</Link>
              </li>
            </ul>

          </div>

          {/* SOCIALS */}
          <div>
            <h1 className="font-mono text-sm border-b-2 md:border-y-2 border-ui py-3 text-left md:text-right">
              [SOCIALS]
            </h1>
            <ul className="text-left md:text-right space-y-2 pt-4 pb-4 pr-4 lg:pr-0">
              <li className="font-semibold text-xl inline-block">
                <Link href="https://instagram.com/ferdianfariza/" target="_blank" className={socialClass}>
                  Instagram
                  <ArrowUpRight className="w-4" />
                </Link>
              </li>
              <li className="font-semibold text-xl inline-block">
                <Link href="https://github.com/ferdianfariza/Sonarkode.com" target="_blank" className={socialClass}>
                  GitHub
                  <ArrowUpRight className="w-4" />
                </Link>
              </li>
              <li className="font-semibold text-xl inline-block">
                <Link href="https://linkedin.com/in/ferdian-nur-fariza-651965273/" target="_blank" className={socialClass}>
                  LinkedIn
                  <ArrowUpRight className="w-4" />
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="w-full mx-auto text-center my-5 font-mono text-sm font-bold">
        © 2025 Sonarkode Blog
      </div>
    </footer>
  );
}
