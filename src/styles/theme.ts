import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  typography: {
    fontFamily: "franklin-gothic-condensed, sans-serif",
    fontSize: 18,
  },
});
export const theme = createTheme({
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
});
