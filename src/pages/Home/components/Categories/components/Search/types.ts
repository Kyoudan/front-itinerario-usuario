import { Dispatch, SetStateAction } from "react";

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
}

export interface IProps {
  item?: string;
  setIsSearch: Dispatch<SetStateAction<boolean>>;
}
