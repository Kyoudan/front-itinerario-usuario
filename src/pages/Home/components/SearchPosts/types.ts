export interface IStyledDiv {
  theme?: "dark" | "light";
}

export interface IPostAxios {
  data: {
    data: IPost[];
    count: number;
  };
}

export interface IPost {
  name?: string;
  description?: string;
  createdAt?: string;
  PostTags: {
    name?: string;
  };
}
