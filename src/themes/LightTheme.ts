import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#a60202",
      light: "#fff",
      dark: "#000",
    },
    secondary: {
      main: "#1c1c1c",
      light: "#000",
      dark: "#fff",
    },
    background: {
      default: "#fff",
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
