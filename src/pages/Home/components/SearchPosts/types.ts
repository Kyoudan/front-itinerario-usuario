export interface IStyledDiv {
  theme?: "dark" | "light";
  isSearch?: boolean;
}

export interface IPostAxios {
  data: {
    data: IPost[];
    count: number;
  };
}

export interface IPost {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: string;
  image?: string;
  PostTags: {
    name?: string;
  };
}
