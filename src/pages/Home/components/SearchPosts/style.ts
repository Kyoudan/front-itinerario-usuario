import styled from "@emotion/styled";

export const styledDiv = styled.div`
  width: 100%;
  height: 650px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
`;

export const styledLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;

export const styledRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .iconSearch {
    font-size: 2em;
    position: absolute;
    left: -20px;
    top: -20px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 1px #000;
    border-radius: 50%;
  }
`;
export const styledRightAfter = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ::after {
    content: "Resultado";
    width: 100%;
    position: absolute;
    top: -30px;
    left: 40px;
    font-size: 2em;
    font-family: "Montserrat", sans-serif;
    color: #a60303;
    transform: translateX(-20px);
    opacity: 0;
    transition: 0.5s ease;
  }

  :hover::after {
    transform: translateX(0px);
    opacity: 1;
    transition: 0.5s ease;
  }
`;
