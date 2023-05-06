import * as S from "./styles";
import { useEffect, useState } from "react";
import { DrawerComponent } from "./components/Drawer";
import {
  InputBase,
  Toolbar,
  IconButton,
  Typography,
  AppBar,
  Box,
  Button,
  styled,
  alpha,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const navigate = useNavigate();
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

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{ flexDirection: width < 605 ? "column-reverse" : "row" }}
          >
            <S.styledNavBarRight>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: width < 605 ? "2 " : "0" }}
                onClick={() => setIsDrawer(true)}
              >
                <MenuIcon
                  sx={{
                    fontSize: width < 605 ? "1.2em" : "1em",
                    border: width < 605 ? "1px solid #fff" : "0px",
                    padding: width < 605 ? "5px" : "0px",
                    borderRadius: width < 605 ? "50%" : "0",
                  }}
                />
              </IconButton>
              {width > 721 && (
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
              )}
            </S.styledNavBarRight>

            <Box
              sx={{
                width: width > 721 ? "65%" : "92%",
                display: "flex",
                columnGap: "10px",
                rowGap: "10px",
                justifyContent: "end",
                flexDirection: width < 605 ? "column" : "row",
                marginTop: width < 605 ? "10px" : "0px",
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

              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                }}
                onClick={() => navigate("/login")}
              >
                <Typography sx={{ fontFamily: "Montserrat" }}>login</Typography>
              </Button>

              <Button
                variant="Claro"
                color="primary"
                onClick={() => navigate("/register")}
              >
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  Criar conta
                </Typography>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <DrawerComponent isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
    </>
  );
};
