"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: string, attribute: string, themes?: string[]) {
  const root = document.documentElement;
  const resolved = theme === "system" ? getSystemTheme() : theme;

  if (attribute === "class") {
    // Remove all known theme classes and add the resolved one
    if (themes) {
      root.classList.remove(...themes);
    }
    root.classList.add(resolved);
  } else {
    root.setAttribute(attribute, resolved);
  }

  root.style.colorScheme = resolved;
}

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

const STORAGE_KEY = "theme";
const THEMES = ["light", "dark"];

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = false,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<string>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const resolved = stored || defaultTheme;
      // Ensure cookie stays in sync with localStorage
      if (stored) {
        document.cookie = `theme=${resolved}; path=/; max-age=31536000`;
      }
      return resolved;
    } catch {
      return defaultTheme;
    }
  });

  const setTheme = useCallback(
    (newTheme: string) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem(STORAGE_KEY, newTheme);
        document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
      } catch {}

      if (disableTransitionOnChange) {
        const style = document.createElement("style");
        style.textContent =
          "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        document.head.appendChild(style);
        requestAnimationFrame(() => {
          document.head.removeChild(style);
        });
      }

      applyTheme(newTheme, attribute, THEMES);
    },
    [attribute, disableTransitionOnChange],
  );

  // Apply theme on mount and when it changes
  useEffect(() => {
    applyTheme(theme, attribute, THEMES);
  }, [theme, attribute]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "system" || (!stored && defaultTheme === "system")) {
        applyTheme("system", attribute, THEMES);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [enableSystem, attribute, defaultTheme]);

  const value = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
