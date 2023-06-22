import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import { IProps } from "./types";

export const Info = ({ data }: IProps) => {
  const { themeName } = useAppThemeContext();

  return (
    <S.styledDiv theme={themeName}>
      <p className="Details">{data?.details}</p>
    </S.styledDiv>
  );
};
