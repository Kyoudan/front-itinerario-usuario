import styled from "@emotion/styled";
import { IStyledDiv, IStyledShadowImg } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  visibility: hidden;

  @media (max-width: 680px) {
    height: 500px;
  }
`;

export const styledImg = styled.img`
  width: 1220px;
  height: 705px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  user-select: none;

  @media (max-width: 1343px) {
    width: 1020px;
    height: 585px;
  }

  @media (max-width: 1190px) {
    width: 800px;
    height: 505px;
  }

  @media (max-width: 567px) {
    width: 600px;
    height: 400px;
  }

  @media (max-width: 397px) {
    width: 500px;
    height: 300px;
    bottom: 100px;
  }
`;

export const shadowImg = styled.div<IStyledShadowImg>`
  width: 1520px;
  height: 885px;
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: ${({ theme }) =>
    theme === "dark"
      ? "inset -100px -100px 100px 60px #1c1c1c"
      : "inset -100px -100px 100px 60px #fff"};
  z-index: 3;

  @media (max-width: 680px) {
    width: 200vw;
    height: 150vw;
    box-shadow: ${({ theme }) =>
      theme === "dark"
        ? "inset -10px -10px 50px 60px #1c1c1c"
        : "inset -10px -10px 50px 60px #fff"};
  }
  @media (max-width: 397px) {
    bottom: 100px;
  }
`;

export const styledLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;

  .text {
    font-size: 38em;
    z-index: 4;

    @media (max-width: 1630px) {
      font-size: 35em;
    }

    @media (max-width: 1510px) {
      font-size: 33em;
    }
    @media (max-width: 1423px) {
      font-size: 30em;
    }
    @media (max-width: 1303px) {
      font-size: 28em;
    }
    @media (max-width: 1215px) {
      font-size: 25em;
    }
    @media (max-width: 1091px) {
      font-size: 22em;
    }
    @media (max-width: 962px) {
      font-size: 19em;
    }
    @media (max-width: 841px) {
      font-size: 16em;
    }
    @media (max-width: 703px) {
      font-size: 13em;
    }
    @media (max-width: 591px) {
      font-size: 10em;
    }
    @media (max-width: 452px) {
      font-size: 8em;
    }
    @media (max-width: 361px) {
      font-size: 6em;
    }
  }
`;
