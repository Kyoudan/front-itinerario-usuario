import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  width: 100%;
  height: 500px;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  .cardPosts {
    background-color: ${({ theme }) => (theme === "dark" ? "#131313" : "#fff")};
    border: transparent;
    box-shadow: 0px 0px 4px 0px #000;
    transition: 0.5s;
    height: 80%;
    width: 340px;

    &:hover {
      transform: scale(1.02);
      transition: 0.5s;
      box-shadow: 0px 0px 10px 0px #000;
    }

    img {
      width: 100%;
      height: 200px;
    }
  }
  .Title {
    font-size: 1.3em;
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  .Description {
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    font-family: "Montserrat", sans-serif;
  }
  .Search {
    width: 500px;
    margin: 0 auto;
  }
`;
