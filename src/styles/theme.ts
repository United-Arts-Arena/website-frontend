import { createTheme, responsiveFontSizes } from "@mui/material";

const baseTheme = createTheme({
  typography: {
    fontFamily: "franklin-gothic-condensed, sans-serif",
    fontSize: 16,
  },
});

const advancedTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#26a27b",
    },
    secondary: {
      main: "#fafafa",
    },
    background: {
      paper: "#000",
      default: "#666",
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
  },
  typography: {
    h1: {
      fontFamily: "outageregular, sans-serif",
      fontSize: "3.75rem",
    },
    h2: {
      fontFamily: "outageregular, sans-serif",
      fontSize: "2.75rem",
    },
    h3: {
      fontFamily: "outageregular, sans-serif",
      fontSize: "2rem",
    },
  },
});

export const theme = responsiveFontSizes(advancedTheme);
