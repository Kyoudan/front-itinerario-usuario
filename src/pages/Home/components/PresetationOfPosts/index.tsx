import * as S from "./style";
import Cards from "../../../../assets/Cards.png";
import CardsClaro from "../../../../assets/Cardsclaro.png";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";

export const PresetationOfPosts = () => {
  const [img, setImg] = useState<string>();
  const { themeName } = useAppThemeContext();

  useEffect(() => {
    themeName === "dark" ? setImg(Cards) : setImg(CardsClaro);
  }, [themeName]);

  const styledBox = {
    width: "500px",
    height: "500px",
    borderRadius: "10px",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const styledTypography = {
    fontSize: "6em",
    fontFamily: "Bebas Neue",
    color: "#fff",
    /*     WebkitTextStroke: ".2px #ffffff",
    textStroke: "1px #fff", */
    lineHeight: "70px",
  };

  const styledTypographyBorder = {
    fontSize: "42em",
    fontFamily: "Bebas Neue",
    color: "transparent",
    WebkitTextStroke: themeName === "dark" ? ".2px #ffffff" : "1px #000000",
    textStroke: themeName === "dark" ? "1px #fff" : "1px #000",
    lineHeight: "70px",
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
  };

  return (
    <S.styledDiv theme={themeName}>
      <S.styledLeft /* style={{ paddingLeft: "100px" }} */>
        <Typography sx={styledTypographyBorder}>EXPLORE</Typography>
      </S.styledLeft>
      <S.styledImg src={img} />
      <S.shadowImg theme={themeName} />
    </S.styledDiv>
  );
};
