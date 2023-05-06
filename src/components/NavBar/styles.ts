import styled from "@emotion/styled";

export const styledDiv = styled.div`
  width: 100%;
`;

export const styledNavBarRight = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 725px) {
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
