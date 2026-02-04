import { createContext, useState, useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  bodyBg: "#eaeef6",
  cardBg: "#ffffff",
  text: "#000000",
  whiteText: "#fff",
  textSecondary: "#94a6be",
  border: "0.7px solid rgba(148, 166, 190, 0.4)",
  borderBg: "0.7px solid rgba(86, 94, 239, 1)",
  buttonPrimaryBg: "#565eef",
  buttonPrimaryText: "#565eef",
  buttonSecondaryBg: "transparent",
  buttonSecondaryBorder: "0.7px solid #565eef",
  buttonSecondaryText: "#ffffff",
  inputBg: "transparent",
  calendarCellHover: "#eaeef6",
  calendarCellActive: "#94a6be",
  logo: "images/logo.png",
};

const darkTheme = {
  bodyBg: "rgba(21, 20, 25, 1)",
  cardBg: "rgba(32, 32, 44, 1)",
  text: "#e0e0e0",
  whiteText: "#fff",
  textSecondary: "#aaaaaa",
  border: "0.7px solid #444",
  borderBg: "0.7px solid rgba(255, 255, 255, 1)",
  buttonPrimaryBg: "#565eef",
  buttonPrimaryText: "#ffffff",
  buttonSecondaryBg: "transparent",
  buttonSecondaryBorder: "0.7px solid #565eef",
  buttonSecondaryText: "#565eef",
  inputBg: "#2c2c2c",
  calendarCellHover: "#333",
  calendarCellActive: "#565eef",
  logo: "images/logo_dark.png",
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("darkTheme");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? darkTheme : lightTheme;

  useMemo(() => {
    localStorage.setItem("darkTheme", isDark);
  }, [isDark]);

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
