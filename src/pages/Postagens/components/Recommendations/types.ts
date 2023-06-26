export interface IStyledDiv {
  theme?: "dark" | "light";
}

export interface IRecommendations {
  category: string;
  value: number;
}

export interface IPosts {
    id: number;
    name: string;
    description: string;
    image:string;
    color: string;
    uuid: string;
    createdAt: string;
    postTags: {
      id: number;
      name: string;
    };
    users: {
      id: number;
      name: string;
      email: string;
    };
    PostContent: IPostContent[];
  }
  export interface IPostContent {
    id: number;
    content: string;
    type: string;
  }
