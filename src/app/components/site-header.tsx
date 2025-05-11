"use client";

import { Search } from "./search-button";
import SocialShare from "./social-share";
import { ThemeSwitcher } from "./theme-switcher";
import Logo from "./drawer";

export function SiteHeader() {
  return (
    <header className="w-full top-0 z-50 sticky bg-background/80 backdrop-blur-lg ">
      <nav>
        <div className="mx-auto max-w-[60rem] px-4 lg:px-0">
          <div className="h-14 flex items-center">
            <Logo />
            <div className="flex flex-1 gap-1 items-center md:justify-end">
              <div className="flex-1 md:flex-none">
                <Search />
              </div>

              <div className="flex items-center gap-1">
                <SocialShare />
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
