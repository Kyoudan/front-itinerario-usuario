import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
`;

export const styledContent = styled.div`
  margin-top: 20px;
  max-width: 800px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;

  .ImagemPostagem {
    max-width: 90%;
    border-radius: 10px;
  }
`;
