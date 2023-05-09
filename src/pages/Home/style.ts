import styled from "@emotion/styled";
import { IStyledButton, IStyledContainer } from "./types";

export const styledContainer = styled.div<IStyledContainer>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const styledButton = styled.div<IStyledButton>`
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #a60303;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000000;
  animation: ${({ animate }) =>
    animate === "animate-in"
      ? "animate-in .5s ease forwards"
      : "animate-out .5s ease forwards"};

  .Icon {
    font-size: 3em;
    color: #fff;
  }

  @keyframes animate-in {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes animate-out {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;
