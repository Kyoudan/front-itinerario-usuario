import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: auto;
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    width: 100%;
  }

  .Details {
    font-size: 1.3em;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    margin-top: 3.5em;
    margin-left: 3.5em;
    text-align: justify;
    padding-bottom: 3.5em;
    max-width: 60%;

    @media (max-width: 850px) {
      margin: 30px;
      max-width: 100%;
    }
  }
`;
