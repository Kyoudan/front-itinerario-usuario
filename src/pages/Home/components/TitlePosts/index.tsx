import { AiOutlineArrowDown } from "react-icons/ai";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";

export const TitlePosts = () => {
  const { themeName } = useAppThemeContext();

  return (
    <S.styledDiv theme={themeName}>
      <h1>
        <AiOutlineArrowDown className="Icon1" />
        Conheça sobre nossas postagens <AiOutlineArrowDown className="Icon2" />
      </h1>
    </S.styledDiv>
  );
};
