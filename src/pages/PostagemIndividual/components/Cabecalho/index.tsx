import { Avatar, Typography } from "@mui/material";
import * as S from "./style";
import { IProps } from "./types";
import { useEffect, useState } from "react";

export const Cabecalho = ({ post, theme }: IProps) => {
  const [altImage, setAltImage] = useState<string>();
  const [srcImage, setSrcImage] = useState<string>();
  const [avatar, setAvatar] = useState<string>();
  const [date, setDate] = useState<string>();

  useEffect(() => {
    if (post?.author != post?.users.name) {
      setAltImage(post?.author);
      setAvatar(post?.author.charAt(0).toUpperCase());
    } else {
      setAltImage(post?.users.name);
      if (!post?.users.image) {
        setAvatar(post?.users.name.charAt(0).toUpperCase());
      } else {
        setSrcImage(post?.users.image);
      }
    }

    if (post) {
      const data = new Date(post.createdAt);

      const dia = data.getDate();
      const mes = data.getMonth() + 1;
      const ano = data.getFullYear();
      const hora = data.getHours();
      const minuto = data.getMinutes();
      const segundo = data.getSeconds();

      const dataFormatada =
        dia.toString().padStart(2, "0") +
        "/" +
        mes.toString().padStart(2, "0") +
        "/" +
        ano +
        " " +
        hora.toString().padStart(2, "0") +
        ":" +
        minuto.toString().padStart(2, "0") +
        ":" +
        segundo.toString().padStart(2, "0");

      setDate(dataFormatada);
    }
  }, [post]);

  return (
    <S.styledDiv theme={theme}>
      <div className="BoxCabecalho">
        <Typography className="Title">{post?.name}</Typography>
        <Typography className="Description">{post?.description}</Typography>
        <div className="AvatarDiv">
          <Avatar alt={altImage} src={srcImage} sx={{ userSelect: "none" }}>
            {avatar}
          </Avatar>
          <div>
            <Typography className="Author">Por {altImage}</Typography>
            <Typography className="Date">{date}</Typography>
          </div>
        </div>
      </div>
    </S.styledDiv>
  );
};
