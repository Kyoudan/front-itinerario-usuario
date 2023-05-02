import styled from "@emotion/styled";
import { IStyledRight } from "./types";

export const styledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const stlyedRight = styled.div<IStyledRight>`
  width: 1400px;
  border-left: 1px solid #a60303;
  background: linear-gradient(60deg, #a60303, #1c1c1c);
  object-fit: cover;
`;

export const styledLeft = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
`;
