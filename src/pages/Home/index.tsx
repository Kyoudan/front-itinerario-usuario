import * as S from "./style";
import { Opening } from "./components/Opening";
import { PresetationOfPosts } from "./components/PresetationOfPosts";
import { SearchPosts } from "./components/SearchPosts";
import { PresetationOfCategories } from "./components/PresetationOfCategories";
import { Categories } from "./components/Categories";
import { UpButton } from "../../components/UpButton";
import { ShortcutMenu } from "../../components/ShortcutMenu";

export const Home = () => {
  return (
    <>
      <S.styledContainer>
        <Opening />
        <PresetationOfPosts />
        <SearchPosts />
        <PresetationOfCategories />
        <Categories />
        <UpButton />
        <ShortcutMenu />
      </S.styledContainer>
    </>
  );
};
