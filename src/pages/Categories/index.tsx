import { useParams } from "react-router-dom";
import * as S from "./style";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { IPosts } from "./types";
import {
  InputBase,
  IconButton,
  Typography,
  styled,
  alpha,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export const CategoriesPage = () => {
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [loading, setLoading] = useState(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [postsCount, setPostsCount] = useState<number>(0);
  const [posts, setPosts] = useState<IPosts[]>([]);
  const { themeName } = useAppThemeContext();
  const { name } = useParams();
  const { find } = useParams();
  const navigate = useNavigate();


  const GetPostsbyId = async (count?: number) => {
    try {
      setLoading(true);
      setIsSearch(false);
      let result;
      result = await api.get(`/postsbytag?tag=${name}`);
      setPosts(result.data.data);
      setPostsCount(result.data.count);
      setLoading(false);
    } catch {}
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      try {
        if (event.target.value) {
          setLoading(true);
          setIsSearch(false);
          const result = await api.get(
            `/postsbytag?tag=${name}&find=${event.target.value}`
          );
          setPosts(result.data.data);
          setPostsCount(result.data.count);
          setLoading(false);
        }
      } catch {}
    }
  };

  useEffect(() => {
    GetPostsbyId();
  }, [name]);

  return (
    <>
      <S.styledContainer theme={themeName}>
        <Typography className="Text-categories">{name}</Typography>
        <S.styledDiv theme={themeName}>
          <Search className="Search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={handleKeyPress}
            />
          </Search>
          <div className="postsCards">
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
                      variant="body1"
                      color={themeName === "dark" ? "#fff" : "#fff"}
                      className="Text"
                    >
                      {item.name}
                    </Typography>
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
          </div>
        </S.styledDiv>
        <Footer />
      </S.styledContainer>
    </>
  );
};
