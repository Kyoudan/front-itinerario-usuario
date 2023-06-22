import { Slider, Stack } from "@mui/material";
import * as S from "./style";
import { FaPause, FaPlay } from "react-icons/fa";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useEffect, useRef, useState } from "react";
import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import doja from "../../../../assets/podcasts/doja.mp3";

export const Audio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState<number>(30);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState<number>(0);
  const { themeName } = useAppThemeContext();

  const handleChange = (event: Event, newValue: number | number[]) => {
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
    console.log("Oi", currentTime);
  }, [currentTime]);

  useEffect(() => {
    const audio = audioRef.current as HTMLAudioElement;
    setDuration(audio.duration);
  }, [audioRef]);

  return (
    <S.styledDiv theme={themeName}>
      <div className="Container">
        <h1 className="Title">Falando sobre as inteligencias artificiais</h1>
        <p className="Description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, possimus dolores! Facilis dolor cumque cupiditate. Ut,
          nesciunt eos. Vel, animi esse ratione officia ex iste veniam
          exercitationem corporis officiis ducimus!
        </p>
        <audio
          src={doja}
          controls={audioPlaying}
          className="Audio"
          ref={audioRef}
        >
          Tu navegador no soporta la etiqueta de audio.
        </audio>
        <div className="divAudio">
          <S.styledButton onClick={toggleAudio}>
            {audioPlaying ? <FaPause /> : <FaPlay />}
          </S.styledButton>
          <Slider
            size="small"
            value={currentTime}
            min={0}
            max={duration ? duration : 100}
            onChange={handleProgressBarChange}
            valueLabelDisplay="auto"
          />
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
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
    </S.styledDiv>
  );
};
