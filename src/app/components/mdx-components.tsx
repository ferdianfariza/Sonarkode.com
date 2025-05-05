"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import React, { useState } from "react";
import { Check, Copy,ArrowUpRight } from 'lucide-react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

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
    <div className={`${GeistSans.className} my-6 rounded-sm overflow-hidden border border-ui bg-white dark:bg-zinc-900`}>
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-50 dark:bg-background border-b border-ui">
        <span className="text-[12px] text-zinc-600 dark:text-zinc-400">
          {className?.replace('language-', '') || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[12px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
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
          className={`${GeistMono.className} block text-[12px] leading-normal px-4 py-2 whitespace-pre-wrap break-words text-ui`}
          {...props}
        >
          {children}
        </code>
      </pre>
    </div>
  );
};

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-2 text-2xl font-bold tracking-tight " {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 pb-1 text-xl font-semibold tracking-tight " {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 pb-1 text-lg font-semibold tracking-tight " {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-8 text-[16px] leading-[28px]" {...props} />
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
    <blockquote className="mt-6 border-l-2 border-ui pl-4 italic" {...props} />
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