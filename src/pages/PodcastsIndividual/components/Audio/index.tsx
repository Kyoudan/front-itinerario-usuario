import { Slider, Stack } from "@mui/material";
import * as S from "./style";
import { FaPause, FaPlay } from "react-icons/fa";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useEffect, useRef, useState } from "react";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import { IProps } from "./types";

export const Audio = ({ data }: IProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState<number>(30);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { themeName } = useAppThemeContext();

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(event);
    setVolume(newValue as number);
    const audio = audioRef.current as HTMLAudioElement;
    if (typeof newValue != "number") return;
    audio.volume = newValue / 100;
  };

  const toggleAudio = () => {
    const audio = audioRef.current as HTMLAudioElement;

    if (!audioPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    setAudioPlaying(!audioPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current as HTMLAudioElement;
    console.log("Update", audio.currentTime);
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current as HTMLAudioElement;
    console.log("duration", audio.duration);
    setDuration(audio.duration);
  };

  const handleProgressBarChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    console.log(event);
    const audio = audioRef.current as HTMLAudioElement;
    if (typeof newValue != "number") return;
    audio.currentTime = newValue;
    setCurrentTime(newValue);
  };

  useEffect(() => {
    const audio = audioRef.current as HTMLAudioElement;
    console.log(audio.currentTime);

    if (audioPlaying) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    } else {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audioPlaying]);

  useEffect(() => {
    setTimeout(() => {
      const audio = audioRef.current as HTMLAudioElement;
      setDuration(audio.duration);
    }, 3000);
  }, [audioRef]);

  return (
    <S.styledDiv theme={themeName}>
      <div className="Container">
        <h1 className="Title">{data?.title}</h1>
        <p className="Description">{data?.description}</p>
        <audio
          src={data?.audio}
          controls={audioPlaying}
          className="Audio"
          ref={audioRef}
        >
          Tu navegador no soporta la etiqueta de audio.
        </audio>
        <div className="divAudio">
          <div className="divAudioButton">
            <S.styledButton onClick={toggleAudio}>
              {audioPlaying ? <FaPause /> : <FaPlay />}
            </S.styledButton>
          </div>
          <div className="divAudioProgress">
            <Slider
              size="small"
              value={currentTime}
              min={0}
              max={duration ? duration : 500}
              onChange={handleProgressBarChange}
              valueLabelDisplay="auto"
            />
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <VolumeDown className="Icons" />
              <Slider
                aria-label="Volume"
                value={volume}
                onChange={handleChange}
                className="Volume"
              />
              <VolumeUp className="Icons" />
            </Stack>
          </div>
        </div>
      </div>
    </S.styledDiv>
  );
};
