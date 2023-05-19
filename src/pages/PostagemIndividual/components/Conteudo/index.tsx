import * as S from "./styles";
import { IProps } from "./types";

export const Conteudo = ({ post, theme }: IProps) => {
  return (
    <S.styledDiv theme={theme}>
      <S.styledContent>
        {post?.image && <img src={post?.image} className="ImagemPostagem" />}
      </S.styledContent>
    </S.styledDiv>
  );
};
