import { useAppThemeContext } from "../../contexts/ThemeContext";
import { TopPosts } from "./components/TopPosts";
import { Typography } from "@mui/material";
import * as S from "./style";
import { Posts } from "./components/Posts";
import { UpButton } from "../../components/UpButton";
import { ShortcutMenu } from "../../components/ShortcutMenu";

export const Postagens = () => {
  const { themeName } = useAppThemeContext();

  return (
    <S.styledDiv theme={themeName}>
      <ShortcutMenu />
      <UpButton />
      <TopPosts />
      <div className="DivTitlePostsContainer">
        <div className="DivTitlePosts">
          <Typography className="TitlePosts">Todas as postagens:</Typography>
        </div>
      </div>
      <Posts />
    </S.styledDiv>
  );
};
