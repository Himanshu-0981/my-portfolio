import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState(false);

  const darkMode = () => setThemeState(!themeState);
  return (
    <ThemeContext.Provider value={[themeState, setThemeState, darkMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
