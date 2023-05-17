import {
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  ListItemButton,
  ListItem,
  Box,
  List,
  SwipeableDrawer,
  FormControlLabel,
  styled,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Skeleton,
} from "@mui/material";
import * as S from "./style";

import { ICategories, ICategoriesAxios, IProps } from "./types";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";

export const DrawerComponent = ({ isDrawer, setIsDrawer }: IProps) => {
  const { toggleTheme, themeName } = useAppThemeContext();
  const [categories, setCategories] = useState<ICategories[]>();
  const navigate = useNavigate();

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 72,
    height: 44,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      border: "1px solid #000",
      margin: 2,
      padding: 0,
      transform: "translateX(3px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(24px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#a60203"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          border: "1px solid #000",
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode == "dark" ? "#0D0D0D " : "f0f0f0",
      width: 42,
      height: 42,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#a60203"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const nameButtons = [
    {
      name: "Quem somos?",
    },
    {
      name: "Termos",
    },
    {
      name: "Entre em contato",
    },
    {
      name: "Sobre",
    },
  ];

  const handleGetAllCategories = async () => {
    try {
      const result: ICategoriesAxios = await api.get("/posttags");
      setCategories(result.data.data);
      console.log(result);
    } catch {}
  };

  useEffect(() => {
    handleGetAllCategories();
  }, []);

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isDrawer}
        onOpen={() => isDrawer}
        onClose={() => setIsDrawer(false)}
      >
        <Typography sx={{ fontFamily: "Montserrat" }}>
          <Box
            sx={{
              maxHeight: "200vh",
              minHeight: "100vh",
              bgcolor: "secondary.main",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            id="boxHeight"
          >
            <S.stlyedTop>
              {" "}
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/")}>
                    <ListItemIcon>
                      <Typography
                        sx={{
                          color: "secondary.dark",
                          fontFamily: "Montserrat",
                          fontSize: "1.5em",
                        }}
                      >
                        Home
                      </Typography>
                    </ListItemIcon>
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/postagens")}>
                    <ListItemIcon>
                      <Typography
                        sx={{
                          color: "secondary.dark",
                          fontFamily: "Montserrat",
                          fontSize: "1.5em",
                        }}
                      >
                        Nóticias
                      </Typography>
                    </ListItemIcon>
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Accordion
                        sx={{ maxWidth: "235px", bgcolor: "transparent" }}
                        variant="outlined"
                      >
                        <AccordionSummary
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          sx={{
                            bgcolor: "primary.main",
                            borderRadius: "10px",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontFamily: "Montserrat",
                              fontSize: "1.5em",
                            }}
                          >
                            Categorias
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            marginTop: "2px",
                            bgcolor: "primary.main",
                            borderRadius: "10px",
                          }}
                        >
                          {categories?.map((item) =>
                            item ? (
                              <Button
                                sx={{
                                  width: "200px",
                                  color: "#fff",
                                  fontFamily: "Montserrat",
                                  fontSize: "1.2em",
                                  border: "1px solid #fff",
                                  marginTop: "5px",
                                }}
                                variant="text"
                                onClick={() =>
                                  navigate(`/category/${item.name}`)
                                }
                              >
                                {item.name}
                              </Button>
                            ) : (
                              <Skeleton sx={{ width: "235px" }} />
                            )
                          )}
                        </AccordionDetails>
                      </Accordion>
                    </ListItemIcon>
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </S.stlyedTop>
            <S.stlyedBottom>
              <List>
                <ListItem disablePadding>
                  <FormControlLabel
                    control={
                      <MaterialUISwitch
                        sx={{ marginLeft: 3 }}
                        defaultChecked={themeName == "dark" ? true : false}
                        onClick={toggleTheme}
                      />
                    }
                    label=""
                  />

                  <ListItemText />
                </ListItem>
                {nameButtons.map((e) => (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Typography
                          sx={{
                            color: "secondary.dark",
                            fontFamily: "Montserrat",
                            fontSize: "1.1em",
                          }}
                        >
                          {e.name}
                        </Typography>
                      </ListItemIcon>
                      <ListItemText />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </S.stlyedBottom>
          </Box>
        </Typography>
      </SwipeableDrawer>
    </div>
  );
};
