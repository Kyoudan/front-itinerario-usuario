import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export interface IStyledBox {
  theme?: "dark" | "light";
}

export interface IStyledSubBox {
  theme?: "dark" | "light";
}

export interface ITagAxios {
  data: {
    data: ITag[];
    count: number;
  };
}

export interface ITag {
  id: number;
  name: string;
  description: string;
  image: string;
  uuid: string;
}

export interface IProps {
  item?: string;
  setIsSearch: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
}
