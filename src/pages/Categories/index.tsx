import { useParams } from "react-router-dom";
import * as S from "./style";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { IPosts } from "./types";
import { IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { PropagateLoader } from "react-spinners";
import Typical from "react-typical";

export const CategoriesPage = () => {
  const { themeName } = useAppThemeContext();

  const [loading, setLoading] = useState(false);
  const [postsCount, setPostsCount] = useState<number>(0);
  const [posts, setPosts] = useState<IPosts[]>([]);
  const { name } = useParams();
  const [find, setFind] = useState<string>();
  const [nameTypical, setNameTypical] = useState<[string, number]>();
  const navigate = useNavigate();

  const GetPostsbyId = async (count?: number) => {
    try {
      setLoading(true);
      let result;
      result = await api.get(`/postsbytag?tag=${name}`);
      setPosts(result.data.data);
      setPostsCount(result.data.count);
      setLoading(false);
    } catch {}
  };

  const handleKeyPress = async (event: any, key?: string) => {
    try {
      if (key === "Enter" || (event && event.type == "click")) {
        if (find == "") {
          GetPostsbyId();
        } else {
          setLoading(true);
          const result = await api.get(`/postsbytag?tag=${name}&find=${find}`);
          setPosts(result.data.data);
          setLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetPostsbyId();

    setNameTypical(["", 500]);

    setTimeout(() => {
      if (name) {
        setNameTypical([name, 500]);
      }
    }, 700);
  }, [name]);

  return (
    <>
      <S.styledContainer theme={themeName}>
        <Typography className="Text-categories" sx={{ textAlign: "center" }}>
          <Typical steps={name && nameTypical ? nameTypical : []}></Typical>
        </Typography>
        <S.styledDiv theme={themeName}>
          <div className="search">
            <BsSearch
              className="icon"
              onClick={(e: any) => handleKeyPress(e)}
            />
            <S.InputSearch
              placeholder="Search…"
              onKeyDown={(e) => handleKeyPress(null, e.key)}
              onChange={(e) => setFind(e.target.value)}
            />
          </div>

          <div className="postsCards">
            {!loading ? (
              posts.map((item) => (
                <Card
                  sx={{ width: 345, cursor: "pointer" }}
                  onClick={() => navigate(`../postPage/${item.id}`)}
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
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              ))
            ) : (
              <>
                <div className="LoadingDiv">
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
                </div>
              </>
            )}
          </div>
        </S.styledDiv>
        <Footer />
      </S.styledContainer>
    </>
  );
};
