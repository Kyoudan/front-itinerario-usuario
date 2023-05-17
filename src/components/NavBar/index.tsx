import * as S from "./styles";
import { useState } from "react";
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
  const [width] = useState<number>(window.innerWidth);
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
    <S.styledDiv>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="Toolbar">
            <S.styledNavBarRight>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: width < 605 ? "2 " : "0" }}
                onClick={() => setIsDrawer(true)}
              >
                <MenuIcon className="MenuIcon" />
              </IconButton>
              {width > 730 && (
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
                display: "flex",
                columnGap: "10px",
                rowGap: "10px",
                justifyContent: "end",
              }}
              className="Box"
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
    </S.styledDiv>
  );
};
