import React, { createContext, useContext, useState } from "react";

const userContext = createContext();
export const ContextProvider = ({ children }) => {


  const [theme, setTheme] = useState("light");

  function themeToggle() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const value = {
    theme,
    setTheme,
    themeToggle
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export const useAuth = () => {
  return useContext(userContext);
};
