// app/components/toaster-provider.tsx (or wherever you keep providers)
"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

export default function ToasterProvider() {
  const { theme } = useTheme();

  return (
    <Toaster
      theme={theme === "dark" ? "dark" : "light"}
      position="bottom-right"
    />
  );
}
