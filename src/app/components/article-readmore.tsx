"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allPosts, Post } from "contentlayer/generated"; // Good: Importing Post type
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ArticleReadMore() {
  const params = useParams();
  // It's safer to check if params and params.slug exist before asserting type
  // And ensure params.slug is a string if it can be string[]
  const currentSlug = typeof params?.slug === 'string' ? params.slug : undefined;

  const [suggestedPost, setSuggestedPost] = useState<Post | null>(null);

  useEffect(() => {
    // Ensure currentSlug is defined and allPosts has items
    if (currentSlug && allPosts.length > 0) {
      const otherPosts = allPosts.filter((post) => {
        // Assuming flattenedPath is like "posts/my-cool-post"
        // and currentSlug is "my-cool-post"
        const slugFromPath = post._raw.flattenedPath.replace(/^posts\//, '');
        return slugFromPath !== currentSlug;
      });

      if (otherPosts.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherPosts.length);
        setSuggestedPost(otherPosts[randomIndex]);
      } else {
        // No other posts available
        setSuggestedPost(null);
      }
    } else {
      // currentSlug is not available, or no posts at all
      setSuggestedPost(null);
    }
  // Add allPosts to dependency array if there's any theoretical chance it could change
  // during the component's lifecycle (though typically it's static after initial load from contentlayer)
  // For strictness:
  }, [currentSlug, allPosts]);

  if (!suggestedPost) {
    return null; // Don't render anything if no suggestion
  }

  // This check is good, ensures essential data for rendering is present.
  if (!suggestedPost.title || !suggestedPost.summary || !suggestedPost.url) {
    console.warn(
      "Suggested post is missing required data (title, summary, or url). Post data:",
      suggestedPost
    );
    return null;
  }

  return (
    <div className="mt-16 w-full mx-auto"> {/* Consider max-width if needed */}
      <div className="py-2">
        <p className="text-sm border-y border-ui py-3 font-mono font-bold text-zinc-800 dark:text-zinc-400 uppercase mb-4">
          [BACA JUGA] {/* Or [READ ALSO] or similar, consistent with your site language */}
        </p>
        <h3 className="text-2xl font-semibold mb-3 tracking-tight text-zinc-900 dark:text-zinc-100">
          {suggestedPost.title}
        </h3>
        <p className="text-[16px] text-zinc-600 dark:text-zinc-300 mx-auto mb-6">
          {suggestedPost.summary}
        </p>
        <Link
          href={suggestedPost.url} // Ensure post.url is the correct relative or absolute path
          className="inline-flex items-center px-3 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-[16px] font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 transition-colors rounded-md" // Added inline-flex and rounded-md for better button appearance
        >
          Mulai Baca
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}