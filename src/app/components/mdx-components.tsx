"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import React, { useState } from "react";
import { Check, Copy,ArrowUpRight } from 'lucide-react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hash } from 'lucide-react';

const CodeBlock: React.FC<React.HTMLAttributes<HTMLElement> & { className?: string }> = ({
  className,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState(false);
  const isCodeBlock = className?.includes('language-');
  const codeContent = typeof children === 'string' ? children : React.Children.toArray(children).join('');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeContent.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isCodeBlock) {
    return (
      <div className="flex-1 my-6 rounded-sm overflow-hidden border border-ui bg-zinc-50 dark:bg-background">
        <code
          className={`${GeistMono.className} block text-[12px] leading-normal px-4 py-2 whitespace-pre-wrap break-words text-zinc-800 dark:text-zinc-200`}
          {...props}
        >
          {children}
        </code>
      </div>
    );
  }

  return (
    <div className={`${GeistSans.className} my-6 rounded-sm overflow-hidden border border-ui bg-neutral-200/50 dark:bg-zinc-900`}>
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-50/50 dark:bg-background border-b border-ui">
        <span className="text-[14px] font-bold text-zinc-600 dark:text-zinc-400">
          {className?.replace('language-', '') || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="flex-1">
        <code
          className={`${GeistMono.className} block text-[16px] leading-normal font-semibold px-4 py-2 whitespace-pre-wrap break-words text-ui`}
          {...props}
        >
          {children}
        </code>
      </pre>
    </div>
  );
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') 
    .trim()
    .replace(/\s+/g, '-');
}
const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const text = React.Children.toArray(props.children).join('');
  const pathname = usePathname();
  const id = slugify(text);
  const link = `${pathname}#${id}`;

  return (
    <h1 id={id} className="group scroll-mt-20 mt-15 mb-5 text-3xl font-semibold tracking-tight inline-flex items-center gap-2" {...props}>
      {props.children}
      <Link
        href={link}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Anchor link"
      >
        <Hash className="w-5 h-5 inline-block align-middle" />
      </Link>
    </h1>
  );
};

const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const text = React.Children.toArray(props.children).join('');
  const pathname = usePathname();
  const id = slugify(text);
  const link = `${pathname}#${id}`;

  return (
    <Link href={link}>
      <h2 id={id} className="scroll-mt-20 mt-10 pb-1 text-2xl font-semibold tracking-tight" {...props} />
    </Link>
  );
};

const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const text = React.Children.toArray(props.children).join('');
  const pathname = usePathname();
  const id = slugify(text);
  const link = `${pathname}#${id}`;

  return (
    <Link href={link}>
      <h3 id={id} className="scroll-mt-20 mt-10 pb-1 text-xl font-semibold tracking-tight" {...props} />
    </Link>
  );
};


const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 text-[17px] text-neutral-600 dark:text-zinc-300 leading-[32px]" {...props} />
  ),

  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, children, ...rest } = props;
    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600  decoration-blue-600/30 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400 transition-colors"
          {...rest}
        >
          {children}
          <span className="inline-flex items-center ml-[1px] text-blue-500 dark:text-blue-400">
          <ArrowUpRight size={12}/>
          </span>
        </a>
      );
    }

    return (
      <a
        href={href}
        className="text-blue-600  decoration-blue-600/30 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400 transition-colors"
        {...rest} 
      >
        {children}
      </a>
    );
  },

  // Blockquote
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote className="bg-neutral-400/20 dark:bg-zinc-800 px-10 pt-7 pb-10 my-8 md:my-15 [&>p]:text-black dark:[&>p]:text-white dark:text-zinc-200 text-lg [&>p]:text-3xl [&>p]:font-bold [&>p]:leading-10 md tracking-tighter" {...props} />
),


  // image
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className="my-6 rounded-sm border border-ui max-w-full h-auto" 
      alt={props.alt || ""} 
      {...props}
    />
  ),

  // Lists
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-6 ml-6 list-decimal" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-6 ml-6 list-disc" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mt-2" {...props} />
  ),

  // Horizontal Rule
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="mt-8 border-ui" {...props} />
  ),

  code: CodeBlock,
};

interface MdxProps {
  code: string;
}

const Mdx: React.FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default Mdx;