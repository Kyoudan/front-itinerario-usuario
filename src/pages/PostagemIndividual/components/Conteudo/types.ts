import { IPost } from "../../types";

export interface IStyledDiv {
  theme?: "dark" | "light";
}

export interface IProps {
  post?: IPost;
  theme?: "dark" | "light";
}

export interface IStyledText {
  theme?: "dark" | "light";
  size?: number;
}
