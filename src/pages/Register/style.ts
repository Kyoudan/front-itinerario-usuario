import styled from "@emotion/styled";
import { IStyledLeft, IStyledRight, IStyledTheme } from "./types";

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
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
  z-index: 2;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};

  fieldset {
    border: "1px solid red";
  }
`;

export const styledThemeArea = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 3;

  cursor: pointer;
`;
export const styledBackArea = styled.div`
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
`;
