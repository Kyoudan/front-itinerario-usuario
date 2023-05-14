import styled from "@emotion/styled";

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
