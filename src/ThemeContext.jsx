import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext();

const ThemeProviderComponent = ({ children }) => {
  // Load theme from localStorage or default to light mode
  const storedTheme = localStorage.getItem("theme") || "light";
  const [mode, setMode] = useState(storedTheme);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1976d2" : "#90caf9",
          },
          secondary: {
            main: mode === "light" ? "#dc004e" : "#f48fb1",
          },
          background: {
            default: mode === "light" ? "#ffffff" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#000000" : "#ffffff",
            secondary: mode === "light" ? "#505455" : "#bbbbbb",
          },
          divider: mode === "light" ? "#e0e0e0" : "#404040",
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif",
          h1: { fontSize: { xs: '30px', sm: '38px', md: '40px', lg: '44px' }, fontWeight: "bold" },
          h2: { fontSize: "2.5rem", fontWeight: "bold" },
          body1: { fontSize: "1rem" },
          button: { textTransform: "none", fontWeight: "bold" },
        },
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#000', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#000', 
                  },
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "0px",
                padding: "10px 20px",
                textTransform: "none",
                backgroundColor: mode === "light" ? "#000000" : "#ffffff",
                color: mode === "light" ? "#ffffff" : "#000000",
                "&:hover": {
                  backgroundColor: mode === "light" ? "#333333" : "#dddddd",
                },
              },
            },
          },
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


// import React, { createContext, useState, useMemo, useEffect } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// export const ThemeContext = createContext();

// const ThemeProviderComponent = ({ children }) => {
//   // Load theme from localStorage or default to light mode
//   const storedTheme = localStorage.getItem("theme") || "light";
//   const [mode, setMode] = useState(storedTheme);

//   // Save theme to localStorage when it changes
//   useEffect(() => {
//     localStorage.setItem("theme", mode);
//   }, [mode]);

//   const toggleTheme = () => {
//     setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//   };

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//           primary: {
//             main: mode === "light" ? "#FF3B30" : "#FFB6C1", // Light: Red, Dark: Soft Pink
//           },
//           secondary: {
//             main: mode === "light" ? "#222222" : "#bbbbbb", // Light: Dark Gray, Dark: Light Gray
//           },
//           background: {
//             default: mode === "light" ? "#F8F8F8" : "#111111", // Light: Soft White, Dark: Deep Black
//             paper: mode === "light" ? "#FFFFFF" : "#1A1A1A", // Card backgrounds
//           },
//           text: {
//             primary: mode === "light" ? "#222222" : "#ffffff", // Main text color
//             secondary: mode === "light" ? "#555555" : "#D1D1D1", // Subtext
//           },
//           divider: mode === "light" ? "#E0E0E0" : "#404040", // Line dividers
//         },
//         typography: {
//           fontFamily: "Roboto, Arial, sans-serif",
//           h1: { fontSize: { xs: "30px", sm: "38px", md: "42px", lg: "46px" }, fontWeight: "bold" },
//           h2: { fontSize: { xs: "26px", sm: "34px", md: "36px", lg: "40px" }, fontWeight: "bold" },
//           body1: { fontSize: "1rem" },
//           button: { textTransform: "none", fontWeight: "bold" },
//         },
//         components: {
//           MuiTextField: {
//             styleOverrides: {
//               root: {
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: 8,
//                   "& fieldset": {
//                     borderColor: mode === "light" ? "#ccc" : "#444",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: mode === "light" ? "#222" : "#bbb",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: mode === "light" ? "#FF3B30" : "#FFB6C1",
//                   },
//                 },
//               },
//             },
//           },
//           MuiButton: {
//             styleOverrides: {
//               root: {
//                 borderRadius: "8px",
//                 padding: "12px 24px",
//                 fontSize: "1rem",
//                 fontWeight: "bold",
//                 backgroundColor: mode === "light" ? "#FF3B30" : "#FFB6C1",
//                 color: "#ffffff",
//                 "&:hover": {
//                   backgroundColor: mode === "light" ? "#E03228" : "#FFA3B5",
//                 },
//               },
//             },
//           },
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ThemeContext.Provider value={{ mode, toggleTheme }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProviderComponent;
