import { Typography } from "@mui/material";
import * as S from "./styles";
import { IProps } from "./types";

export const Conteudo = ({ post, theme }: IProps) => {
  return (
    <S.styledDiv theme={theme}>
      <S.styledContent>
        {post?.image && <img src={post?.image} className="ImagemPostagem" />}
        <div className="DivContentText">
          {post?.PostContent.map((item) => (
            <>
              {item.type === "image" && (
                <img src={item.content} className="ImagemConteudo" />
              )}{" "}
              {item.type === "text" && (
                <S.styledText theme={theme} size={item.size}>
                  {item.content}
                </S.styledText>
              )}
            </>
          ))}
        </div>
      </S.styledContent>
    </S.styledDiv>
  );
};
