import * as S from "./style";
import { Opening } from "./components/Opening";
import { PresetationOfPosts } from "./components/PresetationOfPosts";
import { SearchPosts } from "./components/SearchPosts";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Footer } from "../../components/Footer";
import { PresetationOfCategories } from "./components/PresetationOfCategories";
import { Categories } from "./components/Categories";

export const Home = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [buttonAnimate, setButtonAnimate] = useState<string>();
  const [viewButton, setViewButton] = useState<boolean>();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 200) {
      setViewButton(true);
      setButtonAnimate("animate-in");
    } else if (viewButton) {
      setViewButton(false);
      setButtonAnimate("animate-out");
    }
  }, [scrollPosition]);

  return (
    <S.styledContainer>
      <Opening />
      <PresetationOfPosts />
      <SearchPosts />
      <PresetationOfCategories />
      <Categories />  
      <S.styledButton animate={buttonAnimate} onClick={handleClick}>
        <AiOutlineArrowUp className="Icon" />
      </S.styledButton>
      <Footer />
    </S.styledContainer>
  );
};
