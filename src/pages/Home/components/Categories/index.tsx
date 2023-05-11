import { useEffect, useLayoutEffect, useRef } from "react";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import Draggable from "react-draggable";
import { Typography } from "@mui/material";
import { useAppCategoriesContext } from "../../../../contexts/CategoriesContext";

export const Categories = () => {
  const { themeName } = useAppThemeContext();
  const divCenter = useRef<HTMLElement>(null);
  const { categories, getAllCategories } = useAppCategoriesContext();

  const handleOnDrag = (x: number, y: number, item?: string) => {
    if (item) {
      console.log(item);
    }
    const { x: divCenterX, y: divCenterY } =
      divCenter.current!.getBoundingClientRect();
    const finallyX = x - divCenterX;
    const finallyY = y - divCenterY;
    if (finallyX > 0 && finallyX < 300 && finallyY > 0 && finallyY < 100) {
      console.log("Foi");
    }
  };

  useLayoutEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <S.styledDiv theme={themeName}>
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
            onStop={(e: any) => handleOnDrag(e.x, e.y)}
          >
            <S.boxCategories
              className="handle"
              style={{ position: "absolute" }}
              id={item.name}
              key={item.id}
            >
              <Typography className="TextBox"> {item.name}</Typography>
            </S.boxCategories>
          </Draggable>
        ))}
      <S.styledDivCenter>
        <S.DivCenter id="divCenter" ref={divCenter}>
          <Typography className="Text">Jogue uma categoria aqui!!</Typography>
        </S.DivCenter>
      </S.styledDivCenter>
    </S.styledDiv>
  );
};
