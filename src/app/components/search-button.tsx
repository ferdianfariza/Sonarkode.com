"use client";

import { allPosts } from "contentlayer/generated";

import * as React from "react";
import { useRouter } from "next/navigation";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { House, CircleUserRound, Megaphone } from "lucide-react";
import { format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";

export function Search({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <div>
      <Button
        variant="sonar"
        size="sonar"
        className={cn(
          "w-fit justify-start font-normal shadow-none md:w-auto items-center"
        )}
        onClick={() => setOpen(true)}
        {...props}>
        <p className="hidden lg:inline-flex font-mono font-semibold">{"[SEARCH...CTRL+K]"}</p>
        <p className="inline-flex lg:hidden font-mono font-semibold">{"[SEARCH...]"}</p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type article title or something..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Content">
            {allPosts.map((post) => (
              <CommandItem
                key={post._id}
                onSelect={() => runCommand(() => router.push(post.url))}>
                <div>
                  <div className="items-center mb-1 text-[12px] font-mono font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), "LLLL d, yyyy", {
                        locale: enUS,
                      })}
                    </time>
                  </div>
                  <div className="font-semibold line-clamp-2 md:line-clamp-1">
                    {post.title}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Links">
            <CommandItem asChild>
              <Link href="/" className="flex items-center w-full gap-2">
                <House size={20} />
                <span>Home</span>
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link
                href="/sponsorship"
                className="flex items-center w-full gap-2">
                <Megaphone size={20} />
                <span>Sponsorship</span>
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="/about" className="flex items-center w-full gap-2">
                <CircleUserRound size={20} />
                <span>About</span>
              </Link>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
