import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  position: fixed;
  z-index: 1000000000000000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  pointer-events: none;
  animation: ${({ animation }) =>
    animation && animation === "animation-in"
      ? "screenLoadingAnimationIn 0.3s  ease-in-out forwards"
      : "screenLoadingAnimationOut 0.3s 0.5s ease-in-out forwards"};

  .Progress {
    z-index: 10000000000000000000;
  }

  .Text {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    text-align: center;
    margin-bottom: 20px;
  }

  @keyframes screenLoadingAnimationIn {
    0% {
      opacity: 0;
      scale: 1.2;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes screenLoadingAnimationOut {
    0% {
      opacity: 1;
      scale: 1;
    }
    100% {
      opacity: 0;
      scale: 1.2;
    }
  }
`;
