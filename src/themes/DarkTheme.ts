import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#a60202",
      light: "#000",
      dark: "#fff",
    },
    secondary: {
      main: "#fff",
      light: "#fff",
      dark: "#1c1c1c",
    },
    background: {
      default: "#000",
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
