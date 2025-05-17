"use client";

import { createContext, useContext } from "react";

type Heading = {
  id: string;
  text: string;
  level: "h1" | "h2" | "h3";
};

type HeadingContextType = {
  addHeading: (heading: Heading) => void;
};

export const HeadingContext = createContext<HeadingContextType | null>(null);

export const useHeadingContext = () => {
  const ctx = useContext(HeadingContext);
  if (!ctx) throw new Error("HeadingContext is not in scope.");
  return ctx;
};
