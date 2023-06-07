import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1336px) {
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  .postsCards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .cardPosts {
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

  ${({ isSearch }) =>
    isSearch
      ? `  
      @media (max-width: 1336px) {

        height: 1000px;

      }

      @media (max-width: 684px) {
        height: 1000px;
      }

      @media (max-width: 600px) {
        height: 1100px;
      }

      @media (max-width: 460px) {
        height: 1000px;
      }`
      : ``}
`;

export const styledLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  .Box {
    width: 500px;

    @media (max-width: 547px) {
      width: 350px;
    }
  }

  .styledTypography {
    font-size: 6em;
    letter-spacing: 10px;

    @media (max-width: 690px) {
      font-size: 3em;
      letter-spacing: 3px;
    }
  }

  .styledTypographyDefault {
    font-size: 1.3em;

    @media (max-width: 690px) {
      font-size: 0.7em;
    }
  }

  .titleStep {
    font-size: 1.5em;

    @media (max-width: 690px) {
      font-size: 0.95em;
    }
  }

  .textStep {
    font-size: 1em;

    @media (max-width: 690px) {
      font-size: 0.7em;
    }
  }

  .buttonStep {
    font-size: 1em;

    @media (max-width: 690px) {
      font-size: 0.8em;
    }
  }

  .textField {
    width: 500px;

    @media (max-width: 690px) {
      width: 300px;
    }
  }
`;

export const styledRight = styled.div`
  width: 50%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 90%;
  }

  .iconSearch {
    font-size: 2em;
    position: absolute;
    left: -20px;
    top: -20px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 1px #000;
    border-radius: 50%;
  }

  .BoxSearch {
    width: 85%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 30px;
  }

  .textBox {
    @media (max-width: 510px) {
      font-size: 1.5em;
      line-height: 20px;
    }
  }

  .textSubBox {
    @media (max-width: 510px) {
      font-size: 1em;
      line-height: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
export const styledRightAfter = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
