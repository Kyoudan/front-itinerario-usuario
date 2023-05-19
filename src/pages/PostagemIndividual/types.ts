export interface IPostAxios {
  data: {
    id: number;
    uuid: string;
    name: string;
    image: string;
    author: string;
    finished: boolean;
    description: string;
    color: string;
    createdAt: string;
    postTags: {
      id: number;
      name: string;
    };
    users: {
      id: number;
      name: string;
      email: string;
      image: string;
    };
    postContent: IPostContent[];
  };
}

export interface IPost {
  id: number;
  uuid: string;
  name: string;
  image: string;
  author: string;
  finished: boolean;
  description: string;
  color: string;
  createdAt: string;
  postTags: {
    id: number;
    name: string;
  };
  users: {
    id: number;
    name: string;
    email: string;
    image: string;
  };
  postContent: IPostContent[];
}

export interface IPostContent {
  id: number;
  content: string;
  order: number;
  type: string;
  size: number;
}
