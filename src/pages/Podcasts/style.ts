import styled from "@emotion/styled";
import { IStyledDiv } from "./types";

export const styledDiv = styled.div<IStyledDiv>`
  width: 100%;
  min-height: 880px;
  background-color: ${({ theme }) => (theme === "dark" ? "#1c1c1c" : "fff")};
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .Container {
    width: 70%;
    height: 100%;
    margin: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media (max-width: 850px) {
      width: 95%;
      margin: 0;
      margin-top: 40px;
    }

    .Podcasts {
      width: 100%;
      height: 100px;
      background-color: ${({ theme }) =>
        theme === "dark" ? "#1c1c1c" : "fff"};
      border-radius: 5px;
      border: 1px solid #737373;
      cursor: pointer;
      transition: 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 50px;

      @media (max-width: 435px) {
        column-gap: 10px;
      }

      &:hover {
        transition: 0.5s ease;
        transform: scale(1.02);
        border: 1px solid #a60303;
        .Icon {
          .DivIconMusic {
            animation: rotateBackground 5s linear infinite;
          }
        }
      }

      .Icon {
        margin-left: 50px;

        @media (max-width: 435px) {
          margin-left: 10px;
        }

        .DivIconMusic {
          width: 80px;
          height: 80px;
          background: linear-gradient(35deg, #a60303, #1c1c1c);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          @media (max-width: 435px) {
            width: 50px;
            height: 50px;
          }

          @keyframes rotateBackground {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .IconMusic {
            width: 50px;
            height: 50px;
            color: #fff;
            @media (max-width: 435px) {
              width: 35px;
              height: 35px;
            }
          }
        }
      }
    }

    .Content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .Title {
        font-size: 20px;
        font-weight: 600;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
        font-family: "Montserrat", sans-serif;
        margin-right: 5px;
      }

      .Description {
        font-size: 16px;
        font-weight: 400;
        color: #737373;
        font-family: "Montserrat", sans-serif;
        margin-right: 5px;
      }
    }
  }
`;
