export interface IStyledDiv {
  theme?: "dark" | "light";
}

export interface IAxiosPosts {
  data: {
    count: number;
    data: IPosts[];
  };
}

export interface IPosts {
  id: number;
  uuid: string;
  image: string;
  name: string;
  description: string;
  finished: boolean;
  author: string;
  color: string;
  createdAt: string;
  postTags: {
    name: string;
    id: number;
  };
  users: {
    id: number;
    name: string;
    email: string;
  };
  postContent: IPostContent[];
}

export interface IPostContent {
  id: number;
  content: string;
  type: string;
  size: number;
}
