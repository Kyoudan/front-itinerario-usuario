import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import { IAxiosFeaturedPosts, IFeaturedPosts } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useScreenLoadingContext } from "../../../../contexts/ScreenLoadingContext/ScreenLoadingContext";

export const TopPosts = () => {
  const { themeName } = useAppThemeContext();
  const [featuredPosts, setFeaturedPosts] = useState<IFeaturedPosts[]>([]);
  const { setIsLoadingScreen } = useScreenLoadingContext();
  const navigate = useNavigate();

  const getFeaturedPosts = async () => {
    try {
      setIsLoadingScreen(true);
      const result: IAxiosFeaturedPosts = await api.get("/featuredposts");
      setFeaturedPosts(result.data.data);
      setIsLoadingScreen(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeaturedPosts();
  }, []);

  return (
    <S.styledDiv>
      <S.styledLeft theme={themeName}>
        <Typography className="Text">Conheça nossas</Typography>
        <Typography className="Text">principais postagens</Typography>
      </S.styledLeft>
      <S.styledRight theme={themeName}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {featuredPosts ? (
            featuredPosts.map((item) => (
              <SwiperSlide style={{ width: "100%", height: "500px" }}>
                <S.styledSlider
                  onClick={() => navigate(`/postagens/${item.Post.uuid}`)}
                >
                  <img
                    src={
                      item.Post.image
                        ? item.Post.image
                        : "https://cdn.discordapp.com/attachments/863861085471244288/1107852050131333181/image.png"
                    }
                    className="imageSwiper"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Typography className="TextSwiper">
                    {item.Post.name}
                  </Typography>
                  <Typography className="DescriptionSwiper">
                    {item.Post.description}
                  </Typography>
                </S.styledSlider>
              </SwiperSlide>
            ))
          ) : (
            <Skeleton
              variant="rectangular"
              width={500}
              height={500}
              sx={{ bgcolor: "white.900" }}
            />
          )}
        </Swiper>
      </S.styledRight>
    </S.styledDiv>
  );
};
