import styled from "@emotion/styled";
import { IStyledDiv, IStyledPadding, IStyledStrings } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 906px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  cursor: default;
  position: relative;
`;

export const styledDivTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const styledDivBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const styledTitleLogo = styled.h1<IStyledStrings>`
  font-size: 10em;
  font-family: "Bebas neue";
  z-index: 3;
  color: ${({ theme }) => (theme === "dark" ? "#cccccc" : "#fff")};
`;

export const styledTitleLogoDistorted = styled.h1<IStyledStrings>`
  width: 110px;
  font-size: 10em;
  font-family: "Bebas neue";
  transform: scaleX(2);
  text-align: center;
  overflow: hidden;
  z-index: 3;
  color: ${({ theme }) => (theme === "dark" ? "#cccccc" : "#fff")};
  animation: moveWords 20s ease alternate infinite;
  transition: 0.5s ease;

  @keyframes moveWords {
    0% {
      width: 110px;
      transform: scaleX(2);
    }
    25% {
      width: 160px;
      transform: scaleX(3);
    }
    50% {
      width: 170px;
      transform: scaleX(3.5);
    }
    75% {
      width: 160px;
      transform: scaleX(3);
    }
    100% {
      width: 110px;
      transform: scaleX(2);
    }
  }

  &:hover {
    transition: 0.5s ease;
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#ff3334")};
  }
`;

export const padding = styled.div<IStyledPadding>`
  padding-left: ${({ width }) => (width ? width : "50px")};
`;

export const fundoFita = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 1;
`;
