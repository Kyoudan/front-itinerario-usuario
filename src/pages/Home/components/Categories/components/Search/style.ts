import styled from "@emotion/styled";
import { IStyledBox, IStyledSubBox } from "./types";

export const styledDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

export const styledBox = styled.div<IStyledBox>`
  width: 800px;
  height: 90%;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  position: relative;

  .Alert {
    width: 85%;
    font-size: 1.3em;
    font-family: "Montserrat", sans-serif;
    align-items: center;
  }
`;

export const styledSubBox = styled.div<IStyledSubBox>`
  width: 90%;
  height: 80px;
  background-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
  border-radius: 5px;
  padding: 10px;

  .Title {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  }

  .Text {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  }
`;

export const styledBackButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
  position: absolute;
  top: -30px;
  left: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .Icon {
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
    font-size: 2.5em;
  }
`;
