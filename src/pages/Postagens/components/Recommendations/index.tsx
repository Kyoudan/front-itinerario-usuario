import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";

export const Recommendations = () => {
  const { themeName } = useAppThemeContext();

  return (
    <S.styledDiv theme={themeName}>
      <h1>oi</h1>
    </S.styledDiv>
  );
};
