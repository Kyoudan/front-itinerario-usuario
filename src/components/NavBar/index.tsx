import * as S from "./styles";
import { useEffect, useState } from "react";
import { DrawerComponent } from "./components/Drawer";
import { Toolbar, IconButton, Typography, AppBar, Box } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export const NavBar = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [width] = useState<number>(window.innerWidth);
  const [searchButtonActivate, setSearchButtonActivate] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearchPost = (e: string) => {
    if (e === "Enter" || e === "Click") {
      if (search) {
        navigate(`/postagens?find=${search}`);
        setSearch("");
      }
    }
  };

  useEffect(() => {
    if (search == "") {
      setSearchButtonActivate(false);
    } else {
      setSearchButtonActivate(true);
    }
  }, [search]);

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
              <S.styledDivInputNavBar
                searchButtonActivate={searchButtonActivate}
              >
                <AiOutlineSearch
                  className="IconSearch"
                  onClick={() => handleSearchPost("Click")}
                />
                <S.styledInputNavBar
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => handleSearchPost(e.key)}
                  value={search}
                  placeholder="Procure..."
                ></S.styledInputNavBar>
              </S.styledDivInputNavBar>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <DrawerComponent isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
    </S.styledDiv>
  );
};
