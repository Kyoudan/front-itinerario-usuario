export interface IStyledDiv {
  theme?: "dark" | "light";
}

export interface IProps {
  data?: {
    uuid: string;
    title: string;
    description: string;
    details: string;
    audio: string;
  };
}
