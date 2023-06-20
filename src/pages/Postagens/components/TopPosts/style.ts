import styled from "@emotion/styled";
import { IStyledLeft, IStyledRight } from "./types";

export const styledSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;

  .TextSwiper {
    position: absolute;
    bottom: 40px;
    left: 40px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    pointer-events: none;
    user-select: none;
    @media (max-width: 1078px) {
      font-size: 1.2em;
      bottom: 60px;
      left: auto;
    }

    @media (max-width: 500px) {
      font-size: 0.8em;
      bottom: 50px;
      left: auto;
    }
  }
  .DescriptionSwiper {
    position: absolute;
    bottom: 25px;
    left: 40px;
    color: #fff;
    font-family: "Montserrat";
    font-size: 0.8em;
    pointer-events: none;
    user-select: none;

    @media (max-width: 1078px) {
      font-size: 0.8em;
      bottom: 10px;
      left: auto;
    }

    @media (max-width: 500px) {
      font-size: 0.5em;
      bottom: 40px;
      left: auto;
    }
  }

  .imageSwiper {
    transition: 0.5s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      transform: scale(1.1);
      transition: 0.5s ease;
    }
  }
`;

export const styledDiv = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
  }
`;

export const styledLeft = styled.div<IStyledLeft>`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }

  .Text {
    font-size: 5em;
    font-family: "Bebas neue";
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
    line-height: 60px;
    text-align: left;
    margin-left: 100px;
    user-select: none;

    @media (max-width: 900px) {
      text-align: center;
      margin-left: 0px;
    }
  }
`;

export const styledRight = styled.div<IStyledRight>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 0px;
  }
`;
