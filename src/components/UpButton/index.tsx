import { useEffect, useState } from "react";
import * as S from "./style";
import { AiOutlineArrowUp } from "react-icons/ai";

export const UpButton = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [buttonAnimate, setButtonAnimate] = useState<string>();
  const [viewButton, setViewButton] = useState<boolean>();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
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
    <S.styledButton animate={buttonAnimate} onClick={handleClick}>
      <AiOutlineArrowUp className="Icon" />
    </S.styledButton>
  );
};
