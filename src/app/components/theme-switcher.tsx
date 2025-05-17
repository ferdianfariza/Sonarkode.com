"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
 
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    
        <Button variant="sonar" size="sonar" onClick={() =>  setTheme(theme === "dark" ? "light" : "dark")}>
          <div className="flex items-center gap-1 font-semibold">
            <p className="inline dark:hidden">{"[LIGHT]"}</p>
            <p className="hidden dark:inline">{"[DARK]"}</p>
          </div>
        </Button>
     
  )
}