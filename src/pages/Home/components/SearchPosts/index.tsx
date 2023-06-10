import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
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
import { useEffect, useState } from "react";
import { IPost, IPostApollo } from "./types";
import ScrollReveal from "scrollreveal";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { gql, useLazyQuery } from "@apollo/client";

const GET_POST = gql`
  query obterPosts($find: String!) {
    getOnePost(find: $find) {
      data {
        name
        uuid
        id
        image
        description
      }
    }
  }
`;

export const SearchPosts = () => {
  const { themeName } = useAppThemeContext();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [post, setPost] = useState<IPost>();
  const [width] = useState<number>(window.innerWidth);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const Sr = ScrollReveal();

  const [obterPosts, { data }] = useLazyQuery<IPostApollo>(GET_POST);

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
        setLoading(true);
        await obterPosts({ variables: { find: search } });
        setIsSearch(true);
        setLoading(false);
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
    fontFamily: "Bebas Neue",
    color: "transparent",
    WebkitTextStroke: themeName === "dark" ? ".6px #ffffff" : "1px #000000",
    textStroke: themeName === "dark" ? "1px #fff" : "1px #000",
    lineHeight: "70px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
  };

  const styledTypographyDefault = {
    fontFamily: "Montserrat",
    color: themeName === "dark" ? "#bababa" : "#494949",
    lineHeight: "20px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    maxWidth: "500px",
  };

  const titleStep = {
    fontFamily: "Montserrat",
    color: "#A60303",
    lineHeight: "20px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    maxWidth: "500px",
  };

  const textStep = {
    fontFamily: "Montserrat",
    color: themeName === "dark" ? "#fff" : "#1c1c1c",
    lineHeight: "20px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    maxWidth: "500px",
  };

  const buttonStep = {
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

  useEffect(() => {
    Sr.reveal(".search", {
      duration: 1500,
      rotate: { x: 10, y: 10, z: 0 },
      origin: "bottom",
      distance: "10%",
    });
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);

  useEffect(() => {
    setPost(data?.getOnePost?.data);
  }, [data]);

  return (
    <S.styledDiv theme={themeName} isSearch={post ? true : false}>
      <S.styledLeft className="search">
        <Box className="Box">
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
              <StepLabel>
                <Typography sx={titleStep}>Introdução</Typography>
              </StepLabel>

              <StepContent>
                <Typography sx={textStep} className="textStep">
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
                        <Typography sx={buttonStep} className="buttonStep">
                          Avançar
                        </Typography>
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
                <Typography sx={textStep} className="textStep">
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
                        <Typography sx={buttonStep} className="buttonStep">
                          Avançar
                        </Typography>
                      </Button>
                    </ThemeProvider>
                    <Button sx={{ mt: 1, mr: 1 }} onClick={handleBack}>
                      <Typography sx={buttonStep} className="buttonStep">
                        Voltar
                      </Typography>
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
                  <Typography
                    sx={styledTypography}
                    className="styledTypography"
                  >
                    EXPERIMENTE
                  </Typography>
                  <ThemeProvider theme={inputTheme}>
                    <TextField
                      label="Pesquisar"
                      sx={{ width: width > 690 ? "500px" : "300px" }}
                      placeholder="Digite 'dignidade intima'"
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyUp={(e) => handleFindPost(e)}
                      className="textField"
                    ></TextField>
                  </ThemeProvider>
                  <Typography
                    sx={styledTypographyDefault}
                    className="styledTypographyDefault"
                  >
                    Nós produzimos varios conteudos durante os bimestres, que
                    tal experimentar um?
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button sx={{ mt: 1, mr: 1 }} onClick={handleBack}>
                      <Typography sx={buttonStep} className="buttonStep">
                        Voltar
                      </Typography>
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </S.styledLeft>
      <S.styledRight>
        {post && (
          <>
            <Typography
              sx={styledTypographyDefault}
              style={{
                fontSize: "1.5em",
                marginRight: "50px",
                marginBottom: "10px",
              }}
            >
              Resultado da pesquisa:
            </Typography>
            <Card
              sx={{ width: 345, cursor: "pointer" }}
              className="cardPosts"
              key={post.id}
              onClick={() => navigate(`/postagens/${post.uuid}`)}
            >
              <CardMedia
                component="img"
                height="194"
                image={
                  post.image
                    ? post.image
                    : "https://cdn.discordapp.com/attachments/863861085471244288/1107852050131333181/image.png"
                }
                alt="Paella dish"
                className="image"
              />
              <CardContent>
                <Typography
                  variant="body1"
                  color={themeName === "dark" ? "#fff" : "#fff"}
                  className="Title"
                >
                  {post.name}
                </Typography>
                <Typography
                  variant="body2"
                  color={themeName === "dark" ? "#fff" : "#fff"}
                  className="Description"
                >
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </>
        )}
        {isSearch == true && !post && (
          <Alert
            sx={titleStep}
            variant="outlined"
            severity="error"
            className="titleStep"
          >
            Não encontrado!!
          </Alert>
        )}
        {loading && (
          <PropagateLoader
            color={themeName === "dark" ? "#fff" : "#a60303"}
            speedMultiplier={0.8}
            style={{
              width: "80%",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          />
        )}
      </S.styledRight>
    </S.styledDiv>
  );
};
