import { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import { IPost, IPostAxios } from "./types";
import { Cabecalho } from "./components/Cabecalho";
import { Conteudo } from "./components/Conteudo";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { motion, useScroll, useSpring } from "framer-motion";
import "./style.css";
import { useScreenLoadingContext } from "../../contexts/ScreenLoadingContext/ScreenLoadingContext";

export const PostagemIndividual = () => {
  const [post, setPost] = useState<IPost>();
  const { uuid } = useParams();
  const { themeName } = useAppThemeContext();
  const { scrollYProgress } = useScroll();
  const { setIsLoadingScreen } = useScreenLoadingContext();

  console.log(scrollYProgress);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const getPost = async () => {
    try {
      setIsLoadingScreen(true);
      const result: IPostAxios = await api.get(`/post/${uuid}`);
      setPost(result.data);
        setIsLoadingScreen(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <S.styledDiv>
        <Cabecalho post={post} theme={themeName} />
        <Conteudo post={post} theme={themeName} />
      </S.styledDiv>
    </>
  );
};
