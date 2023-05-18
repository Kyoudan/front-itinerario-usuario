import { Alert, Typography } from "@mui/material";
import * as S from "./style";
import { useAppThemeContext } from "../../../../../../contexts/ThemeContext";
import { useEffect, useState } from "react";
import { api } from "../../../../../../api/api";
import { IProps, ITag, ITagAxios } from "./types";
import { PropagateLoader } from "react-spinners";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Card, CardMedia, CardContent } from "@mui/material";

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
                <Card
                  sx={{ width: 300, cursor: "pointer" }}
                  className="cardPosts"
                  key={item.id}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={
                      item.image
                        ? item.image
                        : "https://cdn.discordapp.com/attachments/863861085471244288/1107852050131333181/image.png"
                    }
                    alt="Paella dish"
                    className="image"
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      color={themeName === "dark" ? "#fff" : "#fff"}
                      className="Title"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={themeName === "dark" ? "#fff" : "#fff"}
                      className="Description"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
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
