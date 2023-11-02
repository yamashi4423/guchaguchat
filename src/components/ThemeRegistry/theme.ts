import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0F4C75",
      light: "#ffa2a3",
      dark: "#a34449",
    },
    secondary: {
      main: "#3282B8",
      light: "#ffa2a3",
      dark: "#a34449",
    },
    success: {
      main: "#d87274",
      light: "#ffa2a3",
      dark: "#a34449",
    },
    error: {
      main: "#d87274",
      light: "#ffa2a3",
      dark: "#a34449",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
});

export default theme;
