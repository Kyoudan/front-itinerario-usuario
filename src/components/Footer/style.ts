import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  border-top: 0.1px solid #494949;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
`;
