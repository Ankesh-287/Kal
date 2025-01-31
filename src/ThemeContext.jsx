import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext();

const ThemeProviderComponent = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
 
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#ffffff",
                  paper: "#f5f5f5",
                  button: '#000000',
                  buttonColor: '#ffffff'
                },
                text: {
                  primary: "#000000",
                  secondary: "#505455",
                },
              }
            : {
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                  button: '#ffffff',
                  buttonColor:'#000000'
                },
                text: {
                  primary: "#ffffff",
                  secondary: "#bbbbbb",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderComponent;
