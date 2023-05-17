import styled from "@emotion/styled";
import { IStyledLeft, IStyledRight } from "./types";

export const styledDiv = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const styledLeft = styled.div<IStyledLeft>`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .Text {
    font-size: 5em;
    font-family: "Bebas neue";
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1c1c1c")};
    line-height: 60px;
    text-align: left;
    margin-left: 100px;
    user-select: none;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #1c1c1c;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--swiper-theme-color);
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }
`;

export const styledRight = styled.div<IStyledRight>`
  width: 50%;
  height: 100%;
  background-color: green;
`;
