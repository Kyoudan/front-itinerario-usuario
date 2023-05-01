import { ThemeProvider } from "@mui/material";
import {
  createContext,
  useCallback,
  useState,
  useMemo,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { LightTheme } from "../themes/LightTheme";
import { DarkTheme } from "../themes/DarkTheme";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: IProps) => {
  const [themeName, setThemeName] = useState<"light" | "dark">(
    (localStorage.getItem("theme") &&
      localStorage.getItem("theme") === "dark") ||
      localStorage.getItem("theme") === "light"
      ? (localStorage.getItem("theme") as "light" | "dark")
      : "light"
  );

  const toggleTheme = useCallback(() => {
    setThemeName((prevState) => {
      if (prevState == "light") return "dark";
      return "light";
    });
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;
    return DarkTheme;
  }, [themeName]);

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
