import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 400px;
  border-top: 1px solid #fff;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
`;
