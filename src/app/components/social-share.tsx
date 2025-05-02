"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaWhatsapp, FaLink } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function SocialShare() {
  const [currentUrl, setCurrentUrl] = useState("");
  const text = "Check out this awesome article!";

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(text);
  const handleShare = (platform: string) => {
    toast.success(`Shared, thanks for sharing in ${platform}!`);
  };

  return (
    <div className="flex justify-center space-x-1">
      {/* Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Share className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Share on</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Copy link */}
          <DropdownMenuItem>
            <div
              role="button"
              className="flex items-center gap-2 w-full"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(currentUrl);
                toast.success("URL copied to clipboard!");
              }}>
              <FaLink />
              <span>Copy link</span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Twitter */}
          <DropdownMenuItem>
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full"
              onClick={() => handleShare("Twitter")}>
              <FaTwitter className="text-blue-500" />
              Twitter
            </Link>
          </DropdownMenuItem>

          {/* LinkedIn */}
          <DropdownMenuItem>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full"
              onClick={() => handleShare("LinkedIn")}>
              <FaLinkedinIn className="text-blue-600" />
              LinkedIn
            </Link>
          </DropdownMenuItem>

          {/* WhatsApp */}
          <DropdownMenuItem>
            <Link
              href={`https://api.whatsapp.com/send?text=${encodedText}%0A%0A${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full"
              onClick={() => handleShare("WhatsApp")}>
              <FaWhatsapp className="text-green-500" />
              WhatsApp
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
