import { Alert, Typography } from "@mui/material";
import * as S from "./style";
import { useAppThemeContext } from "../../../../../../contexts/ThemeContext";
import { useEffect, useState } from "react";
import { api } from "../../../../../../api/api";
import { IProps, ITag, ITagAxios } from "./types";
import { PropagateLoader } from "react-spinners";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Search = ({ item, setIsSearch }: IProps) => {
  const { themeName } = useAppThemeContext();
  const [categories, setCategories] = useState<ITag[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPostByCategory = async () => {
    try {
      setIsLoading(true);
      const result: ITagAxios = await api.get(`postsbytag?limit=5&tag=${item}`);
      setCategories(result.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostByCategory();
  }, [item]);

  return (
    <S.styledDiv>
      {!isLoading ? (
        <S.styledBox theme={themeName}>
          {categories && categories.length > 0 ? (
            categories?.map((item) => (
              <>
                <S.styledSubBox theme={themeName}>
                  <Typography className="Title">Titulo: {item.name}</Typography>
                  <Typography className="Text">{item.description}</Typography>
                </S.styledSubBox>
              </>
            ))
          ) : (
            <Alert severity="error" className="Alert">
              Não encontrado!!
            </Alert>
          )}
          <S.styledBackButton
            onClick={() => setIsSearch(false)}
            theme={themeName}
          >
            <AiOutlineArrowLeft className="Icon" />
          </S.styledBackButton>
        </S.styledBox>
      ) : (
        <PropagateLoader
          color={themeName === "dark" ? "#fff" : "#a60303"}
          speedMultiplier={0.8}
          style={{
            width: "80%",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        />
      )}
    </S.styledDiv>
  );
};
