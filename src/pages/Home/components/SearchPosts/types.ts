export interface IStyledDiv {
  theme?: "dark" | "light";
  isSearch?: boolean;
}

export interface IPostApollo {
  getOnePost?: {
    data: {
      name: string;
      description: string;
      image: string;
      uuid: string;
      id: number;
    };
  };
}

export interface IPost {
  name?: string;
  uuid?: string;
  description?: string;
  image?: string;
  id: number;
}
