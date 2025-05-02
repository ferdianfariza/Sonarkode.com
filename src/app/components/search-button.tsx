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
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}>
        <span className="hidden lg:inline-flex">Search article...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
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
                  <div className="font-semibold line-clamp-2">{post.title}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Links">
            <CommandItem>
              <Link href="/" className="flex items-center gap-1.5">
                <span>
                  <House size="23" />
                </span>
                <span>Home</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/sponsorship" className="flex items-center gap-1.5">
                <span>
                  <Megaphone size="23" />
                </span>
                <span>Sponsorship</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/about" className="flex items-center gap-1.5">
                <span>
                  <CircleUserRound size="23" />
                </span>
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
    </>
  );
}
