import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;

  .Text {
    font-size: 6em;
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
    font-family: "Montserrat";
    line-height: 90px;

    @media (max-width: 665px) {
      font-size: 5em;
    }

    @media (max-width: 547px) {
      font-size: 4em;
    }
    @media (max-width: 444px) {
      font-size: 3em;
    }
  }

  .SubText {
    font-size: 2em;
    font-family: "Montserrat";
    color: #a60303;

    @media (max-width: 444px) {
      font-size: 1.5em;
    }
  }
`;
