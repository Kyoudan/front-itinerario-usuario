import * as S from "./style";
import fitaEscura from "../../../../assets/fita.png";
import fitaClara from "../../../../assets/fitaclara.png";
import { useEffect, useState } from "react";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";

export const Opening = () => {
  const { themeName } = useAppThemeContext();
  const [img, setImg] = useState<string>();

  useEffect(() => {
    themeName === "dark" ? setImg(fitaClara) : setImg(fitaEscura);
  }, [themeName]);

  return (
    <S.styledDiv theme={themeName}>
      <S.styledDivTop>
        <S.padding />
        <S.styledTitleLogo theme={themeName}>S</S.styledTitleLogo>
        <S.styledTitleLogoDistorted theme={themeName}>
          E
        </S.styledTitleLogoDistorted>
        <S.styledTitleLogo theme={themeName}>LIGA </S.styledTitleLogo>
      </S.styledDivTop>
      <S.styledDivBottom>
        <S.padding width="140px" />
        <S.styledTitleLogo theme={themeName}>NA MIDI</S.styledTitleLogo>
        <S.styledTitleLogoDistorted theme={themeName}>
          A
        </S.styledTitleLogoDistorted>
      </S.styledDivBottom>
      <S.fundoFita src={img} />
    </S.styledDiv>
  );
};
