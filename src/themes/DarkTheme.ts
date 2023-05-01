
import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#A60303",
      light: "#f0f0f0",
      dark: "#0D0D0D",
    },
    secondary: {
      main: "#0D0D0D",
      light: "#A6785D",
      dark: "#f0f0f0",
    },
    background: {
      default: "#f0f0f0",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "Claro" },
          style: {
            border: `1px solid #fff`,
          },
        },
      ],
    },
  },
});
