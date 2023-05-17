import styled from "@emotion/styled";
import { IStyledContainer, IStyledDiv } from "./types";

export const styledContainer = styled.div<IStyledContainer>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};

  .Text-categories{
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    font-size: 5rem;
    font-family: "Montserrat", sans-serif;
    margin: 10px 0 0 80px;
  }
  .Search{
    width: 500px;
    margin: 0 auto;
  }
`;
export const styledDiv = styled.div<IStyledDiv>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .postsCards{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .cardPosts{
    margin: 15px;
    background-color: ${({ theme }) => (theme === "dark" ? "#131313" : "#fff")};
    border: transparent;
    box-shadow: 0px 0px 4px 0px #000;
  }

`;


