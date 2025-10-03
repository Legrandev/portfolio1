"use client"

import type React from "react"
import { StarryBackground } from "./starry-background"

import { createContext, useContext, useState, useEffect } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    // Charger le thème depuis localStorage au montage
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      localStorage.setItem("theme", "dark")
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {theme === "dark" && <StarryBackground />}

      {theme === "light" && <div className="fixed inset-0 z-0 bg-white" />}

      <div className="relative z-10">{children}</div>
    </ThemeContext.Provider>
  )
}
