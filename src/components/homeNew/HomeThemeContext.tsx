import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "light" | "dark";

interface HomeThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const HomeThemeContext = createContext<HomeThemeContextValue | null>(null);

const STORAGE_KEY = "yak-home-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "dark" || stored === "light") return stored;

  // 无存储记录时默认亮色
  return "light";
}

export const HomeThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const applyTheme = useCallback((next: Theme) => {
    const html = document.documentElement;
    if (next === "dark") {
      html.setAttribute("data-theme", "dark");
      html.classList.add("dark");
    } else {
      html.setAttribute("data-theme", "light");
      html.classList.remove("dark");
    }
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted, applyTheme]);

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeState(next);
      applyTheme(next);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  // SSR/首次挂载前避免闪烁：服务端不渲染 dark 类
  const value: HomeThemeContextValue = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <HomeThemeContext.Provider value={value}>
      {children}
    </HomeThemeContext.Provider>
  );
};

export function useHomeTheme(): HomeThemeContextValue {
  const ctx = useContext(HomeThemeContext);
  if (!ctx) {
    throw new Error("useHomeTheme must be used within HomeThemeProvider");
  }
  return ctx;
}
