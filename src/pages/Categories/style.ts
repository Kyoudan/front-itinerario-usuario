import styled from "@emotion/styled";
import { IStyledContainer, IStyledDiv } from "./types";

export const styledContainer = styled.div<IStyledContainer>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};

  .Text-categories {
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    font-size: 5rem;
    font-family: "Montserrat", sans-serif;
  }
  .Search {
    width: 500px;
    margin: 0 auto;
  }
`;
export const styledDiv = styled.div<IStyledDiv>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .postsCards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .cardPosts {
    margin: 15px;
    background-color: ${({ theme }) => (theme === "dark" ? "#131313" : "#fff")};
    border: transparent;
    box-shadow: 0px 0px 4px 0px #000;
    transition: 0.5s;

    &:hover {
      transform: scale(1.02);
      transition: 0.5s;
      box-shadow: 0px 0px 10px 0px #000;
    }
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 40px;
  }

  .icon {
    font-size: 1.7em;
    background-color: ${({ theme }) =>
      theme === "dark" ? "#A60303" : "#A60303"};
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
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

  .LoadingDiv {
    width: 100%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InputSearch = styled.input`
  width: 50%;
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  border: 0.5px solid #a60303;
  font-size: 1.4em;
  font-family: "Montserrat", sans-serif;
`;
