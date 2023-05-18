import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  min-height: 906px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  display: flex;
  flex-direction: column;

  .DivTitlePostsContainer {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;

    .DivTitlePosts {
      position: relative;
      .TitlePosts {
        font-size: 3em;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
        text-align: center;

        user-select: none;

        &::after {
          content: "";
          position: absolute;
          width: 50px;
          height: 5px;
          background-color: #a60303;
          bottom: -2px;
          left: 0;
          border-radius: 5px;
          transition: 0.5s ease;
        }

        &:hover::after {
          transition: 0.5s ease;
          width: 100px;
          left: 160px;
        }

        &::before {
          content: "";
          position: absolute;
          width: 50px;
          height: 5px;
          background-color: #a60303;
          top: -2px;
          right: 0;
          border-radius: 5px;
          transition: 0.5s ease;
        }

        &:hover::before {
          transition: 0.5s ease;
          width: 100px;
          right: 160px;
        }
      }
    }
  }
`;
