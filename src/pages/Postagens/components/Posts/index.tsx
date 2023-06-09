import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../../../api/api";
import { IAxiosPosts, IPosts } from "./types";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { PropagateLoader } from "react-spinners";

export const Posts = () => {
  const { themeName } = useAppThemeContext();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [countPosts, setCountPosts] = useState<number>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamValue = queryParams.get("find");
  const [find, setFind] = useState<string>();
  const [loading, setLoading] = useState(false);

  const getAllPosts = async () => {
    console.log(countPosts, loading);
    try {
      setLoading(true);
      const result: IAxiosPosts = await api.get("/postspublic");
      console.log(result);
      setPosts(result.data.data);
      setCountPosts(result.data.count);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleKeyPress = async (
    event: any,
    key?: string,
    findProps?: string
  ) => {
    try {
      if (
        key === "Enter" ||
        (event && event.type == "click") ||
        event == "query"
      ) {
        if (find == "" || find == queryParamValue) {
          getAllPosts();
        } else {
          setLoading(true);
          const result = await api.get(
            `/postspublic?find=${findProps ? findProps : find}`
          );
          setPosts(result.data.data);
          setLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (queryParamValue) {
      setFind(queryParamValue);
      handleKeyPress("query", "query", queryParamValue);
      setTimeout(() => {
        window.scrollTo({ top: 300, behavior: "smooth" });
      }, 200);
    } else {
      getAllPosts();
    }
  }, []);

  useEffect(() => {
    if (queryParamValue) {
      setFind(queryParamValue);
      handleKeyPress("query", "query", queryParamValue);
      setTimeout(() => {
        window.scrollTo({ top: 300, behavior: "smooth" });
      }, 200);
    }
  }, [queryParamValue]);

  return (
    <S.styledDiv theme={themeName}>
      <div className="search">
        <BsSearch className="icon" onClick={(e: any) => handleKeyPress(e)} />
        <S.InputSearch
          placeholder="Search…"
          onKeyDown={(e) => handleKeyPress(null, e.key)}
          onChange={(e) => setFind(e.target.value)}
        />
      </div>
      {posts && posts.length > 0 ? (
        posts.map((item) => (
          <Card
            sx={{ width: 345, cursor: "pointer" }}
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
            <CardContent id={queryParamValue ? queryParamValue : ""}>
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
    </S.styledDiv>
  );
};
