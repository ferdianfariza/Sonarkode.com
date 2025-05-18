"use client"; 

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allPosts, Post } from "contentlayer/generated"; 
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ArticleReadAlso() {
  const params = useParams();
  const currentSlug = params?.slug as string;

  const [suggestedPost, setSuggestedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (currentSlug && allPosts.length > 0) {
      const otherPosts = allPosts.filter((post) => {
        const slugFromPath = post._raw.flattenedPath.split("/").pop();
        return slugFromPath !== currentSlug;
      });

      if (otherPosts.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherPosts.length);

        setSuggestedPost(otherPosts[randomIndex]);
      } else {
        setSuggestedPost(null);
      }
    }
  }, [currentSlug]);

  if (!suggestedPost) {
    return null;
  }

  if (!suggestedPost.title || !suggestedPost.summary || !suggestedPost.url) {
    console.warn(
      "Suggested post is missing required data (title, summary, or url)"
    );
    return null;
  }

  return (
    <div className="mt-16 w-full mx-auto">
      <div className="py-2">
        <p className="text-sm border-y border-ui py-3 font-mono font-bold text-zinc-800 dark:text-zinc-400 uppercase mb-4">
          [article]
        </p>
        <h3 className="text-2xl font-semibold mb-3 tracking-tight text-zinc-900 dark:text-zinc-100">
          {suggestedPost.title}
        </h3>
        <p className="text-[16px] text-zinc-600 dark:text-zinc-300 mx-auto mb-6">
          {suggestedPost.summary}
        </p>
        <Link
          href={suggestedPost.url}
          className="flex items-center px-3 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-[16px] font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 transition-colors">
          Mulai Baca
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
