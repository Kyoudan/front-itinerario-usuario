import * as S from "./styles";
import { useState } from "react";
import { DrawerComponent } from "./components/Drawer";
import {
  ThemeProvider,
  InputBase,
  Toolbar,
  IconButton,
  Typography,
  createTheme,
  AppBar,
  Box,
  Button,
  styled,
  alpha,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export const NavBar = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const theme = createTheme({
    palette: {
      primary: {
        main: "#c2c2c2",
      },
      action: {
        disabled: "#494949",
        disabledOpacity: 0,
        disabledBackground: "#c2c2c2",
      },
    },
  });

  const login = createTheme({
    palette: {
      primary: {
        main: "#c2c2c2",
      },
      action: {
        disabled: "#494949",
        disabledOpacity: 0,
        disabledBackground: "#c2c2c2",
      },
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#a60202" }}>
          <Toolbar>
            <S.styledNavBarRight>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => setIsDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: {
                    fontFamily: "Montserrat",
                  },
                }}
              >
                Se liga na mídia
              </Typography>
            </S.styledNavBarRight>

            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexWrap: "wrap",
                columnGap: "10px",
                justifyContent: "end",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <ThemeProvider theme={login}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    border: "1px solid #fff",
                  }}
                >
                  <Typography sx={{ fontFamily: "Montserrat" }}>
                    login
                  </Typography>
                </Button>
              </ThemeProvider>

              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#a60202",
                  }}
                >
                  <Typography sx={{ fontFamily: "Montserrat" }}>
                    Criar conta
                  </Typography>
                </Button>
              </ThemeProvider>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <DrawerComponent isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
    </>
  );
};
