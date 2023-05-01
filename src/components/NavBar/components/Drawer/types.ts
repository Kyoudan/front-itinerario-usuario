import { Dispatch, SetStateAction } from "react";

export interface IProps {
  isDrawer: boolean;
  setIsDrawer: Dispatch<SetStateAction<boolean>>;
}
