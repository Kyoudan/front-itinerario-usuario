import styled from "@emotion/styled";
import { IStyledBox, IStyledSubBox } from "./types";

export const styledDiv = styled.div`
  width: 100%;
  min-height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

export const styledBox = styled.div<IStyledBox>`
  width: 90%;
  height: 90%;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  position: relative;
  flex-wrap: wrap;

  .Alert {
    width: 85%;
    font-size: 1.3em;
    font-family: "Montserrat", sans-serif;
    align-items: center;
  }
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
`;

export const styledSubBox = styled.div<IStyledSubBox>`
  width: 90%;
  height: 80px;
  background-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
  border-radius: 5px;
  padding: 10px;

  .Title {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  }

  .Text {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  }
`;

export const styledBackButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
  position: absolute;
  top: -30px;
  left: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .Icon {
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
    font-size: 2.5em;
  }
`;
