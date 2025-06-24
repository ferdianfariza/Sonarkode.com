"use client";

import { Search } from "./search-button";
import SocialShare from "./social-share";
import { ThemeSwitcher } from "./theme-switcher";
import Logo from "./drawer";

export function SiteHeader() {
  return (
    <header className="w-full top-0 z-50 sticky bg-background ">
      <nav>
        <div className="mx-auto max-w-[70rem] px-3 lg:px-0 ">
          <div className="h-14 flex items-center border-b-1 border-ui">
            <Logo />
            <div className="flex flex-1 gap-7 items-center md:justify-end dark:text-amber-50">
              <div className="flex-1 md:flex-none">
                <Search />
              </div>
              
              <div className="flex items-center gap-3">
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
