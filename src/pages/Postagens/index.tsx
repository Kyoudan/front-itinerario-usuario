import { useAppThemeContext } from "../../contexts/ThemeContext";
import { TopPosts } from "./components/TopPosts";
import { Typography } from "@mui/material";
import * as S from "./style";
import { Posts } from "./components/Posts";

export const Postagens = () => {
  const { themeName } = useAppThemeContext();

  return (
    <S.styledDiv theme={themeName}>
      <TopPosts />
      <div className="DivTitlePostsContainer">
        <div className="DivTitlePosts">
          <Typography className="TitlePosts">Postagens</Typography>
        </div>
      </div>
      <Posts />
    </S.styledDiv>
  );
};
