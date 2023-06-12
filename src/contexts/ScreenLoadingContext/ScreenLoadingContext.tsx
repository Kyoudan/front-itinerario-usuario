import { createContext, useContext, useEffect, useState } from "react";
import * as S from "./style";
import { useAppThemeContext } from "../ThemeContext";
import { IProps, IScreenLoadingContext } from "./types";
import { Box, LinearProgress, Typography } from "@mui/material";

const ScreenLoadingContext = createContext({} as IScreenLoadingContext);

export const useScreenLoadingContext = () => {
  return useContext(ScreenLoadingContext);
};

export const ScreenLoadingProvider = ({ children }: IProps) => {
  const [messageError, setMessageError] = useState<string>("");
  const [isScreenLoading, setIsLoadingScreen] = useState<boolean>(false);
  const [screenLoading, setScreenLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(1);
  const [screenLoadingAnimation, setScreenLoadingAnimation] = useState<
    "animation-in" | "animation-out"
  >();
  const { themeName } = useAppThemeContext();

  useEffect(() => {
    if (isScreenLoading) {
      setScreenLoading(true);
      setScreenLoadingAnimation("animation-in");
      setTimeout(() => {
        setProgress(90);
      }, 1000);
    } else if (!isScreenLoading) {
      setScreenLoadingAnimation("animation-out");
      setProgress(100);
    }
  }, [isScreenLoading]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setProgress(1);
        setScreenLoading(false);
      }, 1000);
    }
  }, [progress]);

  useEffect(() => {
    setProgress(1);
  }, []);

  useEffect(() => {
    if (messageError.length > 4 || messageError.toString().length > 4) {
      setTimeout(() => {
        const errorCount = localStorage.getItem("errorcount") as string;
        localStorage.setItem(
          "errorcount",
          `${parseInt(errorCount) + 1}` || "0"
        );
        if (isNaN(parseInt(errorCount))) {
          localStorage.setItem("errorcount", "0");
        }

        if (parseInt(errorCount) < 3) {
          location.reload();
        }
      }, 6500);
    }
  }, [messageError]);

  return (
    <ScreenLoadingContext.Provider
      value={{ isScreenLoading, setIsLoadingScreen, setMessageError }}
    >
      {screenLoading && (
        <S.styledDiv theme={themeName} animation={screenLoadingAnimation}>
          <Box style={{ width: "50%" }}>
            <Typography className="Text">Carregando...</Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              className="Progress"
            />
          </Box>
          {messageError && (
            <Typography className="Error">
              Error: {messageError.toString()}
            </Typography>
          )}
        </S.styledDiv>
      )}
      {children}
    </ScreenLoadingContext.Provider>
  );
};
