import { useParams } from "react-router-dom";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { Audio } from "./components/Audio";
import { Info } from "./components/Info";
import * as S from "./style";
import { useEffect, useState } from "react";
import { datas } from "../../assets/podcasts/datas";

type objectData = {
  uuid: string;
  title: string;
  description: string;
  audio: string;
  details: string;
};

export const PodcastsIndividual = () => {
  const { themeName } = useAppThemeContext();
  const { uuid } = useParams();
  const [podcast, setPodcast] = useState<objectData>();

  useEffect(() => {
    const data = datas.find((data) => data.uuid === uuid);
    if (data) {
      document.title = data.title;
    }
    setPodcast(data);
  }, [uuid]);

  return (
    <S.styledDiv theme={themeName}>
      <Audio data={podcast} />
      <Info data={podcast} />
    </S.styledDiv>
  );
};
