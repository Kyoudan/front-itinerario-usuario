import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => (theme === "dark" ? "1c1c1c" : "#fff")};

  h1 {
    font-size: 2em;
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    position: relative;
    max-width: 800px;
    text-align: center;
    margin: 0px 10px;

    .Icon1 {
      margin-left: 10px;
      font-size: 2em;
      color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
      position: absolute;
      left: -100px;
      top: -10px;
      margin: 0px 10px;
    }

    .Icon2 {
      margin-left: 10px;
      font-size: 2em;
      color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
      position: absolute;
      right: -100px;
      top: -10px;
      margin: 0px 10px;
    }

    @media (max-width: 768px) {
      font-size: 1.5em;
      margin: 0;

      .Icon1 {
        margin-left: 10px;
        font-size: 2em;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
        position: absolute;
        left: -0px;
        top: 50px;
        margin: 0px 0px;
      }

      .Icon2 {
        margin-left: 10px;
        font-size: 2em;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
        position: absolute;
        right: -10px;
        top: auto;
        margin: 0px 0px;
      }
    }
  }
`;
