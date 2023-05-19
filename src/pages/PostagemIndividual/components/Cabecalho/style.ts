import styled from "@emotion/styled";

export const styledDiv = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  .Title {
    font-size: 3.5em;
    font-weight: bold;
    color: #000;
    font-family: "Montserrat", sans-serif;
    max-width: 800px;
  }
  .Description {
    font-size: 1.5em;
    color: #494949;
    font-family: "Montserrat", sans-serif;
    max-width: 800px;
  }

  .AvatarDiv {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 10px;
    flex-direction: row;
    margin-top: 10px;
  }

  .Author {
    font-size: 1em;
    font-weight: bold;
    color: #303030;
    font-family: "Montserrat", sans-serif;
    max-width: 800px;
  }

  .Date {
    font-size: 1em;
    color: #494949;
    font-family: "Montserrat", sans-serif;
    max-width: 800px;
  }

  .BoxCabecalho {
    border-bottom: 1px solid #1c1c1c;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
