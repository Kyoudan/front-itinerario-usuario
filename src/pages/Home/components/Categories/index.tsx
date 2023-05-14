import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import Draggable from "react-draggable";
import { Typography } from "@mui/material";
import { useAppCategoriesContext } from "../../../../contexts/CategoriesContext";
import { Search } from "./components/Search";

export const Categories = () => {
  const { themeName } = useAppThemeContext();
  const divCenter = useRef<HTMLElement>(null);
  const { categories, getAllCategories } = useAppCategoriesContext();
  const [animate, setAnimate] = useState<"animate-in" | "animate-out">();
  const [selectItem, setSelectItem] = useState<string>();
  const [positionDivCenter, setPositionDivCenter] = useState<[number, number]>([
    0, 0,
  ]);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<string>();

  const handleOnDrag = (
    x: number,
    y: number,
    item?: string,
    isStop?: boolean
  ) => {
    if (item) {
      console.log(item);
      setSelectItem(item);
    }
    const { x: divCenterX, y: divCenterY } =
      divCenter.current!.getBoundingClientRect();
    const finallyX = x - divCenterX;
    const finallyY = y - divCenterY;
    setPositionDivCenter([divCenterX, divCenterY / 1.75]);

    if (finallyX > 0 && finallyX < 300 && finallyY > 0 && finallyY < 100) {
      setAnimate("animate-in");

      const boxCategory = document.getElementById(selectItem!);
      boxCategory?.classList.add("category-animateIn");

      if (isStop) {
        setSelectCategory(item);
        setIsSearch(true);
        setTimeout(() => {
          boxCategory?.classList.add("category-animateIn");
        }, 10);
      }
    } else if (
      finallyX < 0 ||
      typeof finallyX === "number" ||
      finallyY < 0 ||
      typeof finallyY === "number"
    ) {
      setAnimate("animate-out");

      const boxCategory = document.getElementById(selectItem!);
      boxCategory?.classList.remove("category-animateIn");
      boxCategory?.classList.remove("category-animateOut");
    }
  };

  useLayoutEffect(() => {
    getAllCategories();
  }, []);

  return (
    <S.styledDiv
      theme={themeName}
      divCenterX={positionDivCenter[0]}
      divCenterY={positionDivCenter[1]}
    >
      {!isSearch ? (
        <>
          {categories.length > 0 &&
            categories.map((item) => (
              <Draggable
                handle=".handle"
                defaultPosition={{
                  x: Math.floor(Math.random() * (window.innerWidth / 2)),
                  y: Math.floor(Math.random() * 350),
                }}
                grid={[25, 25]}
                scale={1}
                onStart={(e: any) => handleOnDrag(e.x, e.y, e.target.id)}
                onDrag={(e: any) => handleOnDrag(e.x, e.y)}
                onStop={(e: any) => handleOnDrag(e.x, e.y, selectItem, true)}
              >
                <S.boxCategories
                  className="handle"
                  style={{ position: "absolute" }}
                  id={item.name}
                  key={item.id}
                  text={item.name}
                  theme={themeName}
                >
                  {item.name}
                </S.boxCategories>
              </Draggable>
            ))}
          <S.styledDivCenter>
            <S.DivCenter
              id="divCenter"
              ref={divCenter}
              animate={animate}
              theme={themeName}
            >
              <Typography className="Text">
                Jogue uma categoria aqui!!
              </Typography>
            </S.DivCenter>
          </S.styledDivCenter>
        </>
      ) : (
        <>
          <Search item={selectCategory} setIsSearch={setIsSearch} />
        </>
      )}
    </S.styledDiv>
  );
};
