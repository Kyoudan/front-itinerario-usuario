import { AiOutlineArrowDown } from "react-icons/ai";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";

export const TitleCategories = () => {
  const { themeName } = useAppThemeContext();

  return (
    <S.styledDiv theme={themeName}>
      <h1>
        <AiOutlineArrowDown className="Icon1" />
        Arraste a caixa até o quadrado abaixo para descobrir sobre nossas
        postagens <AiOutlineArrowDown className="Icon2" />
      </h1>
    </S.styledDiv>
  );
};
