import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";

export const Categories = () => {
  const { themeName } = useAppThemeContext();

  return <S.styledDiv theme={themeName}></S.styledDiv>;
};
