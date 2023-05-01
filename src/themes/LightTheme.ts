import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#A60303",
      light: "#0D0D0D",
      dark: "#f0f0f0",
    },
    secondary: {
      main: "#f0f0f0",
      light: "#f0f0f0",
      dark: "#0D0D0D",
    },
    background: {
      default: "#0D0D0D",
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