import styled from "@emotion/styled";
import { IStyledDiv, IStyledShadowImg } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  
  @media (max-width: 680px) {
    height: 300px;
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
  @media (max-width: 680px) {
    width: 120%;
    height: auto;
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
`;

export const styledLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
`;
