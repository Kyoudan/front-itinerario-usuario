import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  background-color: #1c1c1c;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  .Container {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    row-gap: 10px;
    flex-direction: column;
    margin-left: 5em;
    border-bottom: 1px solid #a60303;

    @media (max-width: 850px) {
      width: 90%;
      margin-left: 0em;
      margin: auto;
    }
  }

  .Title {
    font-size: 1.8em;
    font-weight: 600;
    color: #fff;
    font-family: "Montserrat", sans-serif;
  }

  .Description {
    max-width: 600px;
    font-size: 1em;
    font-weight: 600;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    text-align: justify;
  }

  .divAudio {
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 25px;
    margin-top: 60px;

    @media (max-width: 850px) {
      flex-direction: column;
      row-gap: 20px;
    }

    .divAudioProgress {
      width: 100%;
      display: flex;
      flex-direction: row;
      column-gap: 25px;
    }
  }

  .Progress {
    width: 50%;
    height: 11px;
  }

  .Volume {
    width: 100px;
  }
  .Icons {
    color: #fff;
  }

  audio {
    visibility: hidden;
    position: absolute;
    top: 0;
  }
`;

export const styledButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #a60303;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    width: 60px;
    height: 60px;
  }
`;
