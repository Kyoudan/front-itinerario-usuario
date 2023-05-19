import styled from "@emotion/styled";
import { IStyledDiv, IStyledText } from "./types";

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

  .ImagemConteudo {
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
