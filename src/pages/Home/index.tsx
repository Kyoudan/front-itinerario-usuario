import * as S from "./style";
import { Opening } from "./components/Opening";
import { PresetationOfPosts } from "./components/PresetationOfPosts";
import { SearchPosts } from "./components/SearchPosts";
import { PresetationOfCategories } from "./components/PresetationOfCategories";
import { Categories } from "./components/Categories";
import { UpButton } from "../../components/UpButton";
import { ShortcutMenu } from "../../components/ShortcutMenu";
import { TitlePosts } from "./components/TitlePosts";
import { TitleCategories } from "./components/TitleCategories";

export const Home = () => {
  return (
    <>
      <S.styledContainer>
        <Opening />
        <PresetationOfPosts />
        <TitlePosts />
        <SearchPosts />

        <PresetationOfCategories />
        <TitleCategories />
        <Categories />
        <UpButton />
        <ShortcutMenu />
      </S.styledContainer>
    </>
  );
};
