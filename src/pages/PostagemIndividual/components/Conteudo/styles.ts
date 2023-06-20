import styled from "@emotion/styled";
import { IStyledDiv, IStyledImage, IStyledText } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "#fff")};
`;

export const styledContent = styled.div`
  margin-top: 20px;
  max-width: 800px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;

  .ImagemPostagem {
    max-width: 98%;
    height: auto;
    border-radius: 10px;
    margin: 30px 0px;
  }

  .DivContentText {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const styledText = styled.p<IStyledText>`
  font-size: ${({ size }) => (size ? `${size}em` : "1em")};
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
  text-align: justify;
  max-width: 800px;
  margin-bottom: 10px;
  line-height: ${({ size }) =>
    size && size > 1.7 ? (size > 2.5 ? "44px" : "33px") : "25px"};
`;

export const styledImage = styled.img<IStyledImage>`
  max-width: 98%;
  height: auto;
  border-radius: ${({ reference }) =>
    !reference ? "10px" : "10px 10px 0px 0px"};
  margin-top: 30px;
  margin-bottom: ${({ reference }) => (!reference ? "30px" : "0px")};
`;

export const styledReference = styled.a<IStyledImage>`
  width: 98%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f;
  visibility: visible;
  margin: 0px 0px 30px 0px;
  border-radius: 0px 0px 10px 10px;
  text-align: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  pointer-events: none;
`;
