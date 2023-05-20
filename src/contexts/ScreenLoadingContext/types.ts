import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProps {
  children: ReactNode;
}

export interface IScreenLoadingContext {
  isScreenLoading: boolean;
  setIsLoadingScreen: Dispatch<SetStateAction<boolean>>;
}

export interface IStyledDiv {
  theme?: "dark" | "light";
  animation?: "animation-in" | "animation-out" | undefined;
}
