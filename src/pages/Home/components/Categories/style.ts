import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
  position: relative;
  user-select: none;
  overflow-x: hidden;
  overflow-y: visible;
`;

export const styledDivCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const DivCenter = styled.div`
  width: 300px;
  height: 100px;
  background-color: transparent;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px dashed #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .Text {
    font-size: 15px;
    color: #494949;
    font-family: "Montserrat", sans-serif;
  }
`;

export const boxCategories = styled.div`
  width: 130px;
  background-color: #a60303;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  cursor: move;
  transition: 0.2s ease;

  .TextBox {
    color: #fff;
    font-size: 1.3em;
    font-family: "Montserrat", sans-serif;
  }
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.5);
  }
`;
