import * as S from "./style";
import { Opening } from "./components/Opening";
import { PresetationOfPosts } from "./components/PresetationOfPosts";
import { SearchPosts } from "./components/SearchPosts";

export const Home = () => {
  return (
    <S.styledContainer>
      <Opening />
      <PresetationOfPosts />
      <SearchPosts />
    </S.styledContainer>
  );
};
