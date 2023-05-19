import styled from "@emotion/styled";
import { IBoxCategories, IDivCenter, IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  min-height: 600px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  position: relative;
  user-select: none;
  overflow-x: hidden;
  padding-top: 50px;
  overflow-y: visible;

  .category-animateIn {
    width: 300px;
    height: 50px;
  }

  .category-animateOut {
    width: 130px;
    height: 30px;
  }
`;

export const styledDivCenter = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const DivCenter = styled.div<IDivCenter>`
  width: 300px;
  height: 100px;
  background-color: transparent;
  border-radius: 10px;
  margin-bottom: 10px;

  border: ${({ theme }) =>
    theme === "dark" ? "1px dashed #fff" : "1px dashed #1c1c1c"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  animation: ${({ animate }) =>
    animate === "animate-in"
      ? "divCenter-animateIn .5s ease forwards"
      : "divCenter-animateOut .5s ease forwards"};

  .Text {
    font-size: 15px;
    color: #494949;
    font-family: "Montserrat", sans-serif;
  }

  @keyframes divCenter-animateIn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @keyframes divCenter-animateOut {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const boxCategories = styled.div<IBoxCategories>`
  width: 130px;

  background-color: #a60303;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) =>
    theme === "dark" ? "1px solid #fff" : "1px solid #1c1c1c"};
  cursor: move;
  transition: 0.2s ease;
  z-index: 2;
  color: #fff;
  font-size: 1.3em;
  font-family: "Montserrat", sans-serif;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.5);
  }
`;
