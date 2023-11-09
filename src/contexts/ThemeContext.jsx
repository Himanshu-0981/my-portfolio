import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState(() => {
    const storedThemeState = JSON.parse(localStorage.getItem("themeState"));
    return storedThemeState !== null ? storedThemeState : true;
  });

  useEffect(() => {
    localStorage.setItem("themeState", JSON.stringify(themeState));
  }, [themeState]);
  return (
    <ThemeContext.Provider value={[themeState, setThemeState]}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
