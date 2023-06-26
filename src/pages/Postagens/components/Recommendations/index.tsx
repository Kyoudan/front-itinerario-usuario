import { useAppCategoriesContext } from "../../../../contexts/CategoriesContext";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import Cookies from "js-cookie";
import { IPosts, IRecommendations } from "./types";
import { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import { PropagateLoader } from "react-spinners";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
//@ts-ignore
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const Recommendations = () => {
  const { themeName } = useAppThemeContext();
  const { categories } = useAppCategoriesContext();
  const [recommendations, setRecommendations] = useState<IRecommendations[]>();
  const [ordered, setOrdered] = useState<IRecommendations[]>();
  const [posts, setPosts] = useState<IPosts[]>();
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const navigate = useNavigate();

  const handleRecommendations = () => {
    categories.forEach((item) => {
      if (Cookies.get(item.name)) {
        setRecommendations((prevState) => {
          if (prevState?.find((element) => element.category === item.name)) {
            return prevState;
          }

          if (prevState) {
            return [
              ...prevState,
              { category: item.name, value: Number(Cookies.get(item.name)) },
            ];
          }
          return [
            { category: item.name, value: Number(Cookies.get(item.name)) },
          ];
        });
      }
    });
  };

  const handleOrder = () => {
    if (recommendations) {
      console.log("Recomendações: ", recommendations);
      const ordered = recommendations.sort((a, b) => {
        if (a.value < b.value) {
          return 1;
        }
        if (a.value > b.value) {
          return -1;
        }
        return 0;
      });
      setOrdered(() => {
        return [ordered[0]];
      });
      setOrdered((prevState) => {
        if (prevState) {
          return [...prevState, ordered[1]];
        }
      });
      return;
    }
    setOrdered([]);
  };

  const handleSearch = async () => {
    try {
      if (ordered && ordered.length > 0) {
        setLoading(true);
        const result1 = await api.get(`/postsbytag?tag=${ordered[0].category}`);
        const result2 = await api.get(`/postsbytag?tag=${ordered[1].category}`);
        const results = [...result1.data.data, ...result2.data.data];
        setPosts(results.sort(() => Math.random() - 0.5));
        setLoading(false);
      } else {
        setLoading(true);
        const result = await api.get(`/postsbytag?tag=Saúde`);
        setPosts(result.data.data.sort(() => Math.random() - 0.5));
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      setPostsPerPage(1);
    } else if (window.innerWidth < 900) {
      setPostsPerPage(2);
    } else {
      setPostsPerPage(3);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    handleRecommendations();
  }, [categories]);

  useEffect(() => {
    handleOrder();
  }, [recommendations]);

  useEffect(() => {
    handleSearch();
    console.log("oi");
    console.log("oidnv");
  }, [ordered]);

  return (
    <S.styledDiv theme={themeName}>
      <Swiper
        slidesPerView={postsPerPage}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {posts && posts.length > 0 ? (
          posts.map((item) => (
            <SwiperSlide>
              <Card
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(`../postagens/${item.uuid}`)}
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
            </SwiperSlide>
          ))
        ) : !loading ? (
          <Box
            sx={{
              height: "450px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Alert
              severity="error"
              sx={{
                fontFamily: "Montserrat",
                color: "#A60303",
                lineHeight: "20px",
                zIndex: 1,
                cursor: "default",
                userSelect: "none",
                width: "345px",
                fontSize: "1.5em",
              }}
            >
              Nenhum resultado!!
            </Alert>
          </Box>
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
      </Swiper>
    </S.styledDiv>
  );
};
