import { Typography } from "@mui/material";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { useAppCategoriesContext } from "../../../../contexts/CategoriesContext";

export const PresetationOfCategories = () => {
  const { themeName } = useAppThemeContext();
  const [tag, setTags] = useState<Array<string | number>>([]);
  const { categories } = useAppCategoriesContext();
  const Sr = ScrollReveal();

  const handleGetTags = async () => {
    try {
      let steps: Array<string | number> = [];
      categories.forEach((item, index) => {
        if (item && item.name) {
          steps.push(item.name, 2000);
        }

        if (index == categories.length - 1) {
          setTags(steps);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Sr.reveal(".categories", {
      duration: 1500,
      reset: true,
      rotate: { x: 10, y: 10, z: 0 },
      origin: "bottom",
      distance: "10%",
    });
  }, []);

  useEffect(() => {
    handleGetTags();
  }, [categories]);

  useEffect(() => {
    console.log(tag);
  }, [tag]);

  return (
    <S.styledDiv theme={themeName}>
      <Typography className="SubText categories">
        Tudo em um unico lugar
      </Typography>
      <Typography className="Text categories">
        {categories.length > 0 && (
          <Typical steps={tag} loop={Infinity}></Typical>
        )}
      </Typography>
    </S.styledDiv>
  );
};
