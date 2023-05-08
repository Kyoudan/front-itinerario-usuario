import * as S from "./style";
import Painel from "../../assets/Painel.png";
import {
  Alert,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { BsFillSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { useState } from "react";
import Cookies from "js-cookie";
import { api } from "../../api/api";

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hideLogin, setHideLogin] = useState<boolean>(false);
  const { themeName, toggleTheme } = useAppThemeContext();
  const navigate = useNavigate();
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
              color: "#A60303",
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

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const LoginUser = async () => {
    try {
      setLoading(true);
      const result = await api.post("/login", {
        email,
        password,
      });
      setLoading(false);
      Cookies.set("token", result.data, {
        sameSite: "Strict",
        expires: 1,
      });
      navigate("/");
      setTimeout(() => {
        setHideLogin(true);
      }, 1000);
    } catch (err: any) {
      console.log(err);
      setLoading(false);
      setAlert(err.response.data.message);
      setTimeout(() => {
        setAlert("");
      }, 2000);
    }
  };
  return (
    <S.styledDiv>
      {!hideLogin && (
        <>
          <S.styledThemeArea>
            <S.styledButtonTheme onClick={handleToggleTheme} theme={themeName}>
              {themeName === "dark" ? <RiMoonClearFill /> : <BsFillSunFill />}
            </S.styledButtonTheme>
          </S.styledThemeArea>
          <S.styledBackArea theme={themeName}>
            <S.styledButtonBack theme={themeName} onClick={() => navigate("/")}>
              <FaArrowLeft />
            </S.styledButtonBack>
          </S.styledBackArea>
        </>
      )}
      {!hideLogin ? (
        <S.styledLeft theme={themeName}>
          {" "}
          <Typography
            sx={{
              fontSize: "3.5em",
              fontFamily: "Signika, sans-serif",
              textAlign: "center",
              color: "red",
              maxWidth: "400px",
              lineHeight: "50px",
              cursor: "default",
            }}
          >
            SE{" "}
            <strong style={{ fontWeight: 800, color: "#a60303" }}>LIGA</strong>{" "}
            NA{" "}
            <strong style={{ fontWeight: 800, color: "#a60303" }}>
              {" "}
              MIDIA!!
            </strong>
          </Typography>
          <ThemeProvider theme={inputTheme}>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: "80%" }}
              color="primary"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Senha"
              variant="outlined"
              sx={{ width: "80%" }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </ThemeProvider>
          {alert && (
            <Alert severity="error" sx={{ width: "75%" }}>
              {alert}
            </Alert>
          )}
          <ThemeProvider theme={buttonTheme}>
            {loading ? (
              <PropagateLoader
                color={themeName === "dark" ? "#fff" : "#a60303"}
                speedMultiplier={0.8}
                style={{
                  border: "1px solid #a60303",
                  width: "80%",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              />
            ) : (
              <Button
                sx={{
                  width: "80%",
                  height: "45px",
                  fontSize: "1.3em",
                  fontFamily: "Montserrat",
                }}
                variant="contained"
                onClick={LoginUser}
              >
                Acessar
              </Button>
            )}
          </ThemeProvider>
        </S.styledLeft>
      ) : (
        <S.styledWarningArea>
          <Button
            sx={{
              height: "40px",
              fontSize: "1em",
              fontFamily: "Montserrat",
              color: "#fff",
              border: "1px solid #fff",
              marginTop: "10px",
              backgroundColor: "#a60303",
            }}
            variant="text"
            onClick={() => navigate("/")}
          >
            Voltar à página inícial
          </Button>
        </S.styledWarningArea>
      )}

      <S.stlyedRight image={Painel}></S.stlyedRight>
    </S.styledDiv>
  );
};
