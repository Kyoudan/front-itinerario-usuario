import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import { IAxiosFeaturedPosts, IFeaturedPosts } from "./types";

export const TopPosts = () => {
  const { themeName } = useAppThemeContext();
  const [featuredPosts, setFeaturedPosts] = useState<IFeaturedPosts[]>([]);

  const getFeaturedPosts = async () => {
    try {
      const result: IAxiosFeaturedPosts = await api.get("/featuredposts");
      setFeaturedPosts(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeaturedPosts();
  }, []);

  return (
    <S.styledDiv>
      <S.styledLeft theme={themeName}>
        <Typography className="Text">Conheça nossas</Typography>
        <Typography className="Text">principais postagens</Typography>
      </S.styledLeft>
      <S.styledRight theme={themeName}></S.styledRight>
    </S.styledDiv>
  );
};
