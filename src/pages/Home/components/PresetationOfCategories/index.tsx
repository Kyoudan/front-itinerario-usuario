import { Typography } from "@mui/material";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import { ITagsAxios } from "./types";
import ScrollReveal from "scrollreveal";

export const Categories = () => {
  const { themeName } = useAppThemeContext();
  const [tag, setTags] = useState<Array<string | number>>([]);
  const Sr = ScrollReveal();

  const handleGetTags = async () => {
    try {
      const result: ITagsAxios = await api.get("/posttags");
      let steps: Array<string | number> = [];
      result.data.data.forEach((item) => {
        if (item && item.name) {
          steps.push(item.name, 2000);
        }
      });
      setTags(steps);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetTags();

    Sr.reveal(".categories", {
      duration: 1500,
      reset: true,
      rotate: { x: 10, y: 10, z: 0 },
      origin: "bottom",
      distance: "10%",
    });
  }, []);

  useEffect(() => {
    console.log(tag);
  }, [tag]);

  return (
    <S.styledDiv theme={themeName}>
      <Typography className="SubText categories">
        Tudo em um unico lugar
      </Typography>
      <Typography className="Text categories">
        <Typical steps={tag ? tag : []} loop={Infinity}></Typical>
      </Typography>
    </S.styledDiv>
  );
};
