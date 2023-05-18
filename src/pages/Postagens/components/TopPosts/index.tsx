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

export const TopPosts = () => {
  const { themeName } = useAppThemeContext();
  const [featuredPosts, setFeaturedPosts] = useState<IFeaturedPosts[]>([]);

  const getFeaturedPosts = async () => {
    try {
      const result: IAxiosFeaturedPosts = await api.get("/featuredposts");
      setTimeout(() => {
        setFeaturedPosts(result.data.data);
      }, 5000);
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
                <S.styledSlider>
                  <img
                    src={item.Post.image}
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
