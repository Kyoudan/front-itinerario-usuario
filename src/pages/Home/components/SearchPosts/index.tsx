import {
  Alert,
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
import { KeyboardEventHandler, useState } from "react";
import { api } from "../../../../api/api";
import { IPost, IPostAxios } from "./types";

export const SearchPosts = () => {
  const { themeName } = useAppThemeContext();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [post, setPost] = useState<IPost[]>();
  const [width] = useState<number>(window.innerWidth);

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
          `/post?find=${search}&limit=1`
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
    width: "90%",
    height: "450px",
    backgroundColor: themeName === "dark" ? "#fff" : "#1c1c1c",
    borderRadius: "10px",
    position: "relative",
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

  return (
    <S.styledDiv theme={themeName}>
      <S.styledLeft>
        <Box sx={{ width: width > 690 ? "500px" : "300px"}}>
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
                      sx={{ width: width > 690 ? "500px" : "250px" }}
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
          <Box sx={styledBox}>
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
