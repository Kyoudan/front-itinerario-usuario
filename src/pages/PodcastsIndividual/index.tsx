import { useAppThemeContext } from "../../contexts/ThemeContext";
import { Audio } from "./components/Audio";
import { Info } from "./components/Info";
import * as S from "./style";

export const PodcastsIndividual = () => {
  const { themeName } = useAppThemeContext();

  return (
    <S.styledDiv theme={themeName}>
      <Audio />
      <Info />
    </S.styledDiv>
  );
};
