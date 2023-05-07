import {
  Box,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchPosts = () => {
  const { themeName } = useAppThemeContext();

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
    fontSize: "6em",
    fontFamily: "Bebas Neue",
    color: "transparent",
    WebkitTextStroke: themeName === "dark" ? ".2px #ffffff" : "1px #000000",
    textStroke: themeName === "dark" ? "1px #fff" : "1px #000",
    lineHeight: "70px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    letterSpacing: "10px",
  };

  const styledTypographyDefault = {
    fontSize: "1.3em",
    fontFamily: "Montserrat",
    color: "#494949",
    lineHeight: "20px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    maxWidth: "500px",
  };

  const styledBox = {
    width: "90%",
    height: "450px",
    backgroundColor: "#1c1c1c",
    borderRadius: "10px",
    position: "relative",
  };

  return (
    <S.styledDiv>
      <S.styledLeft>
        <Typography sx={styledTypography}>EXPERIMENTE</Typography>
        <ThemeProvider theme={inputTheme}>
          <TextField
            label="Pesquisar"
            sx={{ width: "500px" }}
            placeholder="Digite 'dignidade intima'"
          ></TextField>
        </ThemeProvider>
        <Typography sx={styledTypographyDefault}>
          Nós produzimos varios conteudos durante os bimestres, que tal
          experimentar um?
        </Typography>
      </S.styledLeft>
      <S.styledRight>
        <Box sx={styledBox}>
          <AiOutlineSearch className="iconSearch" />
          <S.styledRightAfter></S.styledRightAfter>
        </Box>
      </S.styledRight>
    </S.styledDiv>
  );
};
