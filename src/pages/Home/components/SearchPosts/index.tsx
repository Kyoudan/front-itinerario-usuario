import {
  Alert,
  Avatar,
  Box,
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import {  useEffect, useState } from "react";
import { api } from "../../../../api/api";
import { IPost, IPostAxios } from "./types";
import ScrollReveal from "scrollreveal";

export const SearchPosts = () => {
  const { themeName } = useAppThemeContext();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [post, setPost] = useState<IPost[]>();
  const [width] = useState<number>(window.innerWidth);
  const Sr = ScrollReveal();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1;
    });
  };

  const handleFindPost = async (e: any) => {
    if (e.keyCode == 13 && search) {
      try {
        const result: IPostAxios = await api.get(
          `/postspublic?find=${search}&limit=1`
        );
        setIsSearch(true);
        setPost(result.data.data);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const inputTheme = createTheme({
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
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            fontFamily: "Montserrat",
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderWidth: 2,
              borderColor: "#a60303",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: themeName === "dark" ? "#fff" : "#000",
              borderWidth: 2,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: themeName === "dark" ? "#fff" : "#a60303",
              borderWidth: 2,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#A60303",
            },
            "& .MuiOutlinedInput-input::placeholder": {
              color: "#000000",
              fontWeight: "bold",
            },
          },
          input: {
            color: themeName === "dark" ? "#fff" : "#000",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: themeName === "dark" ? "#afaeae" : "#666666",
            fontWeight: 700,
            fontFamily: "Montserrat",
            "&:hover": {
              color: themeName === "dark" ? "#afaeae" : "#666666",
              fontWeight: 700,
              fontFamily: "Montserrat",
            },
            "&.Mui-focused": {
              color: themeName === "dark" ? "#afaeae" : "#666666",
            },
          },
        },
      },
    },
  });

  const styledTypography = {
    fontSize: width > 690 ? "6em" : "3em",
    fontFamily: "Bebas Neue",
    color: "transparent",
    WebkitTextStroke: themeName === "dark" ? ".6px #ffffff" : "1px #000000",
    textStroke: themeName === "dark" ? "1px #fff" : "1px #000",
    lineHeight: "70px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    letterSpacing: width > 690 ? "10px" : "3px",
  };

  const styledTypographyDefault = {
    fontSize: width > 690 ? "1.3em" : ".7em",
    fontFamily: "Montserrat",
    color: themeName === "dark" ? "#bababa" : "#494949",
    lineHeight: "20px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    maxWidth: "500px",
  };

  const styledBox = {
    backgroundColor: themeName === "dark" ? "#fff" : "#1c1c1c",
    borderRadius: "10px",
    position: "relative",
    padding: "30px",
  };

  const titleStep = {
    fontSize: width > 690 ? "1.5em" : ".95em",
    fontFamily: "Montserrat",
    color: "#A60303",
    lineHeight: "20px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    maxWidth: "500px",
  };

  const textStep = {
    fontSize: width > 690 ? "1em" : ".7em",
    fontFamily: "Montserrat",
    color: themeName === "dark" ? "#fff" : "#1c1c1c",
    lineHeight: "20px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    maxWidth: "500px",
  };

  const buttonStep = {
    fontSize: width > 690 ? "1em" : ".8em",
    fontFamily: "Montserrat",
    lineHeight: "20px",
    zIndex: 1,
    userSelect: "none",
    maxWidth: "500px",
  };

  const textBox = {
    fontSize: "3em",
    fontFamily: "Montserrat",
    color: themeName === "dark" ? "#1c1c1c" : "#fff",
    lineHeight: "50px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    textAlign: "center",
  };

  const styledSubBox = {
    width: "90%",
    backgroundColor: themeName === "dark" ? "#1c1c1c" : "#fff",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    rowGap: "10px",
  };

  const styledTextSubBox = {
    fontSize: "1.4em",
    fontFamily: "Montserrat",
    color: themeName === "dark" ? "#fff" : "#1c1c1c",
    lineHeight: "40px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    textAlign: "justify",
  };

  const styledTextSubBoxSmall = {
    fontSize: "1em",
    fontFamily: "Montserrat",
    color: "#fff",
    lineHeight: "40px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    textAlign: "justify",
    backgroundColor: themeName === "dark" ? "#A60303" : "#A60303",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRadius: "5px",
  };

  const buttonTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: "#fff",
            backgroundColor: "#A60303",
          },
          contained: {
            "&:hover": {
              backgroundColor: "transparent",
              color: themeName === "dark" ? "#fff" : "#A60303",
              border:
                themeName === "light"
                  ? "1px solid #A60303"
                  : "1px solid #A60303",
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    Sr.reveal(".search", {
      duration: 1500,
      rotate: { x: 10, y: 10, z: 0 },
      origin: "bottom",
      distance: "10%",
    });
  }, []);

  return (
    <S.styledDiv theme={themeName} isSearch={post?.length == 1 ? true : false}>
      <S.styledLeft className="search">
        <Box className="Box">
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
              <StepLabel>
                <Typography sx={titleStep}>Introdução</Typography>
              </StepLabel>

              <StepContent>
                <Typography sx={textStep}>
                  Descubra um pouco mais sobre nosso itinerario!!!
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <ThemeProvider theme={buttonTheme}>
                      <Button
                        variant="contained"
                        sx={{ mt: 1, mr: 1 }}
                        onClick={handleNext}
                      >
                        <Typography sx={buttonStep}>Avançar</Typography>
                      </Button>
                    </ThemeProvider>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <Typography sx={titleStep}>Desenvolvimento</Typography>
              </StepLabel>

              <StepContent>
                <Typography sx={textStep}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam ullam nisi iusto, quae facilis, magnam pariatur, nostrum
                  impedit optio eum iure sit officia quas accusantium dicta
                  nobis doloremque distinctio. Possimus!
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <ThemeProvider theme={buttonTheme}>
                      <Button
                        variant="contained"
                        sx={{ mt: 1, mr: 1 }}
                        onClick={handleNext}
                      >
                        <Typography sx={buttonStep}>Avançar</Typography>
                      </Button>
                    </ThemeProvider>
                    <Button sx={{ mt: 1, mr: 1 }} onClick={handleBack}>
                      <Typography sx={buttonStep}>Voltar</Typography>
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step>
              <StepLabel>
                <Typography sx={titleStep}>??</Typography>
              </StepLabel>

              <StepContent>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                  }}
                >
                  <Typography sx={styledTypography}>EXPERIMENTE</Typography>
                  <ThemeProvider theme={inputTheme}>
                    <TextField
                      label="Pesquisar"
                      sx={{ width: width > 690 ? "500px" : "300px" }}
                      placeholder="Digite 'dignidade intima'"
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyUp={(e) => handleFindPost(e)}
                    ></TextField>
                  </ThemeProvider>
                  <Typography sx={styledTypographyDefault}>
                    Nós produzimos varios conteudos durante os bimestres, que
                    tal experimentar um?
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button sx={{ mt: 1, mr: 1 }} onClick={handleBack}>
                      <Typography sx={buttonStep}>Voltar</Typography>
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </S.styledLeft>
      <S.styledRight>
        {post?.length == 1 && (
          <Box sx={styledBox} className="BoxSearch">
            <Typography sx={textBox} className="textBox">
              O resultado da sua pesquisa é:
            </Typography>
            <Box sx={styledSubBox}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <Avatar
                  src={post[0].image}
                  sx={{ width: "100px", height: "100px" }}
                ></Avatar>
                <Typography sx={styledTextSubBox} className="textSubBox">
                  Titulo: {post[0].name}
                </Typography>
              </Box>
              <Box>
                {" "}
                <Typography sx={styledTextSubBoxSmall} className="textSubBox">
                  Descrição: {post[0].description}
                </Typography>
              </Box>
            </Box>
            <Typography sx={textBox} className="textBox">
              que tal conhecer um pouco mais sobre essa postagem?
            </Typography>
            <Button
              variant="outlined"
              sx={{
                width: "90%",
                fontFamily: "Montserrat",
                fontSize: "1.3em",
                height: "80px",
              }}
            >
              Detalhes
            </Button>
            <AiOutlineSearch className="iconSearch" />
            <S.styledRightAfter></S.styledRightAfter>
          </Box>
        )}
        {isSearch == true && post?.length == 0 && (
          <Alert sx={titleStep} variant="outlined" severity="error">
            Não encontrado!!
          </Alert>
        )}
      </S.styledRight>
    </S.styledDiv>
  );
};
