import * as S from "./style";
import Cards from "../../../../assets/Cards.png";
import CardsClaro from "../../../../assets/Cardsclaro.png";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import ScrollReveal from "scrollreveal";

export const PresetationOfPosts = () => {
  const [img, setImg] = useState<string>();
  const [width] = useState<number>(window.innerWidth);
  const { themeName } = useAppThemeContext();
  const Sr = ScrollReveal();
  Sr.reveal(".styledDiv", {
    duration: 1500,
    reset: true,
    rotate: { x: 10, y: 10, z: 0 },
    origin: "bottom",
    distance: "10%",
  });

  useEffect(() => {
    themeName === "dark" ? setImg(Cards) : setImg(CardsClaro);
  }, [themeName]);

  const styledTypographyBorder = {
    fontFamily: "Bebas Neue",
    color: "transparent",
    WebkitTextStroke:
      width > 690
        ? themeName === "dark"
          ? ".2px #ffffff"
          : "1px #000000"
        : themeName === "dark"
        ? ".5px #ffffff"
        : "1px #000000",
    textStroke: themeName === "dark" ? "1px #fff" : "1px #000",
    lineHeight: "70px",
    zIndex: 2,
    cursor: "default",
    userSelect: "none",
  };

  return (
    <S.styledDiv theme={themeName} className="styledDiv">
      <S.styledLeft /* style={{ paddingLeft: "100px" }} */>
        <Typography sx={styledTypographyBorder} className="text">
          EXPLORE
        </Typography>
      </S.styledLeft>
      <S.styledImg src={img} />
      <S.shadowImg theme={themeName} />
    </S.styledDiv>
  );
};
