export interface IStyledDiv {
  theme?: "dark" | "light";
}

export interface ITagsAxios {
  data: {
    data: ITags[];
    count: number;
  };
}

export interface ITags {
  name?: string;
  createdAt?: string;
  id?: number;
}
