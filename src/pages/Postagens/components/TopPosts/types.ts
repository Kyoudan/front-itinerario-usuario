export interface IStyledLeft {
  theme?: "dark" | "light";
}

export interface IStyledRight {
  theme?: "dark" | "light";
}

export interface IAxiosFeaturedPosts {
  data: {
    count: number;
    data: IFeaturedPosts[];
  };
}

export interface IFeaturedPosts {
  id: number;
  Post: IPosts;
}

export interface IPosts {
  id: number;
  name: string;
  color: string;
  image: string;
  uuid: string;
  users: IUser;
  postTags: ITags;
  postContent: IPostsContent[];
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ITags {
  id: number;
  name: string;
}

export interface IPostsContent {
  id: number;
  content: string;
  type: string;
}
