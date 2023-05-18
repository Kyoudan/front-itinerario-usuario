import styled from "@emotion/styled";
import { IstyledDivInputNavBar } from "./types";

export const styledDiv = styled.div`
  .Toolbar {
    flex-direction: row;

    @media (max-width: 605px) {
      flex-direction: column-reverse;
    }
  }

  .MenuIcon {
    font-size: 1em;
    border: 0px;
    padding: 0;
    border-radius: 0;

    @media (max-width: 605px) {
      font-size: 1.2em;
      border: 1px spçod #fff;
      padding: 5px;
      border-radius: 50%;
    }
  }

  .Box {
    width: 65%;
    flex-direction: row;
    margin-top: 0px;

    @media (max-width: 730px) {
      width: 92%;
    }

    @media (max-width: 605px) {
      flex-direction: column;
      margin-top: 10px;
    }
  }
`;

export const styledNavBarRight = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 690px) {
    width: 8%;
  }
`;

export const styledNavBarLeft = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
`;

export const styledDivInputNavBar = styled.div<IstyledDivInputNavBar>`
  height: 90%;
  background-color: #ff3d3d;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  transition: 0.5s ease;

  .IconSearch {
    font-size: 3em;
    transition: 0.5s ease;
    background-color: ${({ searchButtonActivate }) =>
      searchButtonActivate ? "#A60303" : "transparent"};
    cursor: ${({ searchButtonActivate }) =>
      searchButtonActivate ? "pointer" : "default"};
    border-radius: 50%;
    padding: 0px 5px;
  }
`;

export const styledInputNavBar = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  outline: none;
  color: #fff;
  background-color: transparent;
  font-size: 1.3em;
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    color: #c7c5c5;
    font-size: 1em;
    font-family: "Montserrat", sans-serif;
  }
`;
