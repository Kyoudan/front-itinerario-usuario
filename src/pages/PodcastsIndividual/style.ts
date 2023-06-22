import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  min-height: 900px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#1c1c1c" : "#FFFFFF"};
`;
