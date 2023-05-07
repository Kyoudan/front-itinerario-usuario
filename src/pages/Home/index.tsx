import * as S from "./style";
import { Opening } from "./components/Opening";
import { PresetationOfPosts } from "./components/PresetationOfPosts";

export const Home = () => {
  return (
    <S.styledContainer>
      <Opening />
      <PresetationOfPosts />
      <Opening />
    </S.styledContainer>
  );
};
