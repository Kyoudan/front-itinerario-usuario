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
                <>
                  <S.styledImage
                    src={item.content}
                    reference={item.reference}
                  />
                  {item.reference && (
                    <S.styledReference>{item.reference}</S.styledReference>
                  )}
                </>
              )}{" "}
              {item.type === "text" && (
                <S.styledText theme={theme} size={item.size}>
                  {item.content}
                </S.styledText>
              )}
              {item.type === "video" && (
                <iframe
                  width="100%"
                  height="400"
                  src={item.content}
                  frameBorder="0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ marginBottom: "50px", marginTop: "50px" }}
                ></iframe>
              )}
            </>
          ))}
        </div>
      </S.styledContent>
    </S.styledDiv>
  );
};
