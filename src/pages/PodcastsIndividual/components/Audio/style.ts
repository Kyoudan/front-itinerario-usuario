import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  background-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
  width: 100%;
  height: 300px;

  .Container {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    row-gap: 10px;
    flex-direction: column;
    margin-left: 5em;
  }

  .Title {
    font-size: 1.8em;
    font-weight: 600;
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
    font-family: "Montserrat", sans-serif;
  }

  .Description {
    max-width: 600px;
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#c2c2c2")};
    font-family: "Montserrat", sans-serif;
    text-align: justify;
  }

  .divAudio {
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 25px;
    margin-top: 60px;
  }

  .Progress {
    width: 50%;
    height: 11px;
  }

  .Volume {
    width: 100px;
  }
  .Icons {
    color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  }

  audio {
    visibility: hidden;
    position: absolute;
    top: 0;
  }
`;

export const styledButton = styled.button`
  width: 50px;
  height: 40px;
  background-color: #a60303;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
