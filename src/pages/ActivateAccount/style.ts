import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};

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
    animation: entryIcon 1s ease forwards;
  }

  .icon {
    position: absolute;
    color: #fff;
    font-size: 4em;
    top: 60px;
    left: 54px;
    transform: translate(-50%, -50%);
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

  .success {
    background-color: #4bb543;
    border: 2.5px dashed #4bb543;
  }

  .error {
    background-color: #ca0b00;
    border: 2.5px dashed #ca0b00;
  }

  .warning {
    background-color: #f0d500;
    border: 2.5px dashed #f0d500;
  }

  .page-wrapper {
    height: 100vh;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes spin {
    100% {
      transform: rotateZ(360deg);
    }
  }

  @keyframes entryIcon {
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
`;
