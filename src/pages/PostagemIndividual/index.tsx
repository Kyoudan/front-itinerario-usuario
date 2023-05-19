import { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import { IPost, IPostAxios } from "./types";
import { Cabecalho } from "./components/Cabecalho";
import { Conteudo } from "./components/Conteudo";
import { useAppThemeContext } from "../../contexts/ThemeContext";

export const PostagemIndividual = () => {
  const [post, setPost] = useState<IPost>();
  const { uuid } = useParams();
  const { themeName } = useAppThemeContext();

  const getPost = async () => {
    try {
      const result: IPostAxios = await api.get(`/post/${uuid}`);
      console.log(result.data);
      setPost(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <S.styledDiv>
      <Cabecalho post={post} theme={themeName} />
      <Conteudo post={post} theme={themeName} />
    </S.styledDiv>
  );
};
