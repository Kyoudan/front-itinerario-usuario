import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  background-color: ${({ theme }) =>
    theme === "dark" ? "#1c1c1c" : "#FFFFFF"};
`;
