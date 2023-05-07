import styled from "@emotion/styled";
import { IStyledDiv, IStyledPadding, IStyledStrings } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 1100px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  cursor: default;
  position: relative;
  overflow-x: hidden;
`;

export const styledDivTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 690px) {
    align-items: center;
    justify-content: center;
  }

  &::after {
    content: "Itinerario";
    width: 50px;
    height: 50px;
    position: absolute;
    left: 120px;
    top: -20px;
    z-index: 10;
    font-size: 2em;
    font-family: "Bebas neue";
    color: ${({ theme }) => (theme === "dark" ? "#cccccc" : "#fff")};
  }

  &::before {
    content: "";
    width: 60px;
    height: 6px;
    background-color: ${({ theme }) => (theme === "dark" ? "#cccccc" : "#fff")};
    z-index: 11;
    position: absolute;
    top: -10px;
    left: 50px;
  }
`;

export const styledDivBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 460px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 690px) {
    align-items: center;
    justify-content: center;
  }
`;

export const styledTitleLogo = styled.h1<IStyledStrings>`
  font-size: 10em;
  font-family: "Bebas neue";
  z-index: 3;
  color: ${({ theme }) => (theme === "dark" ? "#cccccc" : "#fff")};
  @media (max-width: 680px) {
    font-size: 10em;
  }
  @media (max-width: 590px) {
    font-size: 8em;
  }
  @media (max-width: 475px) {
    font-size: 6em;
  }
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

  @media (max-width: 680px) {
    font-size: 10em;

    @keyframes moveWords {
      0% {
        width: 120px;
        transform: scaleX(2);
      }
      25% {
        width: 150px;
        transform: scaleX(3);
      }
      50% {
        width: 160px;
        transform: scaleX(3.5);
      }
      75% {
        width: 150px;
        transform: scaleX(3);
      }
      100% {
        width: 120px;
        transform: scaleX(2);
      }
    }
  }

  @media (max-width: 590px) {
    font-size: 8em;

    @keyframes moveWords {
      0% {
        width: 100px;
        transform: scaleX(2);
      }
      25% {
        width: 130px;
        transform: scaleX(3);
      }
      50% {
        width: 140px;
        transform: scaleX(3.5);
      }
      75% {
        width: 130px;
        transform: scaleX(3);
      }
      100% {
        width: 100px;
        transform: scaleX(2);
      }
    }
  }

  @media (max-width: 475px) {
    font-size: 6em;

    @keyframes moveWords {
      0% {
        width: 90px;
        transform: scaleX(2);
      }
      25% {
        width: 100px;
        transform: scaleX(3);
      }
      50% {
        width: 110px;
        transform: scaleX(3.5);
      }
      75% {
        width: 100px;
        transform: scaleX(3);
      }
      100% {
        width: 90px;
        transform: scaleX(2);
      }
    }
  }

  @media (max-width: 360px) {
    font-size: 5em;

    @keyframes moveWords {
      0% {
        width: 60px;
        transform: scaleX(2);
      }
      25% {
        width: 60px;
        transform: scaleX(2);
      }
      50% {
        width: 60px;
        transform: scaleX(2);
      }
      75% {
        width: 60px;
        transform: scaleX(2);
      }
      100% {
        width: 60px;
        transform: scaleX(2);
      }
    }
  }
`;

export const padding = styled.div<IStyledPadding>`
  padding-left: ${({ width }) => (width ? width : "50px")};

  @media (max-width: 680px) {
    padding-left: 0px;
  }
`;

export const fundoFita = styled.img`
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 20px;
  z-index: 1;
  opacity: 1;
`;
