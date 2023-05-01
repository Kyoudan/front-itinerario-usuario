import { Dispatch, SetStateAction } from "react";

export interface IProps {
  isDrawer: boolean;
  setIsDrawer: Dispatch<SetStateAction<boolean>>;
}

export interface ICategoriesAxios {
  data: {
    data: ICategories[];
    count: number;
  };
}

export interface ICategories {
  id: number;
  name: string;
}
