import { Link, useParams } from "react-router-dom";
import * as S from "./style";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { IPosts, IPostContent } from "./types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";

export const CategoriesPage = () => {
  const [loading, setLoading] = useState(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [postsCount, setPostsCount] = useState<number>(0);
  const [posts, setPosts] = useState<IPosts[]>([]);
  const { themeName } = useAppThemeContext();
  const { name } = useParams();
  const navigate = useNavigate();

  const GetPostsbyId = async (count?: number) => {
    try {
      setLoading(true);
      setIsSearch(false);
      const result = await api.get(`/postsbytag?tag=${name}`);
      setPosts(result.data.data);
      setPostsCount(result.data.count);
      setLoading(false);
      console.log(result.data.data);
    } catch {}
  };
  useEffect(() => {
    GetPostsbyId();
  });

  return (
    <>
      <S.styledContainer theme={themeName}>
          <Typography className="Text-categories">{name}</Typography>
          <S.styledDiv theme={themeName}>
            {posts &&
              posts.map((item) => (
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={() => navigate(`../postPage/${item.id}`)}
                  className="cardPosts"
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://rockntech.com.br/wp-content/uploads/2015/02/selfies-de-gatos_17.jpg"
                    alt="Paella dish"
                    className="image"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color={themeName === "dark" ? "#fff" : "#fff"}
                      className="Text"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              ))}
          </S.styledDiv>
          <Footer />
      </S.styledContainer>
    </>
  );
};
