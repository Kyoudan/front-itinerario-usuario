import styled from "@emotion/styled";
import {
  IStyledBackArea,
  IStyledLeft,
  IStyledRight,
  IStyledTheme,
  IStyledThemeArea,
} from "./types";

export const styledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const stlyedRight = styled.div<IStyledRight>`
  width: 100%;
  background: linear-gradient(60deg, #a60303, #1c1c1c);
  position: absolute;
  top: 0;
  bottom: 0;
`;

export const styledLeft = styled.div<IStyledLeft>`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
  z-index: 2;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  animation: ${({ exitAnimation }) =>
    exitAnimation ? `${exitAnimation} 1s ease forwards` : ""};

  @keyframes animationExit {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-700px);
    }
  }
`;

export const styledThemeArea = styled.div<IStyledThemeArea>`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 3;
  cursor: pointer;
`;
export const styledBackArea = styled.div<IStyledBackArea>`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
  cursor: pointer;
`;

export const styledButtonTheme = styled.button<IStyledTheme>`
  width: 50px;
  height: 51px;
  font-size: 2em;
  z-index: 4;
  cursor: pointer;
  background-color: ${({ theme }) =>
    theme === "dark" ? "transparent" : "#a60303"};
  border: ${({ theme }) =>
    theme === "dark" ? "1px solid #fff" : "1px solid #a60303"};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  color: #fff;

  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme }) =>
      theme === "dark" ? "#fff" : "transparent"};
    color: #a60303;
  }

  animation: ${({ exitAnimation }) =>
    exitAnimation ? `${exitAnimation} 1s ease forwards` : ""};

  @keyframes animationExitButtons {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const styledButtonBack = styled.button<IStyledTheme>`
  width: 50px;
  height: 51px;
  font-size: 1.7em;
  z-index: 4;
  cursor: pointer;
  background-color: transparent;
  border: ${({ theme }) =>
    theme === "dark" ? "0px solid #fff" : "0px solid #a60303"};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#a60303")};

  &:hover {
    transition: 0.5s ease;
    color: #a60303;
    transform: translateX(-10px);
  }
  animation: ${({ exitAnimation }) =>
    exitAnimation ? `${exitAnimation} 1s ease forwards` : ""};

  @keyframes animationExitButtons {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const styledWarningArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
  position: relative;

  .entryTypography {
    opacity: 0;
    letter-spacing: -15px;
    animation: entryTypography 0.5s ease forwards;
  }

  .circle-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    float: left;
    margin: 10px;
    animation: entryWarning 1s ease forwards;
    transform: scale(0);
  }

  .icon {
    position: absolute;
    color: #fff;
    font-size: 55px;
    top: 55px;
    left: 55px;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }

  .circle {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 2.5px;
    background-clip: content-box;
    animation: spin 10s linear infinite;
  }

  .circle-wrapper:active .circle {
    animation: spin 2s linear infinite;
  }

  .warning {
    background-color: #a60303;
    border: 2.5px dashed #fff;
  }

  .page-wrapper {
    height: 100vh;
    background-color: #a60303;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes entryWarning {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes entryTypography {
    0% {
      opacity: 0;
      letter-spacing: -9px;
    }
    100% {
      opacity: 1;
      letter-spacing: 0px;
    }
  }

  @keyframes spin {
    100% {
      transform: rotateZ(360deg);
    }
  }
`;
