import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    // Function to update theme based on system preference
    const updateSystemTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      const systemTheme = e.matches ? "dark" : "light"
      root.classList.remove("light", "dark")

      if (theme === "system") {
        root.classList.add(systemTheme)
      } else {
        root.classList.add(theme)
      }
    }

    // Initial setup
    if (theme === "system") {
      updateSystemTheme(mediaQuery)
    } else {
      root.classList.remove("light", "dark")
      root.classList.add(theme)
    }

    // Listen for system theme changes
    mediaQuery.addEventListener("change", updateSystemTheme)

    return () => mediaQuery.removeEventListener("change", updateSystemTheme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
